import React from "react";
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import BlogCard from "../../components/BlogPageComponents/BlogCard";
import {getBlogs} from '../../services/fetchBlogData'
let ps = null;

class Blog2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tabs: 1
      blogPosts: [],
      postNo: 1
    };
  }
  componentDidMount() {
    document.body.classList.toggle("index-page");
    document.body.classList.toggle("profile-page");
    this.setState({ blogPosts: getBlogs() });
    // this.setState(blogPosts : [...getBlogPosts]);
  }
  componentWillUnmount() {
    document.body.classList.toggle("profile-page");
  }

  render() {
    var { blogPosts } = this.state;
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div
            className="page-header"
            style={{ marginBottom: "7.1rem", height: "100%" }}
          >
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <h1
                    className="profile-title text-left"
                    style={{ left: "40%" }}
                  >
                    Blogs
                  </h1>
                  <h5 className="text-on-back">DTU</h5>
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
                </Col>
              </Row>
            </Container>
          </div>
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          {blogPosts.map(post => {
            return (
              <div key={post["backText"]}>
                <BlogCard key={post["backText"]} backText={post["backText"]} />
              </div>
            );
          })}
          <Footer />
        </div>
      </>
    );
  }
}

export default Blog2;
