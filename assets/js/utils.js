// Generated by CoffeeScript 1.6.3
(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  define(["d3"], function(d3) {
    var years, _i, _results;
    years = (function() {
      _results = [];
      for (_i = 1950; _i <= 2015; _i++){ _results.push(_i); }
      return _results;
    }).apply(this);
    return {
      max_for_prenoms: function(prenoms_data, years_array) {
        if (years_array == null) {
          years_array = years;
        }
        return d3.max(prenoms_data, function(prenom_data) {
          var count, i;
          return d3.max((function() {
            var _j, _len, _ref, _ref1, _results1;
            _ref = prenom_data.years;
            _results1 = [];
            for (i = _j = 0, _len = _ref.length; _j < _len; i = ++_j) {
              count = _ref[i];
              if (_ref1 = years[0] + i, __indexOf.call(years_array, _ref1) >= 0) {
                _results1.push(count);
              }
            }
            return _results1;
          })());
        }) || 0;
      },
      prenom_color_scale: (function() {
        var colors, scales;
        colors = ["#4c5d91", "#4c92b9", "#53a488", "#a5ad5c", "#e0da2f", "#b98c6f", "#d57599", "#a15599"];
        scales = {
          h: d3.scale.ordinal().range(colors.slice(0, 5)),
          f: d3.scale.ordinal().range(colors.slice(0).reverse().slice(0, 5))
        };
        return function(prenom_data) {
          return scales[prenom_data.sexe](prenom_data.prenom);
        };
      })(),
      duration: 1000,
      years: years,
      axis: (function() {
        var full_range;
        full_range = d3.extent(years);
        return {
          x: d3.scale.linear().domain(full_range),
          y: d3.scale.linear().domain([0, 300])
        };
      })(),
      prenoms_selection: (function() {
        var prenoms;
        prenoms = [];
        prenoms.add = function(prenom) {
          return prenoms.push(prenom);
        };
        prenoms.remove = function(prenom) {
          var i;
          i = prenoms.indexOf(prenom);
          return prenoms.splice(i, 1);
        };
        return prenoms;
      })()
    };
  });

}).call(this);
