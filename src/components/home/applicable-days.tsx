import { useState } from 'react';

const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const ApplicableDays = () => {
  const [day, setDay] = useState('');

  return (
    <div className='w-full flex flex-col md:flex-row'>
      <p className='w-full text-sm font-semibold md:w-1/4'>
        Applicable for <br />
        days
      </p>
      <section className='flex flex-wrap w-full md:w-3/4 gap-2'>
        {daysArray.map((item, i) => {
          return (
            <div
              key={i}
              className={`cursor-pointer px-4 py-1 rounded text-sm font-semibold hover:bg-primary hover:text-white transition-all ${
                item === day ? 'bg-primary text-white' : 'bg-[#F8F8F8]'
              }`}
              onClick={() => setDay(item)}
            >
              {item}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default ApplicableDays;
