import { useEffect } from 'react';
import { arrayState } from '../atoms/arrayState';
import { useRecoilState, useRecoilValue } from 'recoil';
import { generateNewArray } from '../helper/array';
import { arraySizeState } from '../atoms/arraySizeState';

const Visualizer = () => {
  const [array, setArray] = useRecoilState(arrayState);
  const arraySize = useRecoilValue(arraySizeState);

  useEffect(() => {
    setArray(generateNewArray(arraySize));
  }, [arraySize]);
  const max = Math.max(...array) || 0;
  let maxHeight = Math.floor((screen.height * 60) / 100);
  let maxWidth = Math.floor((screen.width * 90) / 100);
  console.log(array.length);
  return (
    <div className='flex gap-1 border-b-2 border-slate-800 h-full  mb-8 mx-16 justify-center content-center items-end'>
      {array.map((element, index) => {
        return (
          <div>
            {array.length < 40 ? (
              <div className='text-black text-center font-medium text-base'>
                {element}
              </div>
            ) : (
              ''
            )}
            <div
              className='bg-lightblue '
              style={{
                width: maxWidth / array.length - 4 + 'px',
                height: (element * maxHeight) / max + 'px',
              }}
              key={index}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
export default Visualizer;
