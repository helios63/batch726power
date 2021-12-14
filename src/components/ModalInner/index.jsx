import { Container } from "./styles";
import Form from "../form";
import React, { useState } from "react";

const ModalInner = () => {
  const [showSuccess, setShowsuccess] = useState(false)

  const handleSuccess = () => {
    setShowsuccess(true)
  }

  return (
  <Container>
    {showSuccess ? (
      <>
      <h4> Yay! We're so excited!</h4>
      <p> Hope you are you too. In the meantime you can follow us on social media to keep up to date:</p>
      </>
      ) : (
      <>
      <h3>Sign Up</h3>
      <p>Join our newsletter to be notified of when pre-release tickets for our first ever world tour go on sale.</p>
      <Form handleSuccess={handleSuccess}/>
      </> )
    }

  </Container> )
};


export default ModalInner;
