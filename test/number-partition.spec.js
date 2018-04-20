const { expect } = require('chai');
const partition = require('../number-partition');

describe('#partition', function() {
  it('Should throw correct error when n < 1', function() {
    expect(() => partition(0.9)(100)).to.throw(/^Invalid arguments\./);
  });

  it('Should throw correct error when x < 0', function() {
    expect(() => partition(1)(-0.1)).to.throw(/^Invalid arguments\./);
  });

  it('Should throw appropriate error when x is 0', function() {
    expect(() => partition(1)(0)).to.throw(/^Invalid arguments\./);
  });

  it('Should successfully partition 1,000 numbers', function() {
    const floorEach = arr => arr.map(Math.floor);
    Array(1000)
      .fill(0)
      .map(() => [Math.random() * 512 + 512, Math.random() * 512 + 1])
      .map(floorEach)
      .map(([x, n]) => ({ partitions: partition(n)(x), seed: { n, x } }))
      .map(({ partitions, seed }) => ({
        seed,
        partitions,
        sum: partitions.reduce((x, y) => x + y)
      }))
      .forEach(({ seed: { x, n }, sum, partitions }) => {
        expect(sum).to.equal(x, `Sum didn't match. Expected ${x} got ${sum}`);
        expect(partitions.length).to.equal(
          n,
          `Partition length did not match! expected ${n} got ${
            partitions.length
          }`
        );
      });
  });
});
