/**
 *
 * @param {number} leftover
 * @param {number} partitionRemainder
 * @param {Array.<number>} partitions
 * @returns {Array.<number>}
 */
const partitionR = (leftover, partitionRemainder, partitions) => {
  const delta = Math.ceil(Math.random() * (leftover - partitionRemainder));
  return partitionRemainder === 1
    ? partitions.concat(leftover)
    : partitionR(
        leftover - delta,
        partitionRemainder - 1,
        partitions.concat(delta)
      );
};

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
  return partitionR(Math.floor(x), Math.floor(n), []);
};

module.exports = partitionInto;
