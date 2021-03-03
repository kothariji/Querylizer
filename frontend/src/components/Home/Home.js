import { useContext } from "react";
import Container from "react-bootstrap/Container";
import classes from "./Home.module.css";
import logo from "../../assets/Query.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button, Anchor } from "atomize";
import { Row, Col} from "react-bootstrap";
import wallIamge from "../../assets/square_mid_light.svg"

//firebase 
import { UserContext } from "../../context/UserContext";
import firebase from "firebase/app";
import "firebase/auth"
var provider = new firebase.auth.GoogleAuthProvider();

const Home = () => {

  const context = useContext(UserContext)

  const handleLogin = () => {
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      console.log("credential: ",credential)
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      console.log("token: ",token)
      // The signed-in user info.
      var user = result.user;
      console.log("userset", user)
      context.setUser(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
      var email = error.email;
      console.log(email)
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(credential)
      // ...
    });
  }





  return (
    <div style = {{backgroundImage: `url(${wallIamge})`}}>
      <Navbar>
        <div className = {classes.home__navbar__brand}>
          <img src={logo} className = {classes.home__navbar__brand__logo} alt="Querylizer" />
          <span style={{ fontWeight: "800" }}>Query</span>lizer
        </div>
        <div style={{ fontSize: "1.7rem", paddingTop: "10px", paddingRight: "30px"}} className="ml-auto">
          <Nav>
            <Nav.Link href="#home" className = {classes.home__navbar__logo}>
              <i
                className= {"far fa-envelope " + classes.home__navbar__icons}
              ></i>
            </Nav.Link>
            <Nav.Link href="#features">
              <i
                className = {"fab fa-github " + classes.home__navbar__icons}
              ></i>
            </Nav.Link>
            <Nav.Link href="/visualizer">
              <i className= {"fas fa-sign-in-alt " + classes.home__navbar__icons}></i>
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <Container className="text-center">
        <div>
          <h1 className = {classes.home_h1_text}>
            Create Stunning 🚩 Blazing ⚡ Interactive 🧠{" "}
            <span className={classes.home_span_gradient}>
              <br/>
              <br/>
              Database Diagrams{" "}
            </span>
            🚀
          </h1>
        </div>
        <br />
        {/* <h2 style={{ fontSize: "2.0rem", fontWeight: "300" }}> */}
        <h2><span className = {classes.home_h2_text}>
          Say Hi 👋 to the No Code Era
          </span>
        </h2>
        <br />
        <Row>
              <Col sm={{ size: 'auto', offset: 1 }} className = {classes.home_button_col}>
                <Button onClick = {handleLogin} shadow="3" hoverShadow="4" m={{ r: "1rem" }} className = {classes.home_button}>
                  LOGIN                    
                </Button>
                <Anchor href="/visualizer">
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                  >                   
                    { context.user?.email ? "welocme back " + context.user.email : "Continue as a Guest"}   
                  </Button>
                </Anchor>
                    
                <Anchor href="https://www.google.com" className = {classes.home_button_link}>                      
                  <Button
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    className = {classes.home_button}
                    // onClick={addNewNode}
                  >ABOUT US
                  </Button>
                </Anchor>
              </Col>
        </Row>
        <br />
        <h2 className = {classes.home_h2_last_text}>
          Easily convert your Database Diagram to code. Hassle Free.
        </h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
     
    </div>
  );
}


export default Home;