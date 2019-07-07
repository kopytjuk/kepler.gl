import {slice, linearish, initRange} from "d3-scale";
import {extent, bisect} from 'd3-array';

export default function customQuantize() {
  var domain = [0, 1],
      range = [0.5],
      unknown;

  function scale(x) {
    n_domain = domain.length;

    if (x < domain[0]) {
      return range[0];
    }

    var i;
    for (i = 0; i < n_domain; i++) {
      var d_i = domain[i];

      if ((i + 1) < n_domain) {
        var d_i_next = domain[i + 1];

        if ((x >= d_i) && (x < d_i_next)) {
          return range[i];
        }
      } else {
        range[-1]
      }

    }
  }

  function rescale() {
    return scale;
  }

  scale.domain = function(_) {
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice.call(_)).length - 1, rescale()) : range.slice();
  };
};
