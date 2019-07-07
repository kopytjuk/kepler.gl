import unittest

class CustomScaler:

    def __init__(self):
        self._domain = [0,1]
        self._range = [0.5]

    def scale(self, x):
        n_domain = len(self._domain)

        if x < self._domain[0]:
            return self._range[0]

        for i in range(n_domain):
            d_i = self._domain[i]

            if (i+1)<n_domain:
                d_i_next = self._domain[i+1]

                if (x >= d_i) and (x < d_i_next):
                    return self._range[i]
            else:
                return self._range[-1]


class TestScaler(unittest.TestCase):

    def setUp(self):
        self.scaler = CustomScaler()
        self.scaler._domain = [-8.1, -0.05, 0.05, 20]
        self.scaler._range = ["red", "green", "orange"]

    def test_scaler(self):

        self.assertEqual(self.scaler.scale(0.01), "green")
        self.assertEqual(self.scaler.scale(250), "orange")
        self.assertEqual(self.scaler.scale(-9), "red")


if __name__ == "__main__":
    unittest.main()
    