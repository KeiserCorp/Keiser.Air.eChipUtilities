module.exports = function () {
	'use strict';
	var messenger = {};

	/*****************************************
	 *	Constants
	 *****************************************/
	const MESSENGER_CONST = {
		TYPE: {
			RESPONSE: 'response',
			REQUEST: 'request'
		},
		ACTION: {
			CONNECT: 'connect',
			ECHIP_SET: 'echip-set',
			ECHIP_GET: 'echip-get'
		}
	}

	/*****************************************
	 *	Messenger Variables
	 *****************************************/
	var appWindow;
	var appOrigin;
	var status = {
		initialized: false,
		connected: false,
		enabled: false,
		actions: {
			eChipSet: false,
			eChipGet: false
		}
	};

	// Connection request message for reference
	var connectionRequestID;

	// Callback methods for portal requests
	var onGetRequestCallback;
	var onSetRequestCallback;

	/*****************************************
	 *	Receive Message
	 *****************************************/
	var receiveMessage = function (messageEvent) {
		if (!status.initialized) {
			initialize(messageEvent);
		} else {
			dispatch(messageEvent.data);
		}
	};

	/*****************************************
	 *	Send Message
	 *****************************************/
	var sendMessage = function (messageObject) {
		if (appWindow && appOrigin) {
			appWindow.postMessage(JSON.stringify(messageObject), appOrigin);
		}
	};

	/*****************************************
	 *	Compose Message
	 *****************************************/
	var composeMessage = function (id, type, action, data) {
		var messageObject = {
			id: id,
			type: type,
			action: action,
			data: data
		};
		sendMessage(messageObject);
	};

	/*****************************************
	 *	Messenger Initialization
	 *****************************************/
	var initialize = function (messageEvent) {
		var messageObject = JSON.parse(messageEvent.data);
		if ((messageObject || {})
			.action && messageObject.action === MESSENGER_CONST.ACTION.CONNECT) {
			appWindow = messageEvent.source;
			appOrigin = messageEvent.origin;
			connectionRequestID = messageObject.id;
			status.initialized = true;
			if (status.enabled) {
				connect();
			}
		}
	};

	/*****************************************
	 *	Messenger Dispatch
	 *****************************************/
	var dispatch = function (messageData) {
		if (status.enabled) {
			var messageObject = JSON.parse(messageData);
			if ((messageObject || {})
				.id) {
				switch (messageObject.action) {
				case MESSENGER_CONST.ACTION.ECHIP_SET:
					onSetRequestCallback(messageObject.data, function () {
						setRequestResponse(messageObject.id);
					});
					break;
				case MESSENGER_CONST.ACTION.ECHIP_GET:
					onGetRequestCallback(messageObject.data, function (data) {
						getRequestResponse(messageObject.id, data);
					});
					break;
				}
			}
		}
	};

	/*****************************************
	 *	Messenger Actions
	 *****************************************/
	var connect = function () {
		if (connectionRequestID) {
			var data = {
				actions: []
			};
			if (status.actions.eChipSet) {
				data.actions.push(MESSENGER_CONST.ACTION.ECHIP_SET);
			}
			if (status.actions.eChipGet) {
				data.actions.push(MESSENGER_CONST.ACTION.ECHIP_GET);
			}
			composeMessage(connectionRequestID, MESSENGER_CONST.TYPE.RESPONSE, MESSENGER_CONST.ACTION.CONNECT, data);
		}
	};

	var getRequestResponse = function (id, data) {
		composeMessage(id, MESSENGER_CONST.TYPE.RESPONSE, MESSENGER_CONST.ACTION.ECHIP_GET, data);
	};

	var setRequestResponse = function (id) {
		var data = {
			success: true
		};
		composeMessage(id, MESSENGER_CONST.TYPE.RESPONSE, MESSENGER_CONST.ACTION.ECHIP_SET, data);
	};

	/*****************************************
	 *	Messenger Enabled
	 *****************************************/
	messenger.enable = function (onGetRequest, onSetRequest) {
		if (typeof onGetRequest === 'function') {
			status.actions.eChipGet = true;
			onGetRequestCallback = onGetRequest;
		}
		if (typeof onSetRequest === 'function') {
			status.actions.eChipSet = true;
			onSetRequestCallback = onSetRequest;
		}
		status.enabled = true;
		if (status.initialized) {
			connect();
		}
	};

	/*****************************************
	 *	Messenger Disable
	 *****************************************/
	messenger.disable = function () {
		status.enabled = false;
		status.actions.eChipGet = false;
		status.actions.eChipSet = false;
		onGetRequestCallback = null;
		onSetRequestCallback = null;
		if (status.initialized) {
			connect();
		}
	};

	window.addEventListener('message', receiveMessage);
	return messenger;
}();
