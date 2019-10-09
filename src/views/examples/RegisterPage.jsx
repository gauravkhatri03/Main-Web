import React from "react";

// reactstrap components
import {Button,Card,CardHeader,CardBody,FormGroup,Form,Input,Container,Row,Col,UncontrolledTooltip} from "reactstrap";

//Google-Maps Api
import {GoogleMap, withScriptjs, withGoogleMap,Marker} from 'react-google-maps'

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer.jsx";


const Map = () => {
    return (
        <GoogleMap
            defaultZoom={16}
            defaultCenter={{lat: 28.7506165, lng: 77.1165776}}
            >
            <Marker position={{lat:28.7506165,lng:77.1165776}}/>
        
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares1to6: "",
      squares7and8: "",
      gradient: 'chb',
      foot: null
    }
  }
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
    document.body.classList.toggle("index-page");
    this.setState(()=>{
      return {
        gradient: 'chbR',
        foot: 'chfR'
      }
    })
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
    document.body.classList.toggle("index-page");
    this.setState(()=>{
      return {
        gradient: 'chb',
        foot: null
      }
    })
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  render() {
    const p = "We’d love to hear from you. Talk to us about whatever you like, ask us a question or tell us about something you may be interested in. We are all ears."  
    return (
      <>
      <IndexNavbar g= {this.state.foot}/>
      <div className="wrapper">
        <PageHeader  pageName="Get In Touch" gradient={this.state.gradient}  para={p} sub="Contact"/>
        <div className="main">
        <section className="section">
        <div className="squares square1" id="chb2"/>
        <div className="squares square2" id="chb2"/>
        <div
            className="square square-7"
            id="square7"
            style={{ transform: this.state.squares7and8 }}
        />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact Us</h1>
                    </CardHeader>
                    <CardBody>
                    <div style={{width:"80vw",height:"95.75%" }}>
                      <WrappedMap 
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&callback=initMap`}
                      loadingElement={<div style={{height:"100%"}}/>}
                      containerElement={<div style={{height:"100%"}}/>}
                      mapElement={<div style={{height:"100%"}}/>}
                      className="br">
                      </WrappedMap>
                    </div>
                      <Form className="mt-5">
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Your Name</label>
                              <Input defaultValue="Mike" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Email address</label>
                              <Input
                                placeholder="mike@email.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label>Phone</label>
                              <Input defaultValue="001-12321345" type="text" />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label>Company</label>
                              <Input defaultValue="CreativeTim" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="Hello there!" type="text" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-round float-right"
                          color="primary"
                          data-placement="right"
                          id="tooltip341148792"
                          type="button"
                        >
                          Send Feedback
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          placement="right"
                          target="tooltip341148792"
                        >
                          Can't wait for your message
                        </UncontrolledTooltip>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mt-6" md="4" >
                  <div className="info info-horizontal ">
                    <div className="icon icon-primary ">
                      <i className="tim-icons icon-square-pin" />
                    </div>
                    <div className="description ">
                      <h4 className="info-title">Find us at the office</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br />
                        7652 Bucharest, <br />
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="tim-icons icon-mobile" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Michael Jordan <br />
                        +40 762 321 762 <br />
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
            </Container>
          </section>
        </div>
        <Footer g={this.state.foot} />
      </div>
      </>
    );
  }
}

export default RegisterPage;
