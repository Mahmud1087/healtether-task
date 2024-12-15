import NavbarContainer from './navbar/navbar-container';
import SidebarContainer from './sidebar/sidebar-container';

type AppContainerProperties = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProperties) => {
  return (
    <div className='flex'>
      <SidebarContainer />

      <main className='w-full'>
        <NavbarContainer />
        <section className='mt-40 px-4 lg:px-8 lg:ml-60'>{children}</section>
      </main>
    </div>
  );
};
export default AppContainer;
