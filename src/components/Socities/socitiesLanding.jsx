import React from 'react';

import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

import IndexNavbar from '../Navbars/IndexNavbar'
import Footer from '../Footer/Footer';
import '../../assets/demo/new_demo.scss';

export  default class SocitiesLanding extends React.Component {
    componentDidMount() {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // this.setState(blogPosts : [...getBlogPosts]);
      }
      componentWillUnmount() {
        document.body.classList.toggle("profile-page");
      }
    render(){
        return (
        <div>
            <IndexNavbar g="chf"/>
            <div className="lx">
                <div className="main lx2">
                <div className="container">
                    <h1 className="title text-center" style={{fontSize:'2.5rem'}}>Beautiful Cards</h1>
                    <h6 className="category text-center" style={{fontSize:'1.5rem'}}>One Card for Every Problem</h6>
                    <h5 className="description text-center" style={{fontSize:'1.5rem'}}>From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Now UI Kit style principles and have a design that stands out. We have gone above and beyond with options for you to organise your information.</h5>
                </div>
                <Coverflow
                width="960" height="500"
                displayQuantityOfSide={2}
                navigation={false}
                enableScroll={true}
                clickable={true}
                active={0}
                >        
                <img src={require('../../assets/img/chester-wade.jpg')} alt='Cultural' data-action="/socities/cultural"/>
                <img src={require('../../assets/img/denys.jpg')} alt='Technical' data-action="http://passer.cc"/>
                <img src={require('../../assets/img/fabien-bazanegue.jpg')} alt='Miscellaneous' data-action="https://doce.cc/"/>
                <img src={require('../../assets/img/mark-finn.jpg')} alt='Tech Teams' data-action="http://tw.yahoo.com"/>
                </Coverflow>
                </div>
                <Footer g="chf"/>
                </div>
        </div>
        
        )
    }
}