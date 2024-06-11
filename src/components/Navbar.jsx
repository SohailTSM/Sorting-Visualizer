import Title from './Title';
import { useRecoilState } from 'recoil';
import { algorithmState } from '../atoms/algorithmState';
import { sortingState } from '../atoms/sortingState';
import { arraySizeState } from '../atoms/arraySizeState';
const Navbar = () => {
  const [algorithm, setAlgorithm] = useRecoilState(algorithmState);
  const [isSorting, setIsSorting] = useRecoilState(sortingState);
  const [arraySize, setArraySize] = useRecoilState(arraySizeState);

  const sort = () => {
    if (isSorting) {
      return;
    }
    setIsSorting(true);
  };

  const changeArraySize = (e) => {
    setArraySize(e.target.value);
  };

  return (
    <div
      className={
        'bg-slate-800 text-slate-100 basis-28 flex flex-col items-center'
      }
    >
      <Title />
      <div className='mt-4 mx-2 flex justify-evenly w-full'>
        <div
          className={
            isSorting
              ? 'text-red-600'
              : `hover:text-blue-600 hover:cursor-pointer hover:scale-110`
          }
        >
          Generate New Array
        </div>
        <div className=''>|</div>
        <div className={isSorting ? 'text-red-600' : 'flex'}>
          Array Size &nbsp; &nbsp;
          <input
            type='range'
            name='size'
            id='size'
            className='accent-lightblue hover:accent-blue-600'
            disabled={isSorting}
            min={4}
            max={150}
            value={arraySize}
            onChange={changeArraySize}
          />
        </div>
        <div className=''>|</div>
        <div className='flex justify-around '>
          <span
            className={`${
              algorithm == 'B'
                ? 'scale-110 text-lightblue'
                : isSorting
                ? 'text-red-600'
                : 'hover:text-blue-600 hover:cursor-pointer hover:scale-110'
            }`}
            onClick={() => {
              if (isSorting) {
                return;
              }
              setAlgorithm('B');
            }}
          >
            Bubble Sort
          </span>{' '}
          &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp;
          <span
            className={`${
              algorithm == 'H'
                ? 'scale-110 text-lightblue'
                : isSorting
                ? 'text-red-600'
                : 'hover:text-blue-600 hover:cursor-pointer hover:scale-110'
            }`}
            onClick={() => {
              if (isSorting) {
                return;
              }
              setAlgorithm('H');
            }}
          >
            Heap Sort
          </span>{' '}
          &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp;
          <span
            className={`${
              algorithm == 'M'
                ? 'scale-110 text-lightblue'
                : isSorting
                ? 'text-red-600'
                : 'hover:text-blue-600 hover:cursor-pointer hover:scale-110'
            }`}
            onClick={() => {
              if (isSorting) {
                return;
              }
              setAlgorithm('M');
            }}
          >
            Merge Sort
          </span>{' '}
          &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp;
          <span
            className={`${
              algorithm == 'Q'
                ? 'scale-110 text-lightblue'
                : isSorting
                ? 'text-red-600'
                : 'hover:text-blue-600 hover:cursor-pointer hover:scale-110'
            }`}
            onClick={() => {
              if (isSorting) {
                return;
              }
              setAlgorithm('Q');
            }}
          >
            Quick Sort
          </span>
        </div>
        <div className=''>|</div>
        <div
          className={
            isSorting
              ? 'text-red-600'
              : 'hover:text-blue-600 hover:cursor-pointer hover:scale-110'
          }
          onClick={sort}
        >
          Sort
        </div>
      </div>
    </div>
  );
};
export default Navbar;
