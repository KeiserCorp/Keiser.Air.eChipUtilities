module.exports = function () {
	'use strict';
	var keu = {};
	keu.machines = require('./src/machine_definitions');

	return keu;
}
();
