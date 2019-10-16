import React from 'react';
import ItemsCarousel from 'react-items-carousel';

//styles
import "./styles/fest.scss"

import IndexNavbar from '../Navbars/IndexNavbar'
import Footer from '../Footer/Footer';

export default class GalleryFest extends React.Component {
constructor(props) {
    super(props)
    this.state = {
        activeItemIndex: 0
    }
}
render() {
    return (
        <>
        <IndexNavbar g="chfL"/>
        <div>
            <ItemsCarousel
                infiniteLoop={true}
                gutter={0}
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={true}
                numberOfCards={3}
                slidesToScroll={1}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={this.state.activeItemIndex}
                requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                rightChevron={'>'}
                leftChevron={'<'}
                className="gal-flex"
            >
            <div className="item-1-1 text-center align-center text-front"><div className="inside"><h3>Engifest</h3></div></div>
                <div className="item-1-2 text-center align-center"><div className="inside"><h3>Yuvaan</h3></div></div>
                <div className="item-1-3 text-center align-center"><div className="inside"><h3>Aahvaan</h3></div></div>
                <div className="item-1-4 text-center align-center"><div className="inside"><h3>Invictus</h3></div></div>
            </ItemsCarousel>
        </div>
        <Footer g="chfL"/>
        </>
    )
}
}