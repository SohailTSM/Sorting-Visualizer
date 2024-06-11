import { atom } from 'recoil';
import { generateNewArray } from '../helper/array';

export const arrayState = atom({
  key: 'arrayState',
  default: [],
});
