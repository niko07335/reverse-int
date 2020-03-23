module.exports = function reverse (n) {
  if (n < 0) n *= -1;
  let res = n + '';
  res = res.split("").reverse().join("");
  return res
}
