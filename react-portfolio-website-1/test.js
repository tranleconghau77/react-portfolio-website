var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sO = {};
  const tO = {};
  let N = s.length;
  for (let i = 0; i < N; i++) {
    if (!sO[s[i]]) sO[s[i]] = 0;
    if (!tO[t[i]]) tO[t[i]] = 0;
    sO[s[i]]++;
    tO[t[i]]++;
  }
  console.log(sO, tO);
  if (Object.keys(sO).length === 0) return false;
  for (let ch in sO) {
    if (sO[ch] !== tO[ch]) {
      return false;
    }
  }
  return true;
};
isAnagram("a", "a");
