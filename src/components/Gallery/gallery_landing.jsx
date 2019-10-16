import React from 'react';
import { Link } from "react-router-dom";

//styles
import "./styles/landing.scss"

import IndexNavbar from '../Navbars/IndexNavbar'
import Footer from '../Footer/Footer';

export default class GalleryLanding extends React.Component {
render() {
    return (
        <>
        <IndexNavbar g="chfL"/>
        <div className="gal-flex">
            <div className="item-1 text-center align-center text-front"><div className="inside"><Link to='/gallery/fest'><h1>Fest</h1></Link></div></div>
            <div className="item-2 text-center align-center"><div className="inside"><Link to='/gallery/fest'><h3>Times Canvas</h3></Link></div></div>
            <div className="item-3 text-center align-center"><div className="inside"><Link to='/gallery/fest'><h3>Seniors of DTU</h3></Link></div></div>
        </div>
        <Footer g="chfL"/>
        </>
    )
}
}