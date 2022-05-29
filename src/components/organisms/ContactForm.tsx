import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import * as Yup from 'yup';

import Input from '../atoms/Input';
import SubmitButton from '../molecules/SubmitButton';

interface Values {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    const recaptcha = await executeRecaptcha?.('contact_form');
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...values, recaptcha }),
    });
    setSubmitting(false);
    setSubmitted(true);
    resetForm();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Dit veld is vereist.'),
          message: Yup.string().required('Dit veld is vereist.'),
          email: Yup.string()
            .email('E-mailadres ongeldig.')
            .required('Dit veld is vereist.'),
        })}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='flex flex-col sm:flex-row sm:space-x-2'>
              <div className='flex-1'>
                <h1 className='text-4xl font-bold text-gray-100'>Hit me up</h1>
                <h2 className='mb-4 text-lg font-light text-gray-200'>
                  Vertel me over jouw project!
                </h2>
                <Input name='name' placeholder='Naam' label='Naam' />
                <Input
                  name='email'
                  placeholder='E-mail'
                  label='E-mail'
                  type='email'
                />
              </div>
              <div className='mb-4 flex flex-1 flex-col'>
                <label
                  htmlFor='message'
                  className='mb-2 block text-xs text-gray-400'
                >
                  Bericht
                </label>
                <Field
                  id='message'
                  type='text'
                  name='message'
                  placeholder='Bericht'
                  component='textarea'
                  className='min-h-32 w-full flex-1 border-none bg-gray-800 px-2 py-1 placeholder-gray-600 ring-gray-500 focus:outline-none focus:ring-2'
                />
                <ErrorMessage
                  name='message'
                  component='div'
                  className='mb-2 text-sm text-red-400'
                />
              </div>
            </div>
            <div className='mb-24 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
              <div className='prose max-w-full flex-1 text-xs text-gray-600'>
                This site is protected by reCAPTCHA and the Google{' '}
                <a
                  href='https://policies.google.com/privacy'
                  className='ring-blue-500 focus-within:ring-2 focus:outline-none'
                >
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a
                  href='https://policies.google.com/terms'
                  className='ring-blue-500 focus-within:ring-2 focus:outline-none'
                >
                  Terms of Service
                </a>{' '}
                apply.
              </div>
              <div className='flex-1'>
                <SubmitButton
                  isSubmitting={isSubmitting}
                  isSubmitted={isSubmitted}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ContactForm;
