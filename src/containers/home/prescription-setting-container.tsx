import { PrescriptionContent, PrescriptionPreview } from '../../components';

const PrescriptionSettingContainer = () => {
  return (
    <section className='flex flex-col md:flex-row'>
      <PrescriptionPreview />
      <PrescriptionContent />
    </section>
  );
};
export default PrescriptionSettingContainer;
