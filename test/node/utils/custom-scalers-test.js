import {customQuantize} from 'utils/custom-quantize';
import test from 'tape';

test('Custom quantize test', t => {

  const test_domain = [-8.1, -0.05, 0.05, 20];
  const test_range = ["red", "green", "orange"];

  scale_fn = customQuantize.domain(test_domain).range(test_range);

  t.equal(scale_fn(0.01), "green");
  t.equal(scale_fn(-10.01), "red");
  t.equal(scale_fn(100.01), "orange");

  t.end();
});

