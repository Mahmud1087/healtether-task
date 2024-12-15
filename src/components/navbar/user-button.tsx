import { Flex } from 'antd';
import { USER_ICON } from '../../config';

const UserButton = () => {
  return (
    <Flex gap={5} align='center' className=''>
      <aside className='w-8'>
        <img src={USER_ICON} alt='user image' />
      </aside>
      <p className='text-sm hidden md:block'>Kim Jones</p>
    </Flex>
  );
};
export default UserButton;
