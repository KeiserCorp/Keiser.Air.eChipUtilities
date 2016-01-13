(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.keu = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {
	'use strict';
	var m = {};

	/*****************************************
	 *	Machine Definitions
	 *****************************************/
	const MACHINES = [{
			models : [0x1121, 0x112A],
			name : 'Leg Extension A250'
		}, {
			models : [0x1122, 0x112B],
			name : 'Leg Extension A250, Range Limiter'
		}, {
			models : [0x1131, 0x113A],
			name : 'Leg Extension A300 120 degree'
		}, {
			models : [0x1132, 0x113B],
			name : 'Leg Extension A300 90 degree'
		}, {
			models : [0x1221, 0x122A],
			name : 'Leg Curl A250'
		}, {
			models : [0x1222, 0x122B],
			name : 'Leg Curl A250, Range Limiter'
		}, {
			models : [0x1231, 0x123A],
			name : 'Leg Curl A300'
		}, {
			models : [0x1321, 0x132A],
			name : 'Chest Press A250'
		}, {
			models : [0x1331, 0x133A],
			name : 'Chest Press A300'
		}, {
			models : [0x1335, 0x133B],
			name : 'Biaxial Chest Press A300'
		}, {
			models : [0x1336, 0x133C],
			name : 'Straight Push Chest Press A300'
		}, {
			models : [0x1337],
			name : 'Straight Push Chest Press A300 2010-3-1'
		}, {
			models : [0x1338],
			name : 'Straight Push Chest Press A300 2010-9-1'
		}, {
			models : [0x1431, 0x143A],
			name : 'Shoulder Raise A300'
		}, {
			models : [0x1531, 0x153A],
			name : 'Squat A300'
		}, {
			models : [0x1532, 0x153B],
			name : 'Squat A300'
		}, {
			models : [0x1621, 0x162A],
			name : 'Military Press A250'
		}, {
			models : [0x1631, 0x163A],
			name : 'Military Press A300'
		}, {
			models : [0x1721, 0x172A],
			name : 'Arm Curl A250'
		}, {
			models : [0x1736, 0x173B],
			name : 'Arm Curl A300'
		}, {
			models : [0x1831, 0x183A],
			name : 'Shrug A300'
		}, {
			models : [0x1921, 0x192A],
			name : 'Tricep A250'
		}, {
			models : [0x1931, 0x193A],
			name : 'Tricep A300'
		}, {
			models : [0x1937],
			name : 'Engineering Test Tricep, one sided'
		}, {
			models : [0x2021, 0x202A],
			name : 'Upper Back A250'
		}, {
			models : [0x2031, 0x2035, 0x203A, 0x203B],
			name : 'Upper Back A300'
		}, {
			models : [0x2121, 0x212A],
			name : 'Lat Pulldown A250'
		}, {
			models : [0x2131, 0x213A],
			name : 'Lat Pulldown A300'
		}, {
			models : [0x2221, 0x222A],
			name : 'Seated Butterfly A250'
		}, {
			models : [0x2231, 0x223A],
			name : 'Seated Butterfly A300'
		}, {
			models : [0x2235, 0x223B],
			name : 'Seated Butterfly A350'
		}, {
			models : [0x2331, 0x233A],
			name : 'Abductor A300'
		}, {
			models : [0x2431, 0x243A],
			name : 'Adductor A300'
		}, {
			models : [0x2521, 0x252A],
			name : 'Leg Press A250'
		}, {
			models : [0x2531, 0x253A],
			name : 'Leg Press A300'
		}, {
			models : [0x2621, 0x262A],
			name : 'Standing Hip A250'
		}, {
			models : [0x2631, 0x263A],
			name : 'Standing Hip A300'
		}, {
			models : [0x2721, 0x272A],
			name : 'Abdominal A250'
		}, {
			models : [0x2731, 0x273A],
			name : 'Abdominal A300'
		}, {
			models : [0x2821, 0x282A],
			name : 'Lower Back A250'
		}, {
			models : [0x2822, 0x282B],
			name : 'Lower Back A250, Range Limiter'
		}, {
			models : [0x2831, 0x2836, 0x283A, 0x283B],
			name : 'Lower Back A300'
		}, {
			models : [0x2936, 0x293A],
			name : 'Seated Calf A300'
		}, {
			models : [0x3000, 0x300A],
			name : 'Performance Zone'
		}, {
			models : [0x3010, 0x301A],
			name : 'Performance Trainer'
		}, {
			models : [0x3020, 0x302A],
			name : 'Functional Trainer'
		}, {
			models : [0x3030, 0x303A],
			name : 'Triple Trainer'
		}, {
			models : [0x3040, 0x304A],
			name : 'Functional Wall Trainer'
		}, {
			models : [0x3100],
			name : 'Rack, Seat Settings'
		}, {
			models : [0x3103, 0x3104, 0x3105, 0x3106, 0x3110, 0x3111, 0x3120],
			name : 'Rack, Iron Weight'
		}, {
			models : [0x3231],
			name : 'Single Runner'
		}, {
			models : [0x3232, 0x323A],
			name : 'Dual Runner'
		}, {
			models : [0x9990],
			name : 'One arm bandit test stand'
		}, {
			models : [0x9999],
			name : 'Pressure Gauge PSI'
		}, {
			models : [0x9998],
			name : 'Pressure Gauge KPA'
		}
	];

	/*****************************************
	 *	Machine Search
	 *
	 *	Note: Not the most efficient method
	 *	but it will on any browser.
	 *****************************************/

	m.getMachine = function (model) {
		for (var i = 0; i < MACHINES.length; i++) {
			for (var x = 0; x < MACHINES[i].models.length; x++) {
				if (MACHINES[i].models[x] == model) {
					return MACHINES[i];
				}
			}
		}
	};

	return m;
}
();

},{}],2:[function(require,module,exports){
module.exports = function () {
	'use strict';
	var keu = {};
	keu.machines = require('./machine_definitions');

	return keu;
}
();

},{"./machine_definitions":1}]},{},[2])(2)
});