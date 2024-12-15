import { Button, Checkbox, Flex, Form, FormProps, Input } from 'antd';
import { CAMERA_ICON, PLUS_ICON } from '../../config';

type FieldType = {
  doctorName?: string;
  doctorSpecialty?: string;
  otherInfo?: string;
  clinicAddress?: string;
  clinicContact?: number;
  clinicEmail?: string;
};

const PrescriptionContent = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    form.resetFields();
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    form.resetFields();
    console.log('Failed:', errorInfo);
  };

  const labelClass = 'text-input-label text-sm font-semibold';
  const inputClass =
    'bg-input-bg rounded-none placeholder:font-roboto py-3 border-none';

  return (
    <div className='w-full px-5 py-2 md:w-1/2'>
      <p className='font-montserrat font-semibold text-sm w-full border-b border-black mb-2'>
        SETTINGS
      </p>
      <Flex vertical gap={2}>
        <p className='text-sm font-semibold font-montserrat'>
          Prescription Contents
        </p>
        <p className='text-[#A1A1A1] text-xs font-poppins font-light'>
          Fill in the Clinic details on the prescription
        </p>
      </Flex>

      <Form
        requiredMark='optional'
        layout='vertical'
        form={form}
        name='prescriptionForm'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <header className='mt-5'>
          <h1 className='text-xs font-poppins font-bold text-[#777777] mb-3'>
            Header info
          </h1>
          <Flex justify='space-between' align='center' className='pr-8 mb-4'>
            <p className='font-medium text-sm'>Add Clinic Logo</p>
            <div className='w-24 h-24 rounded-full bg-light-purple flex items-center justify-center'>
              <img src={CAMERA_ICON} alt='camera icon' className='w-8' />
            </div>
          </Flex>

          <Form.Item<FieldType>
            name='doctorName'
            required
            className='w-full mb-2'
            label={<p className={labelClass}>Doctor's Name</p>}
          >
            <Input type='text' placeholder='Jane Doe' className={inputClass} />
          </Form.Item>
          <Form.Item<FieldType>
            name='doctorSpecialty'
            required
            className='w-full mb-2'
            label={<p className={labelClass}>Doctor's Specialty</p>}
          >
            <Input
              type='text'
              placeholder='e.g. Neurologist'
              className={inputClass}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name='otherInfo'
            className='w-full mb-2'
            label={<p className={labelClass}>Other Information</p>}
          >
            <Input type='text' placeholder='e.g MBBS' className={inputClass} />
          </Form.Item>
        </header>

        <footer className='mt-5'>
          <h1 className='text-xs font-poppins font-bold text-[#777777] mb-3'>
            Footer info
          </h1>

          <Form.Item<FieldType>
            name='clinicAddress'
            required
            className='w-full mb-2'
            label={<p className={labelClass}>Clinic address</p>}
          >
            <Input
              type='address'
              placeholder='Street address, City State, Zip Code '
              className={inputClass}
            />
          </Form.Item>
          <Form.Item<FieldType>
            name='clinicContact'
            required
            className='w-full mb-2'
            label={<p className={labelClass}>Clinic contact</p>}
          >
            <Input
              type='number'
              placeholder='9546695325'
              className={inputClass}
            />
          </Form.Item>
          <button className='flex gap-3 items-center border-b border-[#5351C7] text-[#5351C7] my-2'>
            <img src={PLUS_ICON} alt='plus icon' className='w-4' />
            <p className='font-semibold'>Add another contact</p>
          </button>
          <Form.Item<FieldType>
            name='clinicEmail'
            required
            className='w-full mb-2'
            label={<p className={labelClass}>Clinic email</p>}
          >
            <Input
              type='email'
              placeholder='email@Office TempaltesOnline.com'
              className={inputClass}
            />
            <button className='flex gap-3 items-center border-b border-[#5351C7] text-[#5351C7] my-2'>
              <img src={PLUS_ICON} alt='plus icon' className='w-4' />
              <p className='font-semibold'>Add another contact</p>
            </button>
          </Form.Item>
        </footer>

        <section className='mt-4'>
          <h1 className='text-sm font-poppins font-bold mb-6'>
            Clinic open hrs
          </h1>
        </section>

        <section className='my-4'>
          <Flex justify='space-between' align='center'>
            <button className='flex gap-3 items-center  text-[#5351C7] my-2'>
              <p className='font-semibold text-base'>Add other timings</p>
            </button>
            <button className='font-bold text-sm text-[#413D56]'>Clear</button>
          </Flex>
          <h1 className='text-xs font-poppins font-bold text-[#777777] mb-3'>
            Body info
          </h1>
          <h1 className='text-xs font-poppins font-bold mb-6'>
            Auto fill data in the Prescription
          </h1>
          <Flex align='center' className='mb-3'>
            <Checkbox checked />
            <p className='pl-3 border-b w-full'>Patient Id</p>
          </Flex>
          <Flex align='center' className='mb-3'>
            <Checkbox checked />
            <p className='pl-3 border-b w-full'>
              Patient Personal details - Name, contact
            </p>
          </Flex>
          <Flex align='center' className='mb-3'>
            <Checkbox checked />
            <p className='pl-3 border-b w-full'>Patient Vitals details </p>
          </Flex>
          <Flex align='center' className='mb-3'>
            <Checkbox />
            <p className='pl-3 border-b w-full'>Patient Past history details</p>
          </Flex>
          <Flex align='center' className='mb-3'>
            <Checkbox />
            <p className='pl-3 border-b w-full'>Symptoms and Diagnosis</p>
          </Flex>
          <Flex align='center' className='mb-3'>
            <Checkbox />
            <p className='pl-3 border-b w-full'>Lab Tests</p>
          </Flex>
          <Flex align='center' className='mb-3'>
            <Checkbox checked />
            <p className='pl-3 border-b w-full'>Drug Prescription</p>
          </Flex>
        </section>

        <Form.Item label={null} className='mt-12 w-full flex justify-center'>
          <Button
            size='large'
            type='primary'
            htmlType='submit'
            className='px-10 py-6'
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PrescriptionContent;
