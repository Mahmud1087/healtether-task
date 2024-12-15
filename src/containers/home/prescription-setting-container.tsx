import { PrescriptionContent, PrescriptionPreview } from '../../components';

const PrescriptionSettingContainer = () => {
  return (
    <section className='flex flex-col lg:flex-row'>
      <PrescriptionPreview />
      <PrescriptionContent />
    </section>
  );
};
export default PrescriptionSettingContainer;
