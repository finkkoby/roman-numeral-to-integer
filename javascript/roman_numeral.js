function romanNumeral(string) {
  const value = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  const chars = string.split("")
  const numbers = chars.map(char => value[char])

  let total = 0;

  const chunks = []
  let chunk = []
  for (let num of numbers) {
    if (chunk.length === 0 || num === chunk[0]) {
      chunk.push(num)
    } else {
      if (chunk[0] < num) {
        chunk.push(num)
        chunks.push(chunk)
        chunk = []
      } else {
        chunks.push(chunk)
        chunk = [num]
      }
    }
  }
  chunks.push(chunk)
  for (let chunk of chunks) {
    if (chunk.find(num => num !== chunk[0]) === undefined) {
      for (let num of chunk) {
        total += num
      }
    } else {
      const newChunk = chunk.toReversed()
      total += newChunk[0]
      for (let num of newChunk) {
        if (num !== newChunk[0]) {
          total -= num
        }
      }
    }
  }
  return total
}

if (require.main === module) {
  // // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("Expecting: 223");
  console.log(romanNumeral('CCXXIII'));

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));
  
  console.log("Expecting: 3848");
  console.log(romanNumeral('MMMDCCCXLVIII'));

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
