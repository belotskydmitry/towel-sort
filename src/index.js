
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix && matrix.length ? matrix.map( (el, key) => key % 2 !== 0 ? el.reverse() : el).flat() : [];
}
