import { Flex } from 'antd';
import { Searchbar, MobileSidebar, UserButton } from '../../components';
import { NOTIFICATION_ICON, REFRESH_ICON } from '../../config';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const MobileNavbar = () => {
  return (
    <Flex vertical className='w-full py-3'>
      <Flex
        align='center'
        justify='space-between'
        className='w-full border-b pb-5 px-4'
      >
        <MobileSidebar />
        <Searchbar className='w-56 md:w-96' />
        <section className='flex gap-3 items-center'>
          <button className='w-4'>
            <img
              src={NOTIFICATION_ICON}
              alt='notification icon'
              className='w-full'
            />
          </button>
          <UserButton />
        </section>
      </Flex>
      <Flex
        align='center'
        justify='space-between'
        className='border-b py-5 mx-4'
      >
        <Flex align='center' gap={5}>
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
export default MobileNavbar;
