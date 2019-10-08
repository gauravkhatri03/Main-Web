import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    const p = "DTU's Official Newsletter";
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader pageName="Times" gradient="chb" para={p} sub="DTU"/>
          <div className="main">
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
