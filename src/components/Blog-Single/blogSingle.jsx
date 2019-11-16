import React, { Component } from "react";
// import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import IndexNavbar from "../Navbars/IndexNavbar";
import { getInstance } from "../../services/axiosInstanceBlog";
var HtmlToReactParser = require("html-to-react").Parser;
const instance = getInstance();
const nextBlogTitle = {
  width: "97%",
  margin: "auto",
  textAlign: "center"
};
const readNext = {
  width: "97%",
  margin: "auto",
  textAlign: "center",
  fontSize: "1.2rem",
  paddingTop: "15%"
};
const authorStyle = {
  height: "10rem",
  position: "absolute",
  bottom: "20%",
  right: "0",
  left: "0"
};
const authorInfo = {
  position: "absolute",
  bottom: "10%",
  left: "0",
  right: "0",
  textAlign: "center",
  height: "2vh"
};
const authorName = {
  position: "absolute",
  bottom: "15%",
  left: "0",
  right: "0",
  textAlign: "center",
  height: "2vh"
};
class BlogSingle extends Component {
  state = {
    index: 0,
    currentBlogData: {},
    nextBlogData: {},
    blogBody: "",
    nextBlogSlug: "",
    currentblogSlug: "",
  };
  componentDidMount() {
    var slug = window.location.pathname;
    instance
      .get(slug)
      .then(res => {
        const { data } = res;
        var htmlToReactParser = new HtmlToReactParser();
        var blogBody = htmlToReactParser.parse(data.body);
        if (data) {
          this.setState({
            currentBlogData: data,
            nextBlogData: data.prev,
            blogBody: blogBody,
            nextBlogSlug: data.prev.slug,
            currentblogSlug: data.slug,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  blogStyle = () => {
    var styles = {
      backgroundSize: "100% 100%",
      backgroundOverflow: "visible",
      backgroundRepeat: "no-repeat",
      backgroundImage:
        "url(" +
        this.state.currentBlogData["imgUrl"] +
        ")",
      height: "80vh",
      position: "relative"
    };
    return styles;
  };
  nextBlogStyle = () => {
    var styles = {
      backgroundSize: "100% 100%",
      backgroundImage:
        "linear-gradient(black, #33333380), url(" +
        this.state.nextBlogData["imgUrl"] +
        ")",
      height: "60vh"
    };
    return styles;
  };
  nextBlog = () => {
    var scrollStep = -window.scrollY / (400 / 15),
      scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
    instance
      .get("/story/" + this.state.nextBlogSlug)
      .then(res => {
        const { data } = res;
        var htmlToReactParser = new HtmlToReactParser();
        var blogBody = htmlToReactParser.parse(data.body);
        if (data) {
          this.setState({
            currentBlogData: data,
            nextBlogData: data.prev,
            blogBody: blogBody,
            nextBlogSlug: data.prev.slug,
            currentblogSlug: data.slug,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
      // this.props.history.push("/story/" + this.state.currentblogSlug);
  };
  render() {
    var { currentBlogData, nextBlogData, blogBody } = this.state;
    const blogStyle = this.blogStyle();
    const nextBlogCover = this.nextBlogStyle();
    if (!currentBlogData) {
      console.log("no data");
      return <div></div>;
    }
    var htmlToReactParser = new HtmlToReactParser();
    var blogBody = htmlToReactParser.parse(currentBlogData.body);
    return (
      <>
        <IndexNavbar g="p" />
        <div className="wrapper">
          <div className="container-fluid" style={blogStyle}>
            <div className="">
              <img
                // src={info[this.state.index].authorImg}
                className=" rounded-circle img-set img-center"
                style={authorStyle}
              />
            </div>
            {currentBlogData.user && (
              <div>
                <p style={authorName}>{currentBlogData.user.name}</p>
                <p style={authorInfo}>{currentBlogData.user.bio}</p>
              </div>
            )}
          </div>
          <div
            className="container"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <div className="row">
              <div className="col"></div>
              <div className="col-9">
                <div className="publisher-name">
                  <small className="text-muted" style={{ fontSize: "1rem" }}>
                    Published on
                    {currentBlogData.media &&
                      " " + currentBlogData.media[0].created_at}
                  </small>
                </div>
                <div
                  className="main-content-heading"
                  style={{ paddingRight: "7rem" }}
                >
                  <h1 className="title" style={{ fontSize: "5vh" }}>
                    {currentBlogData && currentBlogData.title}
                  </h1>
                </div>
                <div className="main-content-next-info"></div>
                <div className="main-content">
                  <div
                    className="h4"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "2rem",
                      wordSpacing: "0.1rem",
                      fontFamily: "PT Serif, serif",
                      fontSize: "2.8vh"
                    }}
                  >
                    {blogBody}
                  </div>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="container-fluid" style={nextBlogCover}>
            <div style={readNext}>
              <a
                onClick={this.nextBlog}
                style={{ color: "white", cursor: "pointer" }}
              >
                Read Next
              </a>
            </div>
            {nextBlogData && (
              <div style={nextBlogTitle}>
                <h1 className="title" style={{ fontSize: "3rem" }}>
                  {nextBlogData.title}
                </h1>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default BlogSingle;
