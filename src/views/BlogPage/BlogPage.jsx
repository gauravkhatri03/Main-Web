import React from "react";
import BlogHeader from "../../components/BlogPageComponents/BlogHeader";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import BlogCard from "../../components/BlogPageComponents/BlogCard";
import { getBlogs } from "../../services/fetchBlogData";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tabs: 1
      blogPosts: []
      //   postNo: 1
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
    document.body.classList.toggle("index-page");
  }

  render() {
    var { blogPosts } = this.state;
    return (
      <>
        <IndexNavbar g="chf" />
        <BlogHeader />
        <div className="wrapper">
          {blogPosts.map(post => {
            return (
              <div key={post["backText"]}>
                <BlogCard key={post["backText"]} backText={post["backText"]} />
              </div>
            );
          })}
          <Footer  g= "chf"/>
        </div>
      </>
    );
  }
}

export default Blog;