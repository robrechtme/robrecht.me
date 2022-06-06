import { FormEventHandler, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import Input from '../atoms/Input';
import SubmitButton from '../molecules/SubmitButton';

import ExclamationIcon from 'components/atoms/icons/exclamation';

type State = 'initial' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [state, setState] = useState<State>('initial');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    setState('submitting');
    try {
      const recaptcha = await executeRecaptcha?.('contact_form');
      const formData = Object.fromEntries(
        new FormData(event.target as HTMLFormElement)
      );
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recaptcha,
          ...formData,
        }),
      });
      if (!res.ok) {
        throw Error(res.statusText);
      }
      setState('success');
    } catch (e) {
      console.error(e);
      setState('error');
    }
  };

  return (
    <section className='mb-16'>
      {state === 'success' ? (
        <>
          <h2 className='mb-8 text-4xl font-bold text-gray-100'>Tot zo!</h2>
          <p>Je bericht is succesvol verstuurd!</p>
          <p>
            Je ontvangt nog een{' '}
            <b className='font-semibold'>bevestigingsmail</b> en je hoort zo
            snel mogelijk van mij terug.
          </p>
          <p>
            <small>
              <i>
                Geen bevestigingsmail ontvangen? Controleer je spamfolder of
                mail me rechtstreeks via{' '}
                <a href='mailto:hello@robrecht.me' className='underline '>
                  hello@robrecht.me.
                </a>
              </i>
            </small>
          </p>
        </>
      ) : (
        <form method='POST' action='/api/contact' onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row sm:space-x-2'>
            <div className='flex-1'>
              <h2 className='text-4xl font-bold text-gray-100'>Hit me up</h2>
              <p className='mb-4 text-lg font-light text-gray-200'>
                Vertel me over jouw project!
              </p>
              <Input name='name' placeholder='Naam' label='Naam' required />
              <Input
                name='email'
                placeholder='E-mail'
                label='E-mail'
                type='email'
                required
              />
            </div>
            <div className='mb-4 flex flex-1 flex-col'>
              <label
                htmlFor='message'
                className='mb-2 block text-xs text-gray-400'
              >
                Bericht
              </label>
              <textarea
                id='message'
                name='message'
                placeholder='Bericht'
                className='min-h-[8rem] w-full flex-1 border-none bg-gray-800 px-2 py-1 placeholder-gray-600 ring-gray-500 focus:outline-none focus:ring-2'
              />
            </div>
          </div>
          <div className='mb-4 flex flex-col-reverse gap-2 sm:flex-row'>
            <div className='prose max-w-full flex-1 text-xs text-gray-500'>
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
              <SubmitButton loading={state === 'submitting'} />
            </div>
          </div>
          {state === 'error' && (
            <div className='flex items-center gap-4 border border-red-800 border-opacity-50 bg-red-900/20 px-1 py-2'>
              <ExclamationIcon className='h-8 w-8 flex-shrink-0 text-red-800' />
              <p className='text-sm' aria-live='assertive'>
                Er is iets misgelopen tijdens het verzenden van je bericht. Je
                kan opnieuw proberen of me rechtstreeks contacteren op{' '}
                <a href='mailto:hello@robrecht.me' className='underline '>
                  hello@robrecht.me.
                </a>
                .
              </p>
            </div>
          )}
        </form>
      )}
    </section>
  );
};
export default ContactForm;
