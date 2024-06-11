export const generateNewArray = (n) => {
  let min = 10;
  let max = 700;
  const arr = [];
  for (let i = 0; i < n; i++) {
    let number = Math.floor(Math.random() * (max - min) + min);

    arr.push(number);
  }
  return arr;
};
