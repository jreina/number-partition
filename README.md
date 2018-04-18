# number-partition

Partition a natural number, `x`, into `n` randomly-sized partitions such that the sum of the partitions is equal to `x`.

## Install
```bash
npm install number-partition
```

## Syntax
This function is curried by default.
```javascript
const partitions = partition(n)(x);
```

## Parameters
`n` (number)  
The number of partitions to generate.  
  
`x` (number)  
The number to partition.

## Usage

```javascript
const partition = require('number-partition');

partition(3)(100);
// [4, 54, 42]

partition(3)(100);
// [53, 37, 10]

partition(5)(190);
// [108, 23, 43, 1, 15]

partition(5)(190);
// [ 9, 4, 115, 47, 15 ]
```

## License
[WTFPL](http://www.wtfpl.net/txt/copying/)
