import React from 'react';
import './GoBack.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function GoBack() {
  return (
    <>
        <div className="go-back-container">
            <div className="icon">
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="go-back-phrase">
                Go Back
            </div>
        </div>
    </>
  );
}
export default GoBack;