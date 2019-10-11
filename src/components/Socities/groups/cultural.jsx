import React from 'react';
import IndexNavbar from '../../Navbars/IndexNavbar'
import Footer from '../../Footer/Footer';
export default class Cultural extends React.Component{
    componentDidMount() {
        document.body.classList.toggle("index-page");
        document.body.classList.toggle("profile-page");
        // this.setState(blogPosts : [...getBlogPosts]);
      }
      componentWillUnmount() {
        document.body.classList.toggle("profile-page");
      }
    render() {
        return (
            <div>
                <IndexNavbar g="chf"/>
                <div className="main" style={{height:'800px', marginTop:'7rem'}}>
                    <h1 className="title text-center" style={{fontSize:'2.5rem'}}> Cultural Socities</h1>
                    <h6 className="category text-center" style={{fontSize:'1.5rem'}}>One Card for Every Problem</h6>
                    <h5 className="description text-center" style={{fontSize:'1.5rem'}}>From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Now UI Kit style principles and have a design that stands out. We have gone above and beyond with options for you to organise your information.</h5>
                </div>
                <Footer g= "chf"/>
            </div>
        )
    }
}
