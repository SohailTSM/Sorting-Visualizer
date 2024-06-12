export const generateNewArray = (n) => {
  let min = 10;
  let max = 700;
  const arr = [];
  for (let i = 0; i < n; i++) {
    let number = Math.floor(Math.random() * (max - min) + min);

    arr.push({ value: number, classType: 0 });
  }
  return arr;
};

export const swap = async (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
