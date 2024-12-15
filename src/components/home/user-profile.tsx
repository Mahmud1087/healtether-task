import { Button, Flex, Switch } from 'antd';
import {
  MAIN_USER_ICON,
  PRESCRIPTION_PREVIEW,
  PRESCRIPTION_SETTINGS,
  UPLOAD_ICON,
} from '../../config';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const choices = [
  'Manage clinics',
  'Clinic Details',
  'Payment Settings',
  'Prescription Settings',
];

const UserProfile = () => {
  const [activebtn, setActivebtn] = useState('Prescription Settings');

  return (
    <div className='flex flex-col mt-5 md:flex-row lg:gap-6'>
      <section className='w-full border-t border-l py-11 md:w-1/2'>
        <Flex
          align='center'
          gap={20}
          className='mx-8 mb-4 pt-4 pb-8 border-b-2 '
        >
          <aside className='w-20'>
            <img src={MAIN_USER_ICON} alt='user icon' />
          </aside>
          <aside className='flex flex-col'>
            <div className='px-2 py-1 rounded-md font-semibold bg-[#FADF49] text-xs mb-2 w-fit'>
              Super Admin
            </div>
            <h1 className='font-semibold text-lg'>Dr. Kim Jones</h1>
            <div className='flex gap-2'>
              <Button
                type='primary'
                size='small'
                className='px-2 text-xs py-1 rounded-md'
              >
                Save
              </Button>
              <Button
                size='small'
                className='bg-input-bg border-none px-2 text-xs py-1 rounded-md'
              >
                Cancel
              </Button>
            </div>
          </aside>
        </Flex>

        <Flex vertical gap={11} className='px-8 py-6 border-t'>
          {choices.map((item, i) => {
            return (
              <div
                key={i}
                className={`w-full bg-gray-primary py-3 px-4 text-sm font-medium hover:shadow-md hover:bg-gray-primary-active transition-all cursor-pointer ${
                  item === activebtn
                    ? 'shadow-md bg-gray-primary-active'
                    : 'bg-gray-primary'
                }`}
                onClick={() => setActivebtn(item)}
              >
                <p>{item}</p>
              </div>
            );
          })}
        </Flex>
      </section>

      <section className='pt-9 w-full md:w-1/2'>
        <p className='font-semibold font-montserrat underline'>SETTINGS</p>
        <div className='mt-5 flex flex-col gap-3'>
          <Flex justify='space-between' align='center'>
            <h1 className='font-semibold font-montserrat'>
              Ai Predictive Search
            </h1>
            <Switch
              defaultChecked={true}
              style={{
                background: '#EEEEEE',
              }}
            />
          </Flex>
          <p className='text-[#777777] text-sm font-poppins font-light'>
            The Ai search allows you to give predictive analysis based on the
            patient’s vitals, examinations, lab and reports
          </p>
        </div>

        <div className='mt-5 flex-col gap-3'>
          <h1 className='font-semibold font-montserrat'>Prescription layout</h1>
          <p className='text-[#777777] text-sm font-poppins font-light'>
            Choose from the templates available or add your own template.
          </p>
        </div>

        <div className='flex gap-5 mt-3'>
          <aside className='w-36 h-32 bg-gray-secondary flex flex-col justify-center px-3 gap-4'>
            <p className='font-poppins text-xs text-[#777777]'>
              Add custom <br />
              template
            </p>
            <img src={UPLOAD_ICON} alt='Upload icon' className='w-3' />
          </aside>
          <aside className='w-36 h-32 bg-gray-secondary flex justify-center items-center py-2'>
            <img
              src={PRESCRIPTION_PREVIEW}
              alt='Prescription preview image'
              className='w-3/5 h-full'
            />
          </aside>
        </div>

        <Button type='link' className='p-0 text-sm font-poppins'>
          <Link to={PRESCRIPTION_SETTINGS}>
            Change contents in the prescriptions
          </Link>
        </Button>
      </section>
    </div>
  );
};
export default UserProfile;
