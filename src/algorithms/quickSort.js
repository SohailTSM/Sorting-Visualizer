import { swap } from '../helper/array';

const SWAP = true;

const partition = (arr, low, high, moves) => {
  let pivot = arr[low];
  let i = low,
    j = high;
  while (i < j) {
    while (arr[i] <= pivot && i < high) {
      moves.push([low, i, !SWAP, low]);
      i++;
    }
    while (arr[j] > pivot && j > low) {
      moves.push([low, j, !SWAP, low]);
      j--;
    }
    if (i < j) {
      moves.push([i, j, SWAP, null]);
      swap(arr, i, j);
    }
  }
  if (low != j) {
    moves.push([low, j, SWAP, null, 'D']);
    swap(arr, low, j);
  } else {
    moves.push([low, j, !SWAP, null, 'D']);
    swap(arr, low, j);
  }
  return j;
};

const qs = (arr, low, high, moves) => {
  if (low >= high) {
    return;
  }
  let pIndex = partition(arr, low, high, moves);
  qs(arr, low, pIndex - 1, moves);
  qs(arr, pIndex + 1, high, moves);
};

export const quickSort = async (arr) => {
  let moves = [];
  qs(arr, 0, arr.length - 1, moves);
  return moves;
};
