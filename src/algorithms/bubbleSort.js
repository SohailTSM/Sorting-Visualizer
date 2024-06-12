import { swap } from '../helper/array';

const SWAP = true;

export const bubbleSort = async (arr) => {
  let moves = [];
  let pivot = null;
  const n = arr.length;
  let i, j, swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
        if (j + 1 == n - i - 1) {
          moves.push([j, j + 1, SWAP, pivot, 'D']);
        } else {
          moves.push([j, j + 1, SWAP, pivot]);
        }
        swapped = true;
      } else {
        if (j + 1 == n - i - 1) {
          moves.push([j, j + 1, !SWAP, pivot, 'D']);
        } else {
          moves.push([j, j + 1, !SWAP, pivot]);
        }
      }
    }
    if (!swapped) {
      break;
    }
  }
  return moves;
};
