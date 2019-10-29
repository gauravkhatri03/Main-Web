import React from "react";
import {Link} from 'react-router-dom'
import {
  Button,
  // Card,
  // CardHeader,
  // CardBody,
  // Label,
  // FormGroup,
  // Form,
  // Input,
  // FormText,
  // NavItem,
  // NavLink,
  // Nav,
  // Table,
  // TabContent,
  // TabPane,
  Container,
  Row,
  Col,
  // UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";
const BlogCard = props => {
  var { title, backText, caption, link, image } = props;
  const carouselItems = [
    {
      src: require("assets/img/denys.jpg"),
      altText: "Slide 1",
      caption: "Big City Life, United States"
    }
  ];
  return (
    <div className="section">
      <Container>
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <UncontrolledCarousel items={carouselItems} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left" style={{left:"20%"}}>Sample Blog Title</h1>
            <h5 className="text-on-back">{backText}</h5>
            <p className="profile-description text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              suscipit assumenda quasi nemo aut, quibusdam itaque laboriosam
              corrupti asperiores reprehenderit sunt esse necessitatibus
              tempora, nobis sapiente. Ipsam soluta incidunt harum.
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              <i className="tim-icons icon-camera-18" /> 5 days ago
            </p>
            <div className="btn-wrapper pt-3">
            <Link to={'/blog/'+ props.backText}>
              <Button
                className="btn-round"
                color="primary"
                href="#pablo"
                onClick={() =>{
                  window.scrollTo(0,0)
                }}
              > 
                <i className="tim-icons icon-book-bookmark" /> Read More
              </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default BlogCard;
