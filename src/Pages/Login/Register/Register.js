import React, { useContext, useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AuthContext } from '../../../constexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {

  const [error,setError] = useState('');
  const {createUser,updateUserProfile,verifyEmail } = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false);
  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photourl.vlaue;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photourl,email,password)
    createUser(email,password)
    .then(result=>{
      const user = result.user;
      form.reset();
      setError('');
      console.log(user);
      handleUpdateUserProfile(name,photourl)
      
      handleEmailVerification()
      toast.success('Please Verfify Your Email address before Login')
    })
    .catch(error=>{
      console.error(error)
      setError(error.message)
    })

    const handleUpdateUserProfile = (name,photoURL)=>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(()=>{})
      .catch(e=>console.e(e))
  }

  }

  const handleEmailVerification =()=>{
    verifyEmail()
    .then(()=>{})
    .catch(error=>console.error(error))
  }

  const handleAccepted = event=>{
    setAccepted(event.target.checked)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name="photourl" type="text" placeholder="Enter PhotoURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms And Conditions</Link></>} />
      </Form.Group>
     
      
      <Button variant="primary" type="submit" disabled={!accepted}>
       Register
      </Button>
      <br />
      <Form.Text className="text-danger">
         {error}
        </Form.Text>
    </Form>
  );
};

export default Register;