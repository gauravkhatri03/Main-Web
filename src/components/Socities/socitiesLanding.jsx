import React from 'react';

import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium'
import IndexNavbar from '../Navbars/IndexNavbar'
import Footer from '../Footer/Footer';
import '../../assets/demo/new_demo.scss';

export  default class SocitiesLanding extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            mob: false
        }
    }
    componentDidMount() {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // this.setState(blogPosts : [...getBlogPosts]);
        window.addEventListener('resize',()=>{
            const a =  window.innerWidth;
            
            if(a<=1000) {
                this.setState({
                    mob: true
                })
                console.log(this.state.mob);
            }
            else {
                this.setState({
                    mob: false
                })
                console.log(this.state.mob);
            }
        })
      }
      componentWillUnmount() {
        document.body.classList.remove("profile-page");
        document.body.classList.remove("index-page");
      }
    changePage = (e) =>{
        e.preventDefault();
        let x = e.target.getAttribute("alt");
        x = x.toLowerCase()
        console.log(x)
        this.props.history.push('/socities/'+x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;   }
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
                <StyleRoot>
                    <Coverflow
                    displayQuantityOfSide={2}
                    navigation = {this.state.mob}
                    infiniteScroll = {true}
                    enableHeading
                    media={{
                        '@media (max-width: 900px)': {
                        width: '600px',
                        height: '300px'
                        },
                        '@media (min-width: 900px)': {
                        width: '960px',
                        height: '600px'
                        }
                    }}
                    >
                        <img src={require('../../assets/img/chester-wade.jpg')} alt='Cultural' title="double click to enter" onDoubleClick={this.changePage}/> 
                        <img src={require('../../assets/img/denys.jpg')} alt='Technical' onDoubleClick={this.changePage}/>
                        <img src={require('../../assets/img/fabien-bazanegue.jpg')} alt='Miscellaneous' onDoubleClick={this.changePage}/>
                        <img src={require('../../assets/img/mark-finn.jpg')} alt='Tech Teams' onDoubleClick={this.changePage}/>
                    </Coverflow>
                </StyleRoot>
                </div>
                <Footer g="chf"/>
                </div>
        </div>
        
        )
    }
}