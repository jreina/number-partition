const partitionR = (leftover, partitionRemainder, partitions) => {
  if (partitionRemainder === 1) return partitions.concat(leftover);
  const delta = Math.ceil(Math.random() * (leftover - partitionRemainder));
  return leftover === partitionRemainder
    ? partitions.concat(1)
    : partitionR(
        leftover - delta,
        partitionRemainder - 1,
        partitions.concat(delta)
      );
};

/**
 * Partition a given natural number, `x`, into `n` partitions. Quotients are accepted for `x` and `n` but are floored to integer values.
 */
const partitionInto = (/** @type {number} */ n) => (
  /** @type {number} */ x
) => {
  if (x < n) {
    throw new Error(
      'Invalid arguments. The number to be partitioned must exceed the number of partitions!'
    );
  }
  try {
    return partitionR(Math.floor(x), Math.floor(n), []);
  } catch (err) {
    err.message = `(${n}, ${x})\n${err.message}`;
    throw err;
  }
};

module.exports = partitionInto;
