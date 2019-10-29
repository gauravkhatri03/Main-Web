import React from 'react';

import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium'
import IndexNavbar from '../Navbars/IndexNavbar'
import Footer from '../Footer/Footer';
import '../../assets/demo/new_demo.scss';
import PageHeader from '../PageHeader/PageHeader'
export  default class EditionsLanding extends React.Component {
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
         }
    render(){
        return (
        <div>
            <IndexNavbar g="chf"/>
            <div className="lx">
                <div className="main lx2">
                <div className="container">
                    <h1 className="title text-center" style={{fontSize:'2.5rem'}}>Editions</h1>
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
                        <img src={require('../../assets/img/chester-wade.jpg')} title="double click to enter" onDoubleClick={this.changePage}/> 
                        <img src={require('../../assets/img/denys.jpg')}  onDoubleClick={this.changePage}/>
                        <img src={require('../../assets/img/fabien-bazanegue.jpg')}  onDoubleClick={this.changePage}/>
                        <img src={require('../../assets/img/mark-finn.jpg')}  onDoubleClick={this.changePage}/>
                    </Coverflow>
                </StyleRoot>
                </div>
                <Footer g="chf"/>
                </div>
        </div>
        
        )
    }
}