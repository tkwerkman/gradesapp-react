import { Alert } from 'react-bootstrap';
import { Pill } from '../pillbar';
import { useNavigate } from 'react-router-dom';

export function NotYetImplemented() {
  const navigate = useNavigate();
  return (
    <div className='text-center lg:mx-64 md:mx-10 sm:mx-2 pb-80'>
      <Alert variant='warning'>
        <Alert.Heading>404 - Uh oh!</Alert.Heading>
        <p>
          Looks like you found something that doesn't exist.
        </p>
        <p>If you arrived here by clicking a link, I probably just haven't built this section yet. Feel free to check back later!</p>
        <div className='flex justify-center'>
          <Pill text='Back' func={() => navigate(-1)} />
        </div>
      </Alert>
    </div>
  );
}
