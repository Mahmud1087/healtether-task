import { CloseOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Drawer, Select } from 'antd';
import { useState } from 'react';
import { Logo } from '../../components';
import { sidebarData } from '../../utils';

const MobileSidebar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Button type='text' className='p-0' onClick={showDrawer}>
        <MenuUnfoldOutlined className='text-2xl' />
      </Button>

      <Drawer
        style={{ width: '75%' }}
        placement='left'
        onClose={closeDrawer}
        title={<DrawerTitle closeDrawer={closeDrawer} />}
        closable={false}
        open={drawerOpen}
      >
        <ul className='flex flex-col gap-4'>
          {sidebarData.map((item, i) => {
            return (
              <li key={i}>
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
        <Button type='primary' className='py-4 mt-14' block>
          Schedule Appointment
        </Button>
        <Select
          placeholder='EN'
          defaultValue={'EN'}
          className='border rounded-md flex justify-between items-center py-4 mt-3'
          options={[
            {
              label: 'EN',
              value: 'EN',
            },
            {
              label: 'AR',
              value: 'AR',
            },
            {
              label: 'FR',
              value: 'FR',
            },
            {
              label: 'SP',
              value: 'SP',
            },
          ]}
        />
      </Drawer>
    </>
  );
};

const DrawerTitle = ({ closeDrawer }: { closeDrawer: () => void }) => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Logo className='w-44 h-12' />
        <Button type='text' className='p-0' onClick={closeDrawer}>
          <CloseOutlined className='text-base text-red-500' />
        </Button>
      </div>
    </>
  );
};

export default MobileSidebar;
