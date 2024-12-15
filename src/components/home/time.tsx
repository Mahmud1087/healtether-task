import { Flex } from 'antd';
import { useState } from 'react';

type StartTimeProperties = {
  title: string;
};

const StartTime = ({ title }: StartTimeProperties) => {
  const [amPm, setAmPm] = useState('AM');

  return (
    <div className='w-full flex flex-col md:flex-row md:items-center'>
      <p className='w-full text-sm font-semibold md:w-1/4'>{title}</p>
      <Flex gap={10} className='w-full flex-wrap md:w-3/4'>
        <div className='flex items-center px-4 h-12 bg-[#F8F8F8]'>
          <input
            type='number'
            placeholder='00'
            className='placeholder:font-roboto font-roboto border-none focus:outline-none w-9 bg-transparent text-base'
          />
          <p className='text-sm font-semibold'>hrs</p>
        </div>
        <div className='flex items-center px-4 h-12 bg-[#F8F8F8]'>
          <input
            placeholder='00'
            className='placeholder:font-roboto font-roboto border-none focus:outline-none w-9 bg-transparent text-base'
          />
          <p className='text-sm font-semibold'>hrs</p>
        </div>
        <div className='flex items-center px-4 h-12 bg-[#F8F8F8]'>
          <input
            type='number'
            placeholder='00'
            className='placeholder:font-roboto font-roboto border-none focus:outline-none w-9 bg-transparent text-base'
          />
          <p className='text-sm font-semibold'>00</p>
        </div>

        <div
          className={`flex items-center font-medium h-12 px-4 rounded cursor-pointer ${
            amPm === 'AM' ? 'bg-primary text-white' : 'bg-[#F8F8F8]'
          }`}
          onClick={() => setAmPm('AM')}
        >
          am
        </div>
        <div
          className={`flex items-center font-medium h-12 px-4 rounded cursor-pointer ${
            amPm === 'PM' ? 'bg-primary text-white' : 'bg-[#F8F8F8]'
          }`}
          onClick={() => setAmPm('PM')}
        >
          pm
        </div>
      </Flex>
    </div>
  );
};
export default StartTime;
