import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className={"page-header header-filter " + this.props.gradient}>
        <div className="squares square1" id="chb2"/>
        <div className="squares square2" id="chb2"/>
        <div className="squares square3" id="chb2"/>
        <div className="squares square4" id="chb2"/>
        <div className="squares square5" id="chb2"/>
        <div className="squares square6" id="chb2"/>
        <div className="squares square7" id="chb2"/>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">{this.props.pageName}</h1>
            <h3 className="d-none d-sm-block">
              {this.props.para}
            </h3>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
