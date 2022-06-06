import TailSpin from '../atoms/icons/tail-spin';

interface Props {
  loading: boolean;
}

const SubmitButton = ({ loading }: Props) => (
  <button
    type='submit'
    disabled={loading}
    className='flex h-8 w-full items-center justify-center bg-gray-700 py-2 text-sm font-semibold uppercase tracking-wider ring-gray-500 focus-within:ring-blue-500 focus:outline-none focus:ring'
  >
    {loading ? (
      <div className='absolute'>
        <TailSpin className='h-6 w-6' />
      </div>
    ) : (
      <span>Verzenden</span>
    )}
  </button>
);

export default SubmitButton;
