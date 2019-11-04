import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import IndexNavbar from "../Navbars/IndexNavbar";
import PageHeader from "../PageHeader/PageHeader";
import Footer from "components/Footer/Footer.jsx";

class ContactUs extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
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
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
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
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Contact</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form">
                          <div style={{ display: "flex" }}>
                            <div>
                              <p>Get In Touch</p>
                              <div
                                className="btn-wrapper profile pt-2"
                                style={{
                                  marginBottom: "1rem",
                                  paddingTop: "0 !important"
                                }}
                              >
                                <Button
                                  className="btn-icon btn-round"
                                  color="twitter"
                                  href="https://twitter.com/creativetim"
                                  id="tooltip639225725"
                                  target="_blank"
                                >
                                  <i className="tim-icons icon-email-85" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip639225725"
                                >
                                  Email us dtutimes@dtu.ac.in
                                </UncontrolledTooltip>
                                <Button
                                  className="btn-icon btn-round"
                                  color="facebook"
                                  href="https://www.facebook.com/creativetim"
                                  id="tooltip982846143"
                                  target="_blank"
                                >
                                  <i className="fab fa-facebook-square" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip982846143"
                                >
                                  25K Likes
                                </UncontrolledTooltip>
                                <Button
                                  className="btn-icon btn-round"
                                  color="dribbble"
                                  href="https://dribbble.com/creativetim"
                                  id="tooltip951161185"
                                  target="_blank"
                                >
                                  <i className="fab fa-instagram" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip951161185"
                                >
                                  5.1K Followers
                                </UncontrolledTooltip>
                              </div>
                            </div>

                            <div>
                              {/* upper div is for parent flex */}

                              {/* <h4>Press Enquiries</h4>
                              <div style={{ display: "flex" }}>
                                <div>
                                  <h5 style={{ marginTop: "1rem" }}>
                                    Shivam Jha
                                  </h5>
                                  <h5>
                                    Editor-in-Chief <br />
                                    shivam.jha3@gmail.com
                                  </h5>
                                </div>
                                <div>
                                  <h5 style={{ marginTop: "1rem" }}>
                                    Zara Khan
                                  </h5>
                                  <h5>
                                    Student Head <br />
                                    zarakhan9278@gmail.com
                                  </h5>
                                </div>
                              </div> */}
                            </div>
                          </div>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Full Name"
                              type="text"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.phoneFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-badge" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Phone no."
                              type="text"
                              onFocus={e => this.setState({ phoneFocus: true })}
                              onBlur={e => this.setState({ phoneFocus: false })}
                            />
                          </InputGroup>

                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.noteFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-bulb-63" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Drop us a line"
                              type="text"
                              onFocus={e => this.setState({ noteFocus: true })}
                              onBlur={e => this.setState({ noteFocus: false })}
                            />
                          </InputGroup>
                        </Form>
                        <Button className="btn-round" color="primary" size="lg">
                          Send Feedback
                        </Button>
                      </CardBody>
                      {/* <CardFooter> */}

                      <div style={{ marginTop: "1rem", textAlign: "center" }}>
                        <h4>Press Enquiries</h4>
                        <div style={{ textAlign: "center" }}>
                          <div>
                            <h5 style={{ marginTop: "1rem" }}>
                              Shivam Jha <br />
                              Editor-in-Chief <br />
                              shivam.jha3@gmail.com
                            </h5>
                          </div>
                          <div>
                            <h5 style={{ marginTop: "1rem", marginBottom:"2rem"}}>
                              Zara Khan <br />
                              Student Head <br />
                              zarakhan9278@gmail.com
                            </h5>
                          </div>
                        </div>
                      </div>
                      {/* </CardFooter> */}
                    </Card>
                  </Col>
                  {/* <Col>
                    <h4>Press Enquiries</h4>
                    <h5 style={{ marginTop: "1rem" }}>Shivam Jha</h5>
                    <h5>
                      Editor-in-Chief <br />
                      shivam.jha3@gmail.com
                    </h5>
                    <h5></h5>
                    <h5 style={{ marginTop: "2rem" }}>Zara Khan</h5>
                    <h5>
                      Student Head <br />
                      zarakhan9278@gmail.com
                    </h5>
                    <h5></h5>
                  </Col> */}
                  {/* <Col></Col> */}
                  {/* <Col></Col> */}
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
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
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default ContactUs;
