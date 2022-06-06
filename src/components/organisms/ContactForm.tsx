import { FormEventHandler, useState } from 'react';

import Input from '../atoms/Input';
import SubmitButton from '../molecules/SubmitButton';

import ExclamationIcon from 'components/atoms/icons/exclamation';

type State = 'initial' | 'submitting' | 'success' | 'error';

const ContactForm = () => {
  const [state, setState] = useState<State>('initial');

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    setState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          Object.fromEntries(
            new FormData(event.currentTarget as HTMLFormElement)
          )
        ),
      });
      if (!res.ok) {
        throw Error(res.statusText);
      }
      setState('success');
    } catch {
      setState('error');
    }
  };

  return (
    <section className='mb-16'>
      {state === 'success' ? (
        <>
          <h2 className='mb-8 text-4xl font-bold text-gray-100'>Bedankt!</h2>
          <p>Je bericht is succesvol verstuurd.</p>
          <p>
            Je ontvangt nog een bevestigingsmail en dan hoor je binnenkort van
            mij.
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
                className='mb-2 min-h-32 w-full flex-1 border-none bg-gray-800 px-2 py-1 placeholder-gray-600 ring-gray-500 focus:outline-none focus:ring-2'
              />
              <SubmitButton loading={state === 'submitting'} />
            </div>
          </div>
          {state === 'error' && (
            <div className='flex items-center gap-4'>
              <ExclamationIcon className='h-8 w-8 flex-shrink-0 rounded-full bg-red-400 p-1 text-red-900' />
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
