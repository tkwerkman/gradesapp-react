import React from 'react';
import { Alert } from 'react-bootstrap';
import { useRouteError } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log(error);
  return (
    <div className='text-center mx-2 lg:mx-45 px-5 mt-5'>
      <Alert variant='danger'>
        <Alert.Heading>Oops!</Alert.Heading>
        <p>Looks like an error occurred. Sorry about that!</p>
        <p>
          If this persists, please screenshot this so Tyler can see the mumbo
          jumbo below.
        </p>
        <Button href='/' variant='danger'>
          Back to Safety!
        </Button>
        <hr />
        <p>
          <i>{`Status: ${error.status} | ${error.statusText}`}</i>
          <br />
          <i>{new Date().toISOString()}</i>
          <br />
          <i>{`Data: ${JSON.stringify(error.data)}`}</i>
        </p>
      </Alert>
    </div>
  );
}
