
// You should implement your task here.

module.exports = function towelSort (matrix) {
    return (matrix != undefined) ? matrix.map((el, i) => (i % 2) == 1 ? el.reverse() : el).flat() : [];
}
