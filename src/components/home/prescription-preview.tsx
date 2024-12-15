import { PRESCRIPTION_PAPER } from '../../config';

const PrescriptionPreview = () => {
  return (
    <div className='w-full bg-gray-primary p-4 md:w-1/2'>
      <p className='font-poppins text-[#A1A1A1] text-sm mb-4'>
        Preview of the prescription
      </p>
      <div>
        <img
          src={PRESCRIPTION_PAPER}
          alt='Prescription paper'
          className='w-full'
        />
      </div>
    </div>
  );
};
export default PrescriptionPreview;
