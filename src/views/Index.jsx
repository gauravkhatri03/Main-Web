import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import PageHeader from "components/PageHeader/PageHeader.jsx";
import Footer from "components/Footer/Footer.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foot: null
    }
  }
  componentDidMount() {
    document.body.classList.toggle("index-page");
    this.setState(()=>{
      return {
        foot: 'chf'
      }
    })
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
    this.setState(()=>{
      return {
        foot: null
      }
    })
  }
  render() {
    const p = "DTU's Official Newsletter";
    return (
      <>
        <IndexNavbar g= {this.state.foot}/>
        <div className="wrapper">
          <PageHeader pageName="Times" gradient="chb" para={p} sub="DTU"/>
          <div className="main">
          </div>
          <Footer g={this.state.foot} />
        </div>
      </>
    );
  }
}

export default Index;
