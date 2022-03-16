var removeKdigits = function (num, k) {
  let temp = num.split("");
  let length = temp.length;
  let l = 0;
  let r = length - 1;
  let list = num.split("");
  let min;
  list.splice(1, 3);
  min = list;
  list.splice(1, 3);
  while (l <= r) {
    let tempArray = num.split("");
    min = Math.min(tempArray.slice(l, k + l + 1).join("") / 1, min);
    list = temp;
    l++;
  }
  return 1;
};

removeKdigits("1432219", 3);
