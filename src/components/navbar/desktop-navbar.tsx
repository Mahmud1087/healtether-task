import { Flex } from 'antd';
import Searchbar from './searchbar';
import UserButton from './user-button';
import { NOTIFICATION_ICON, REFRESH_ICON } from '../../config';
import { BsChevronDown, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const DesktopNavbar = () => {
  return (
    <Flex vertical className='ml-60 py-3'>
      <Flex
        align='center'
        justify='space-between'
        className='w-full border-b pb-5 px-8'
      >
        <Searchbar className='w-[36rem]' />
        <section className='flex gap-3 items-center'>
          <button className='w-5'>
            <img
              src={NOTIFICATION_ICON}
              alt='notification icon'
              className='w-full'
            />
          </button>
          <UserButton />
          <button className='ml-4 flex items-center gap-2 border-b border-primary-text'>
            <p className='text-primary-text '>EN</p>
            <BsChevronDown className='text-xs' />
          </button>
        </section>
      </Flex>
      <Flex
        align='center'
        justify='space-between'
        className='border-b py-6 mx-8'
      >
        <Flex align='center' gap={6}>
          <BsChevronLeft className='text-sm' />
          <BsChevronRight className='text-sm' />
          <p className='font-medium text-tertiary-text'>Home</p>
          <BsChevronRight className='text-sm' />
          <p className='font-medium text-tertiary-text'>User Profile</p>
        </Flex>
        <button className='flex items-center gap-2'>
          <aside className='w-4'>
            <img src={REFRESH_ICON} alt='refresh icon' />
          </aside>
          <p className='text-primary-text font-semibold'>Refresh</p>
        </button>
      </Flex>
    </Flex>
  );
};
export default DesktopNavbar;
