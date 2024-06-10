import Title from './Title';

const Navbar = () => {
  return (
    <div className='bg-slate-800 text-slate-100 basis-28 flex flex-col items-center '>
      <Title />
      <div className='mt-4 mx-2 flex justify-evenly w-full'>
        <div className='hover:text-blue-600 hover:cursor-pointer hover:scale-110'>
          Generate New Array
        </div>
        <div className=''>|</div>
        <div className='flex'>
          Array Size &nbsp; &nbsp;
          <input
            type='range'
            name='size'
            id='size'
            className='accent-lightblue hover:accent-blue-600'
          />
        </div>
        <div className=''>|</div>
        <div className='flex justify-around '>
          <span className='hover:text-blue-600 hover:cursor-pointer hover:scale-110'>
            Bubble Sort
          </span>{' '}
          &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp;
          <span className='hover:text-blue-600 hover:cursor-pointer hover:scale-110'>
            Heap Sort
          </span>{' '}
          &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp;
          <span className='hover:text-blue-600 hover:cursor-pointer hover:scale-110'>
            Merge Sort
          </span>{' '}
          &nbsp; &nbsp; &nbsp;-&nbsp; &nbsp; &nbsp;
          <span className='hover:text-blue-600 hover:cursor-pointer hover:scale-110'>
            Quick Sort
          </span>
        </div>
        <div className=''>|</div>
        <div className='hover:text-blue-600 hover:cursor-pointer hover:scale-110'>
          Sort
        </div>
      </div>
    </div>
  );
};
export default Navbar;
