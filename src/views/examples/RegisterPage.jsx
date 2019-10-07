/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "components/Footer/Footer.jsx";


class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradient: 'chb'
    }
  }
  componentDidMount() {
    document.body.classList.toggle("index-page");
    this.setState(()=>{
      return {
        gradient: 'chbR'
      }
    })
  }
  componentWillUnmount() {
    
    document.body.classList.toggle("index-page");
    this.setState(()=>{
      return {
        gradient: 'chb'
      }
    })
  }
  render() {
    const p = "Contact Us Page will be here"  
    return (
      <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader  pageName="Reg" gradient={this.state.gradient}  para={p}/>
        <div className="main">
          
        </div>
        <Footer />
      </div>
      </>
    );
  }
}

export default RegisterPage;
