import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

import {ReactComponent as Image} from "images/Works.svg";



import "./HomeWorks.css"

type LoginFormValues = {
  email: string;
  password: string;
};

function HomeWorks() {
  return(
    <div className="home-works d-flex flex-column align-items-center w-75 mb-5">
      <h1 className='text-secondary mb-5 fw-bold'>HOW IT WORKS?</h1>
      <Image />
    </div>

  )
}

export default HomeWorks;
