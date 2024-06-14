import { swap } from '../helper/array';

const SWAP = true;

const heapify = (arr, N, i, moves) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < N && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < N && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    swap(arr, i, largest);
    moves.push([i, largest, SWAP, null]);
    heapify(arr, N, largest, moves);
  }
};

export const heapSort = async (arr) => {
  let moves = [];
  let N = arr.length;

  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    heapify(arr, N, i, moves);
  }
  for (let i = N - 1; i > 0; i--) {
    swap(arr, 0, i);
    moves.push([0, i, SWAP, null, 'D']);
    heapify(arr, i, 0, moves);
  }
  return moves;
};
