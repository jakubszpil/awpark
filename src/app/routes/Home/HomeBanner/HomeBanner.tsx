import { Alert, Button, FloatingLabel, Form } from 'react-bootstrap';

import "./HomeBanner.css"

function HomeBanner() {
  return(
    <div className="home-banner p-4 text-white text-center mt-5" >
      <h1 className='mb-5 fw-bold'>BECOME OUR PARTNER</h1>
      <p className='fs-4'>Are you carpark owner? Maybe you delivery electric vehicles in cites? <br/>
         Start a cooperation with us and have an influence in air purification!</p>
         <Button variant="secondary" className="text-white fw-bold w-25 p-3">
           CONTACT US
         </Button>
    </div>
  )
}

export default HomeBanner;
