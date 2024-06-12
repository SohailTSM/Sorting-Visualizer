import { useEffect } from 'react';
import { arrayState } from '../atoms/arrayState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { generateNewArray } from '../helper/array';
import { arraySizeState } from '../atoms/arraySizeState';

const Visualizer = () => {
  const [array, setArray] = useRecoilState(arrayState);
  const arraySize = useRecoilValue(arraySizeState);

  const getClass = (classType) => {
    let className = '';
    switch (classType) {
      case 0:
        className = 'bg-lightblue';
        break;
      case 1:
        className = 'bg-slate-800';
        break;
      case 2:
        className = 'bg-green-400';
        break;
      case 3:
        className = 'bg-red-500';
      default:
        break;
    }
    return className;
  };

  useEffect(() => {
    setArray(generateNewArray(arraySize));
  }, [arraySize]);
  const max = Math.max(...array.map((element) => element.value)) || 0;
  let maxHeight = Math.floor((screen.height * 60) / 100);
  let maxWidth = Math.floor((screen.width * 90) / 100);
  return (
    <div className='flex gap-1 border-b-2 border-slate-800 h-full  mb-8 mx-16 justify-center content-center items-end'>
      {array.map((element, index) => {
        return (
          <div key={index}>
            {array.length < 40 ? (
              <div className='text-black text-center font-medium text-base'>
                {element.value}
              </div>
            ) : (
              ''
            )}
            <div
              className={getClass(element.classType)}
              style={{
                width: maxWidth / array.length - 4 + 'px',
                height: (element.value * maxHeight) / max + 'px',
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
export default Visualizer;
