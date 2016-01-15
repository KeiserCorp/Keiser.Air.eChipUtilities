module.exports = function () {
	'use strict';
	var messenger = {};

	const MESSENGER_CONST = {
		TYPE : {
			RESPONSE : 'response',
			REQUEST : 'request'
		},
		ACTION : {
			CONNECT : 'connect',
			ECHIP_SET : 'echip-set',
			ECHIP_GET : 'echip-get'
		}
	}

	/*****************************************
	 *	Messenger Variables
	 *****************************************/
	var appWindow;
	var appOrigin;
	var messengerStatus = {
		initialized : false,
		connected : false,
		enabled : false,
		actions : {
			eChipSet : false,
			eChipGet : false
		}
	};

	var eChipGetMethod;
	var eChipSetMethod;

	var connectionRequestMessage;
	var lastRequestID;

	/*****************************************
	 *	Receive Message
	 *****************************************/
	var receiveMessage = function (messageEvent) {
		if (!messengerStatus.initialized) {
			initializeMessenger(messageEvent);
		} else {
			dispatchMessage(messageEvent.data);
		}
	};

	/*****************************************
	 *	Send Message
	 *****************************************/
	var sendMessage = function (messageObject) {
		if (appWindow && appOrigin) {
			appWindow.postMessage(JSON.stringify(messageObject), appOrigin)
		}
	};

	/*****************************************
	 *	Messenger Initialization
	 *****************************************/
	var initializeMessenger = function (messageEvent) {
		var messageObject = JSON.parse(messageEvent.data);
		if ((messageObject || {}).action && messageObject.action == MESSENGER_CONST.ACTION.CONNECT) {
			appWindow = messageEvent.source;
			appOrigin = messageEvent.origin;
			connectionRequestMessage = messageObject;
			messengerStatus.initialized = true;
			if (messengerStatus.enabled) {
				messengerConnect();
			}
		}
	};

	/*****************************************
	 *	Messenger Dispatch
	 *****************************************/
	var dispatchMessage = function (messageData) {
		if (messageData && messageData != '') {
			var messageObject = JSON.parse(messageData);
			if ((messageObject || {}).id) {
				lastRequestID = messageObject.id;
				if (messengerStatus.enabled) {
					switch (messageObject.action) {
					case MESSENGER_CONST.ACTION.ECHIP_SET:
						eChipSetMethod(messageObject.data, function () {
							messengerSetEChip(messageObject.id);
						});
						break;
					case MESSENGER_CONST.ACTION.ECHIP_GET:
						messengerGetEChip(messageObject.id, eChipGetMethod(messageObject));
						break;
					}
				}
			}
		}
	};

	/*****************************************
	 *	Messenger Actions
	 *****************************************/
	var messengerConnect = function () {
		if (connectionRequestMessage) {
			var connectionResponseObject = {
				id : connectionRequestMessage.id,
				type : MESSENGER_CONST.TYPE.RESPONSE,
				action : MESSENGER_CONST.ACTION.CONNECT,
				data : {
					actions : []
				}
			};
			if (messengerStatus.actions.eChipSet) {
				connectionResponseObject.data.actions.push(MESSENGER_CONST.ACTION.ECHIP_SET);
			}
			if (messengerStatus.actions.eChipGet) {
				connectionResponseObject.data.actions.push(MESSENGER_CONST.ACTION.ECHIP_GET);
			}
			sendMessage(connectionResponseObject);
		}
	};

	var messengerGetEChip = function (id, data) {
		var responseObject = {
			id : id,
			type : MESSENGER_CONST.TYPE.RESPONSE,
			action : MESSENGER_CONST.ACTION.ECHIP_GET,
			data : data
		};
		sendMessage(responseObject);
	};

	var messengerSetEChip = function (id) {
		var responseObject = {
			id : id,
			type : MESSENGER_CONST.TYPE.RESPONSE,
			action : MESSENGER_CONST.ACTION.ECHIP_SET,
			data : {
				success : true
			}
		};
		sendMessage(responseObject);
	};

	/*****************************************
	 *	Messenger Enabled
	 *****************************************/
	messenger.enable = function (sendMethod, receiveMethod) {
		if (typeof sendMethod === 'function') {
			messengerStatus.actions.eChipGet = true;
			eChipGetMethod = sendMethod;
		}
		if (typeof receiveMethod === 'function') {
			messengerStatus.actions.eChipSet = true;
			eChipSetMethod = receiveMethod;
		}
		messengerStatus.enabled = true;
		if (messengerStatus.initialized) {
			messengerConnect();
		}
	};

	window.addEventListener('message', receiveMessage);
	return messenger;
}
();
