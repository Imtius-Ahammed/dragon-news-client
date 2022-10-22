import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../constexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";


const RightSideNav = () => {
  const {providerLogin} = useContext(AuthContext)


  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
   providerLogin(googleProvider)
   .then(result=>{
    const user = result.user;
    console.log(user);
   })
   .catch(error=>{
    console.error(error)
   })
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-2" variant="outline-primary">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
        <div className="mt-4">
          <h5>Find Us On</h5>
          <ListGroup>
            <ListGroup.Item className="mb-2">
              <FaFacebook></FaFacebook> Facebook
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaWhatsapp></FaWhatsapp> WhatsApp
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaTwitter></FaTwitter> Twitter
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">
              <FaTwitch></FaTwitch> Twitch
            </ListGroup.Item>
            <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <BrandCarousel></BrandCarousel>
        </div>
      </ButtonGroup>
    </div>
  );
};

export default RightSideNav;
<h3>this si s</h3>;
