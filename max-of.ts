export const maxOf = (arr: number[]) => (arr.length === 0 ? null : arr.reduce((m, x) => (x > m ? x : m)));
