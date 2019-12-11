import React from "react";
// reactstrap components
// import { Container } from "reactstrap";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
const headerStyle = {
  position: "absolute",
  left:"0",
  right:"0",
}
class BlogHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand" style={{top:"38%"}}>
            <Container>
                  <h5 className="text-on-back">DTU
                  <h1
                    className="profile-title text-right"
                    style={headerStyle}
                  >
                    Blogs
                  </h1>
                  </h5>
                  <p className="profile-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores harum ea minus placeat debitis, perspiciatis sequi
                    nihil, odio est illo recusandae cumque molestias provident
                    distinctio iusto, aspernatur praesentium deserunt voluptate?
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/creativetim"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
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
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Like us
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
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow us
                    </UncontrolledTooltip>
                  </div>
            </Container>
          </div>
        </Container>
      </div>
    );
  }
}

export default BlogHeader;
