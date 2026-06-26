export const repeatChar = (c: string, n: number) => {
  let s = '';
  for (let i = 0; i < n; i++) s += c;
  return s;
};
