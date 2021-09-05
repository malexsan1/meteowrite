import { tw } from 'twind';
import { Link } from 'react-router-dom';

interface VerificationStepProps {
  error: string;
  isLoading: boolean;
}

export const VerificationStep: React.FC<VerificationStepProps> = ({
  error,
  isLoading,
}) => {
  return (
    <>
      <Link
        to="/"
        className={tw`flex items-center justify-center bg-yellow-400 h-12 text-white text-uppercase font-semibold cursor-pointer mt-8`}
      >
        {isLoading ? 'Loading...' : 'log in'}
      </Link>

      {error && <span className={tw`text(center red-500) mt-4`}>{error}</span>}

      <Link
        to="#"
        className={tw`border(b-2 purple-100) text-purple-500 ml-2 pb-1 self-center mt-8`}
      >
        Didn't get an email?
      </Link>
    </>
  );
};
