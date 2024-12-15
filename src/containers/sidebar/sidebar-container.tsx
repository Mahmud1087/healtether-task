import { DesktopSidebar } from '../../components';

const SidebarContainer = () => {
  return (
    <div className='relative z-50'>
      <aside className='hidden lg:block'>
        <DesktopSidebar />
      </aside>
    </div>
  );
};
export default SidebarContainer;
