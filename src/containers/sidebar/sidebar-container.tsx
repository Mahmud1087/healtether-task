import { DesktopSidebar, MobileSidebar } from '../../components';

const SidebarContainer = () => {
  return (
    <div>
      <aside className='hidden lg:block'>
        <DesktopSidebar />
      </aside>
      <aside className='lg:hidden'>
        <MobileSidebar />
      </aside>
    </div>
  );
};
export default SidebarContainer;
