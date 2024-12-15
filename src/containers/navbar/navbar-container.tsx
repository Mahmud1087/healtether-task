import { DesktopNavbar, MobileNavbar } from '../../components';

const NavbarContainer = () => {
  return (
    <div className='fixed left-0 top-0 bg-white z-40 w-full'>
      <aside className='hidden lg:block'>
        <DesktopNavbar />
      </aside>
      <aside className='lg:hidden'>
        <MobileNavbar />
      </aside>
    </div>
  );
};
export default NavbarContainer;
