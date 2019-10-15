import React from 'react';

import {Row,Col} from 'reactstrap';
import $ from 'jquery';

import IndexNavbar from '../../Navbars/IndexNavbar'
import Footer from '../../Footer/Footer';

export default class Cultural extends React.Component{
    componentDidMount() {
        const z = document.querySelectorAll('.a')
        const y = document.querySelectorAll('.b')

        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        document.addEventListener('scroll',()=>{
            const h = document.documentElement.scrollTop;
            const x = h - 450;
            const t = "translateY(-" + x + "px)"
            if(document.documentElement.scrollTop>=450) {
                for(let i = 0 ;i<z.length;i++){
                    z[i].style.transform = "translateY(-" + x + "px)"
                    console.log(t);
                }
            }
            else {
                for(let i = 0 ;i<z.length;i++){
                    z[i].style.transform = "translateY(-" + 0 + "px)"
                    console.log(t);
                }
            }
            for(let i = 0 ;i<y.length;i++){
                y[i].style.transform = "translateY(-" + h + "px)"
            }
        })
    }
    componentWillUnmount() {
        document.body.classList.toggle("profile-page");
        window.removeEventListener("scroll", this.applyAnimation);
      }
  
    render() {
        return (
            <div className="gc1">
                <IndexNavbar g="chf" className="gc2"/>
                <div className="main gc3" style={{height:'800px', marginTop:'7rem'}}>
                    <h1 className="title text-center" style={{fontSize:'2.5rem'}}> Cultural Socities</h1>
                    <h6 className="category text-center" style={{fontSize:'1.5rem'}}>One Card for Every Problem</h6>
                    <h5 className="description text-center" style={{fontSize:'1.5rem'}}>From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Now UI Kit style principles and have a design that stands out. We have gone above and beyond with options for you to organise your information.</h5>
                    <Row>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")}  className="ml-1 mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5 mr-1"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")}  className="ml-1 mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>

                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5 mr-1"/>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")}  className="ml-1 mt-5"/>
                            <img src= {require("../../../assets/img/society/madhurima/3.jpg")} className="mt-5 mr-1 b " /> 
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5 "/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5 mr-1"/>
                            <img src= {require("../../../assets/img/society/madhurima/3.jpg")} className="mt-5 mr-1 b c" />

                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")}  className="ml-1 mt-5"/>
                            <img src= {require("../../../assets/img/society/madhurima/3.jpg")} className="mt-5 mr-1 a "/>

                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>
                            
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5"/>
                        </Col>
                        <Col md="3">
                            <img src= {require("../../../assets/img/society/madhurima/1.jpg")} className="mt-5 mr-1"/>
                            <img src= {require("../../../assets/img/society/madhurima/3.jpg")} className="mt-5 mr-1 a c" />
                        </Col>
                    </Row>
                    

                </div>
                <Footer g= "chf" className="gc4"/>
            </div>
        )
    }
}
