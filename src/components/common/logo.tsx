import { LOGO } from '../../config';

type LogoProperties = {
  className?: string;
};

const Logo = ({ className }: LogoProperties) => {
  return (
    <div className={className}>
      <img src={LOGO} alt='HealTether logo' className='w-full h-full' />
    </div>
  );
};
export default Logo;
