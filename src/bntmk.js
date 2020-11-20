/**
 * Run the Benchmark.
 *
 * @param {string} name
 * @param {callback} callback
 */
exports.run = function (name, callback) {
  const n = 100;
  const results = Array(n - 1);

  for (let i = 0; i < n; i++) {
    const time = process.hrtime();
    callback();
    const [_s, ns] = process.hrtime(time);

    if (i === 0) {
      // 1st run does not count
      continue;
    }

    results[i - 1] = ns;
  }

  const average = results.reduce((a, b) => a + b, 0) / n;

  console.log(`${name} => ${average} ns/op`);
};
