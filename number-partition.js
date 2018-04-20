/**
 * Partition a given natural number, `x`, into `n` partitions. Quotients are accepted for `x` and `n` but are floored to integer values.
 * @param {number} n
 * @returns {(x: number) => Array.<number>}
 */
const partitionInto = n => x => {
  if (x < n) {
    throw new Error(
      'Invalid arguments. The number to be partitioned must exceed the number of partitions!'
    );
  }
  if (n < 1) {
    throw new Error('Invalid arguments. Must have at least 1 partition.');
  }
  if (x < 0) {
    throw new Error('Invalid arguments. Number to partition must be > 0.');
  }
  if (n === 1) {
    return [x];
  }
  const p = Math.floor(n);
  const q = Math.floor(x);
  const partitionPositions = Array(p - 1)
    .fill(0)
    .map(() => Math.round(Math.random() * q))
    .sort((x, y) => x - y);

  const deltas = partitionPositions.map(
    (v, i, a) => (i === 0 ? v : v - a[i - 1])
  );

  return deltas.concat(q - partitionPositions[p - 2]);
};

module.exports = partitionInto;
