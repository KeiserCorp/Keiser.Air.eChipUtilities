module.exports = function () {
	'use strict';
	var machine = {};

	/*****************************************
	 *	Machine Definitions
	 *****************************************/
	const MACHINES = [{
		models: [0x1121, 0x112A],
		name: 'Leg Extension',
		line: 'A250',
		extra: '',
	}, {
		models: [0x1122, 0x112B],
		name: 'Leg Extension',
		line: 'A250',
		extra: 'Range Limiter',
	}, {
		models: [0x1131, 0x113A],
		name: 'Leg Extension',
		line: 'A300',
		extra: '120 Degree',
	}, {
		models: [0x1132, 0x113B],
		name: 'Leg Extension',
		line: 'A300',
		extra: '90 Degree',
	}, {
		models: [0x1221, 0x122A],
		name: 'Leg Curl',
		line: 'A250',
		extra: '',
	}, {
		models: [0x1222, 0x122B],
		name: 'Leg Curl',
		line: 'A250',
		extra: 'Range Limiter',
	}, {
		models: [0x1231, 0x123A],
		name: 'Leg Curl',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1321, 0x132A],
		name: 'Chest Press',
		line: 'A250',
		extra: '',
	}, {
		models: [0x1331, 0x133A],
		name: 'Chest Press',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1335, 0x133B],
		name: 'Biaxial Chest Press',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1336, 0x133C],
		name: 'Straight Push Chest Press',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1337],
		name: 'Straight Push Chest Press',
		line: 'A300',
		extra: '2010-3-1',
	}, {
		models: [0x1338],
		name: 'Straight Push Chest Press',
		line: 'A300',
		extra: '2010-9-1',
	}, {
		models: [0x1431, 0x143A],
		name: 'Shoulder Raise',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1531, 0x153A],
		name: 'Squat',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1532, 0x153B],
		name: 'Squat',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1621, 0x162A],
		name: 'Military Press',
		line: 'A250',
		extra: '',
	}, {
		models: [0x1631, 0x163A],
		name: 'Military Press',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1721, 0x172A],
		name: 'Arm Curl',
		line: 'A250',
		extra: '',
	}, {
		models: [0x1736, 0x173B],
		name: 'Arm Curl',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1831, 0x183A],
		name: 'Shrug',
		line: 'A300',
		extra: '',
	}, {
		models: [0x1921, 0x192A],
		name: 'Tricep',
		line: 'A250',
		extra: '',
	}, {
		models: [0x1931, 0x193A],
		name: 'Tricep',
		line: 'A300',
		extra: '',
	},  {
		models: [0x2021, 0x202A],
		name: 'Upper Back',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2031, 0x2035, 0x203A, 0x203B],
		name: 'Upper Back',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2121, 0x212A],
		name: 'Lat Pulldown',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2131, 0x213A],
		name: 'Lat Pulldown',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2221, 0x222A],
		name: 'Seated Butterfly',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2231, 0x223A],
		name: 'Seated Butterfly',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2235, 0x223B],
		name: 'Seated Butterfly',
		line: 'A350',
		extra: '',
	}, {
		models: [0x2331, 0x233A],
		name: 'Abductor',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2431, 0x243A],
		name: 'Adductor',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2521, 0x252A],
		name: 'Leg Press',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2531, 0x253A],
		name: 'Leg Press',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2621, 0x262A],
		name: 'Standing Hip',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2631, 0x263A],
		name: 'Standing Hip',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2721, 0x272A],
		name: 'Abdominal',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2731, 0x273A],
		name: 'Abdominal',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2821, 0x282A],
		name: 'Lower Back',
		line: 'A250',
		extra: '',
	}, {
		models: [0x2822, 0x282B],
		name: 'Lower Back',
		line: 'A250',
		extra: 'Range Limiter',
	}, {
		models: [0x2831, 0x2836, 0x283A, 0x283B],
		name: 'Lower Back',
		line: 'A300',
		extra: '',
	}, {
		models: [0x2936, 0x293A],
		name: 'Seated Calf',
		line: 'A300',
		extra: '',
	}, {
		models: [0x3000, 0x300A],
		name: 'Performance Zone',
		line: 'Infinity',
		extra: '',
	}, {
		models: [0x3010, 0x301A],
		name: 'Performance Trainer',
		line: 'Infinity',
		extra: '',
	}, {
		models: [0x3020, 0x302A],
		name: 'Functional Trainer',
		line: 'Infinity',
		extra: '',
	}, {
		models: [0x3030, 0x303A],
		name: 'Triple Trainer',
		line: 'Infinity',
		extra: '',
	}, {
		models: [0x3040, 0x304A],
		name: 'Functional Wall Trainer',
		line: 'Infinity',
		extra: '',
	}, {
		models: [0x3100],
		name: 'Rack',
		line: 'Power Rack',
		extra: 'Seat Settings',
	}, {
		models: [0x3103, 0x3104, 0x3105, 0x3106, 0x3110, 0x3111, 0x3120],
		name: 'Rack',
		line: 'Power Rack',
		extra: 'Iron Weight',
	}, {
		models: [0x3231],
		name: 'Single Runner',
		line: 'A300',
		extra: '',
	}, {
		models: [0x3232, 0x323A],
		name: 'Dual Runner',
		line: 'A300',
		extra: '',
	},];

	/*****************************************
	 *	Machine Search
	 *
	 *	Note: Not the most efficient method
	 *	but it will on any browser.
	 *****************************************/

	machine.getMachineDetails = function (model) {
		for (var i = 0; i < MACHINES.length; i++) {
			for (var x = 0; x < MACHINES[i].models.length; x++) {
				if (MACHINES[i].models[x] == model) {
					return MACHINES[i];
				}
			}
		}
	};

	return machine;
}();
