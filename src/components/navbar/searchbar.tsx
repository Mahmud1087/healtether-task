import { SEARCH_ICON } from '../../config';

type SearchbarProperties = {
  className?: string;
};

const Searchbar = ({ className }: SearchbarProperties) => {
  return (
    <div className={`flex gap-3 items-center bg-input-bg px-3 ${className}`}>
      <aside className='w-3'>
        <img src={SEARCH_ICON} alt='search icon' />
      </aside>
      <input
        type='search'
        placeholder='Quick search patient'
        className='bg-transparent border-none text-sm py-2 focus:border-none focus:outline-none'
      />
    </div>
  );
};
export default Searchbar;
