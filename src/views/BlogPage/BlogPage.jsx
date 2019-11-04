import React from "react";
import BlogHeader from "../../components/BlogPageComponents/BlogHeader";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import Footer from "../../components/Footer/Footer";
import BlogCard from "../../components/BlogPageComponents/BlogCard";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { getInstance } from "../../services/axiosInstanceBlog";
const instance = getInstance();
const paginationStyle = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  paddingBottom: "2rem"
};
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      pageNo: 1,
      lastPage: 0,
      totalPages: []
    };
  }
  handlePrevClick = async () => {
    if (this.state.pageNo >= 1) {
      let newpage = this.state.pageNo - 1;
      this.setState({ pageNo: newpage });
      //call for getting previous page's blog data
      instance
        .get("/story?page=" + newpage)
        .then(res => {
          let temp = [{ ...res.data }];
          let resData = temp[0]["data"];
          this.setState({ blogPosts: resData });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  handleNextClick = async () => {
    if (this.state.pageNo < this.state.lastPage) {
      let newpage = this.state.pageNo + 1;
      this.setState({ pageNo: newpage });
      //call for getting next page's blog data
      instance
        .get("/story?page=" + newpage)
        .then(res => {
          let temp = [{ ...res.data }];
          let resData = temp[0]["data"];
          this.setState({ blogPosts: resData });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  handlePageClick = e => {
    this.setState({ pageNo: +e.target.value });
    //call for getting requested page's data
    instance
      .get("/story?page=" + e.target.value)
      .then(res => {
        let temp = [{ ...res.data }];
        let resData = temp[0]["data"];
        this.setState({ blogPosts: resData });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    document.body.classList.toggle("index-page");
    document.body.classList.toggle("profile-page");
    instance
      .get("/story?page=" + this.state.pageNo)
      .then(res => {
        let temp = [{ ...res.data }];
        let resData = temp[0]["data"];

        let countPages = [];
        for (let i = 1; i <= res.data.meta.last_page; i++) {
          countPages[i - 1] = i;
        }
        this.setState({
          blogPosts: resData,
          lastPage: res.data.meta.last_page,
          totalPages: countPages
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentWillUnmount() {
    document.body.classList.toggle("profile-page");
    document.body.classList.toggle("index-page");
  }

  render() {
    var { blogPosts, pageNo, lastPage, totalPages } = this.state;
    return (
      <>
        <IndexNavbar g="chf" />
        <BlogHeader />
        <div className="wrapper">
          {blogPosts.map(post => {
            return (
              <div key={post["id"]}>
                <BlogCard
                  key={post["id"]}
                  backText={post["views"]}
                  title={post["title"]}
                  biliner={post["biliner"]}
                  image={post["imgURL"]}
                  slug={post["slug"]}
                  created_at={post["created_at"]["date"]}
                  image={post["imgUrl"]}
                  slug={post["slug"]}
                />
              </div>
            );
          })}
          <div className="pagination" style={paginationStyle}>
            <Pagination>
              <PaginationItem onClick={this.handlePrevClick}>
                <PaginationLink>Previous</PaginationLink>
              </PaginationItem>
              {totalPages.map(page => {
                return (
                  <PaginationItem
                    key={page}
                    className={page === pageNo ? "active" : ""}
                  >
                    <PaginationLink
                      onClick={e => this.handlePageClick(e, "value")}
                      value={page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem onClick={this.handleNextClick}>
                <PaginationLink>Next</PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Blog;
