import React from 'react';
import { Spinner } from 'react-bootstrap';

import './styles.css';

type Props = {
  text: string;
};

const MySpinner = ({ text, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="spinner-container d-flex align-items-center justify-content-center"
    >
      {text ? <h1>{`${text}...`}</h1> : <Spinner animation="border" />}
    </div>
  );
};

export default MySpinner;
