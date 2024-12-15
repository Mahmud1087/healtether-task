import { Button, Flex } from 'antd';
import Logo from '../common/logo';
import { useState } from 'react';
import { sidebarData } from '../../utils';

const DesktopSidebar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <div className='w-60 py-2 h-screen bg-white border-r fixed top-0 left-0'>
      <Flex justify='center' align='center' vertical gap={15}>
        <Logo className='w-44 h-12' />
        <Button type='primary' className='py-4'>
          Schedule Appointment
        </Button>
      </Flex>
      <ul className='flex flex-col gap-4 mt-6'>
        {sidebarData.map((item) => {
          return (
            <li key={item.name}>
              <button
                className={`border-r-[3px] flex items-center gap-2 px-5 py-3 w-full transition-all hover:bg-input-bg hover:border-[#110C2C] ${
                  item.name === activeLink
                    ? 'bg-input-bg border-[#110C2C]'
                    : 'bg-transparent border-transparent'
                }`}
                onClick={() => setActiveLink(item.name)}
              >
                <aside className='w-5'>
                  <img src={item.icon} alt='Icon' className='w-full h-full' />
                </aside>
                <p className='text-sm font-semibold'>{item.name}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DesktopSidebar;
