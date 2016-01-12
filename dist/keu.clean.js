;(function() {
(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == 'function' && require;
        if (!u && a)
          return a(o, !0);
        if (i)
          return i(o, !0);
        var f = new Error('Cannot find module \'' + o + '\'');
        throw f.code = 'MODULE_NOT_FOUND', f;
      }
      var l = n[o] = { exports: {} };
      t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = typeof require == 'function' && require;
  for (var o = 0; o < r.length; o++)
    s(r[o]);
  return s;
}({
  1: [
    function (require, module, exports) {
      module.exports = function () {
        'use strict';
        var m = {};
        /*****************************************
        *	Machine Definitions
        *****************************************/
        const MACHINES = [
          {
            models: [
              4385,
              4394
            ],
            name: 'Leg Extension A250'
          },
          {
            models: [
              4386,
              4395
            ],
            name: 'Leg Extension A250, Range Limiter'
          },
          {
            models: [
              4401,
              4410
            ],
            name: 'Leg Extension A300 120 degree'
          },
          {
            models: [
              4402,
              4411
            ],
            name: 'Leg Extension A300 90 degree'
          },
          {
            models: [
              4641,
              4650
            ],
            name: 'Leg Curl A250'
          },
          {
            models: [
              4642,
              4651
            ],
            name: 'Leg Curl A250, Range Limiter'
          },
          {
            models: [
              4657,
              4666
            ],
            name: 'Leg Curl A300'
          },
          {
            models: [
              4897,
              4906
            ],
            name: 'Chest Press A250'
          },
          {
            models: [
              4913,
              4922
            ],
            name: 'Chest Press A300'
          },
          {
            models: [
              4917,
              4923
            ],
            name: 'Biaxial Chest Press A300'
          },
          {
            models: [
              4918,
              4924
            ],
            name: 'Straight Push Chest Press A300'
          },
          {
            models: [4919],
            name: 'Straight Push Chest Press A300 2010-3-1'
          },
          {
            models: [4920],
            name: 'Straight Push Chest Press A300 2010-9-1'
          },
          {
            models: [
              5169,
              5178
            ],
            name: 'Shoulder Raise A300'
          },
          {
            models: [
              5425,
              5434
            ],
            name: 'Squat A300'
          },
          {
            models: [
              5426,
              5435
            ],
            name: 'Squat A300'
          },
          {
            models: [
              5665,
              5674
            ],
            name: 'Military Press A250'
          },
          {
            models: [
              5681,
              5690
            ],
            name: 'Military Press A300'
          },
          {
            models: [
              5921,
              5930
            ],
            name: 'Arm Curl A250'
          },
          {
            models: [
              5942,
              5947
            ],
            name: 'Arm Curl A300'
          },
          {
            models: [
              6193,
              6202
            ],
            name: 'Shrug A300'
          },
          {
            models: [
              6433,
              6442
            ],
            name: 'Tricep A250'
          },
          {
            models: [
              6449,
              6458
            ],
            name: 'Tricep A300'
          },
          {
            models: [6455],
            name: 'Engineering Test Tricep, one sided'
          },
          {
            models: [
              8225,
              8234
            ],
            name: 'Upper Back A250'
          },
          {
            models: [
              8241,
              8245,
              8250,
              8251
            ],
            name: 'Upper Back A300'
          },
          {
            models: [
              8481,
              8490
            ],
            name: 'Lat Pulldown A250'
          },
          {
            models: [
              8497,
              8506
            ],
            name: 'Lat Pulldown A300'
          },
          {
            models: [
              8737,
              8746
            ],
            name: 'Seated Butterfly A250'
          },
          {
            models: [
              8753,
              8762
            ],
            name: 'Seated Butterfly A300'
          },
          {
            models: [
              8757,
              8763
            ],
            name: 'Seated Butterfly A350'
          },
          {
            models: [
              9009,
              9018
            ],
            name: 'Abductor A300'
          },
          {
            models: [
              9265,
              9274
            ],
            name: 'Adductor A300'
          },
          {
            models: [
              9505,
              9514
            ],
            name: 'Leg Press A250'
          },
          {
            models: [
              9521,
              9530
            ],
            name: 'Leg Press A300'
          },
          {
            models: [
              9761,
              9770
            ],
            name: 'Standing Hip A250'
          },
          {
            models: [
              9777,
              9786
            ],
            name: 'Standing Hip A300'
          },
          {
            models: [
              10017,
              10026
            ],
            name: 'Abdominal A250'
          },
          {
            models: [
              10033,
              10042
            ],
            name: 'Abdominal A300'
          },
          {
            models: [
              10273,
              10282
            ],
            name: 'Lower Back A250'
          },
          {
            models: [
              10274,
              10283
            ],
            name: 'Lower Back A250, Range Limiter'
          },
          {
            models: [
              10289,
              10294,
              10298,
              10299
            ],
            name: 'Lower Back A300'
          },
          {
            models: [
              10550,
              10554
            ],
            name: 'Seated Calf A300'
          },
          {
            models: [
              12288,
              12298
            ],
            name: 'Performance Zone'
          },
          {
            models: [
              12304,
              12314
            ],
            name: 'Performance Trainer'
          },
          {
            models: [
              12320,
              12330
            ],
            name: 'Functional Trainer'
          },
          {
            models: [
              12336,
              12346
            ],
            name: 'Triple Trainer'
          },
          {
            models: [
              12352,
              12362
            ],
            name: 'Functional Wall Trainer'
          },
          {
            models: [12544],
            name: 'Rack, Seat Settings'
          },
          {
            models: [
              12547,
              12548,
              12549,
              12550,
              12560,
              12561,
              12576
            ],
            name: 'Rack, Iron Weight'
          },
          {
            models: [12849],
            name: 'Single Runner'
          },
          {
            models: [
              12850,
              12858
            ],
            name: 'Dual Runner'
          },
          {
            models: [39312],
            name: 'One arm bandit test stand'
          },
          {
            models: [39321],
            name: 'Pressure Gauge PSI'
          },
          {
            models: [39320],
            name: 'Pressure Gauge KPA'
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
      }();
      return exports;
    },
    {}
  ],
  2: [
    function (require, module, exports) {
      module.exports = function () {
        'use strict';
        var keu = {};
        keu.machines = machine_definitions;
        return keu;
      }();
      return exports;
    },
    { './machine_definitions': 1 }
  ]
}, {}, [2]));
}());