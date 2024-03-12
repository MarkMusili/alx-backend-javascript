export default function cleanSet(arr, startString) {
  if (startString === undefined || !startString.length || typeof startString !== 'string') return '';
  let ans = '';
  arr.forEach((x) => {
    if (x.startsWith(startString)) {
      ans += `${x.slice(startString.length)}-`;
    }
  });
  return ans.slice(0, -1);
}
