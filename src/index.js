module.exports = function check(str, bracketsConfig) {
 
  let bracket = /\(\)|\{\}|\[\]|\|\||[1][2]|[3][4]|[5][6]|[7][7]|[8][8]/;
  let cl;
  const tr = function (str) {
      const newbrakets = str.replace(bracket, "");
      if ((newbrakets.length !== 0) && (bracket.test(str))) {
          tr(newbrakets);
      } else if (newbrakets.length == 0) {
          return (cl = true);
      } else {
          return (cl = false);
      }
  };
  tr(str);
  return cl;
}