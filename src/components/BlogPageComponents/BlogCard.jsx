import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
const BlogCard = props => {
  var { title, backText, biliner, slug, image, created_at } = props;
  const carouselItems = [
    {
      src: image,
      altText: "Slide 1",
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
            <h1
              className="profile-title text-left"
              style={{ left: "20%", fontSize: "1.2rem" }}
            >
              {title}
            </h1>
            <h5 className="text-on-back">{backText}</h5>
            <p
              className="profile-description text-left"
              style={{ fontSize: "1rem" }}
            >
              {biliner}
            </p>
            <p style={{ fontSize: "0.6rem" }}>
              <i className="tim-icons icon-camera-18" /> {created_at}
            </p>
            <div className="btn-wrapper pt-3">
              <Link to={"/blog/" + props.backText}>
                <Button
                  className="btn-round"
                  color="primary"
                  href={"http://api.dtutimes.live/v1/" + slug}
                  onClick={() => {
                    window.scrollTo(0, 0);
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
