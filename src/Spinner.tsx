import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Spinner = (props: any) => (
  <div>
    <FontAwesomeIcon icon={faCog} spin {...props} />
  </div>
);

export default Spinner;
