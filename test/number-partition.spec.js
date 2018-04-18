const { expect } = require('chai');
const partition = require('../number-partition');

describe('#partition', function() {
  it('Should successfully partition 5,000 numbers', function() {
    Array(5000)
      .fill(0)
      .map(() => [Math.random(), Math.random()])
      .map(([p, q]) => [p * 512 + 512, q * 512 + 3])
      .map(([x, n]) => ({ partitions: partition(n)(x), seed: { n, x } }))
      .map(({ partitions, seed }) => ({
        seed,
        partitions,
        sum: partitions.reduce((x, y) => x + y)
      }))
      .forEach(({ seed: { x, n }, sum, partitions }) => {
        expect(Math.floor(sum)).to.equal(Math.floor(x));
        expect(partitions.length).to.equal(
          Math.floor(n),
          `Partition length did not match! expected ${Math.floor(n)} got ${
            partitions.length
          }`
        );
      });
  });
});
