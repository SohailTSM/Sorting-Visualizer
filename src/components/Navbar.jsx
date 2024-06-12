import Title from './Title';
import { useRecoilState } from 'recoil';
import { algorithmState } from '../atoms/algorithmState';
import { sortingState } from '../atoms/sortingState';
import { arraySizeState } from '../atoms/arraySizeState';
import { generateNewArray, swap } from '../helper/array';
import { arrayState } from '../atoms/arrayState';
import { bubbleSort } from '../algorithms/bubbleSort';
import { quickSort } from '../algorithms/quickSort';

const Navbar = () => {
  const [algorithm, setAlgorithm] = useRecoilState(algorithmState);
  const [isSorting, setIsSorting] = useRecoilState(sortingState);
  const [arraySize, setArraySize] = useRecoilState(arraySizeState);
  const [array, setArray] = useRecoilState(arrayState);

  const visualize = async (moves) => {
    let intervalTime = ((150 - arraySize) / 146) * 500 + 100;
    let counter = 0;
    let interval = setInterval(() => {
      if (counter < moves.length) {
        let move = moves[counter];
        setArray((arr) => {
          return arr.map((element, index) => {
            if (index == move[0] || index == move[1]) {
              return { ...element, classType: 1 };
            } else {
              return element;
            }
          });
        });
        if (move[3] != null) {
          setArray((arr) => {
            return arr.map((element, index) => {
              if (index == move[3]) {
                return { ...element, classType: 4 };
              } else {
                return element;
              }
            });
          });
        }
        if (move[2]) {
          setTimeout(() => {
            setArray((arr) => {
              let temp;
              return arr.map((element, index) => {
                if (index == move[0]) {
                  temp = element.value;
                  return {
                    ...element,
                    value: arr[move[1]].value,
                    classType: 3,
                  };
                } else if (index == move[1]) {
                  return { ...element, value: temp, classType: 3 };
                } else {
                  return element;
                }
              });
            });
          }, intervalTime / 2);
        }
        setTimeout(() => {
          setArray((arr) => {
            return arr.map((element, index) => {
              if (index == move[0] || index == move[1]) {
                return { ...element, classType: 0 };
              } else {
                return element;
              }
            });
          });
        }, intervalTime);
        setTimeout(() => {
          if (move[4] == 'D') {
            setArray((arr) => {
              return arr.map((element, index) => {
                if (index == move[1]) {
                  return { ...element, classType: 2 };
                } else {
                  return element;
                }
              });
            });
          }
        }, intervalTime);
        counter++;
      } else {
        setTimeout(() => {
          setArray((arr) => {
            return arr.map((element) => {
              return { ...element, classType: 2 };
            });
          });
          setIsSorting(false);
          clearInterval(interval);
        }, 100);
      }
    }, intervalTime + 100);
  };

  const sort = async () => {
    if (isSorting) {
      return;
    }
    setIsSorting(true);
    const list = array.map((element) => element.value);
    let moves = [];
    switch (algorithm) {
      case 'B':
        moves = await bubbleSort(list);
        break;
      case 'Q':
        moves = await quickSort(list);
        break;
      default:
        break;
    }
    await visualize(moves);
  };

  const generate = () => {
    if (isSorting) {
      return;
    }
    setArray(generateNewArray(arraySize));
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
          onClick={generate}
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
