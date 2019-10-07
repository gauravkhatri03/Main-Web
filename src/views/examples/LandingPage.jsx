import React from "react";
import Carousel from 'nuka-carousel';
// core components
import Footer from "components/Footer/Footer.jsx";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import PageHeader from "../../components/PageHeader/PageHeader";

class LandingPage extends React.Component {
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
        gradient: 'chbL'
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
    const p = "We are the official newsletter of DTU";
    return (
      <>
      <IndexNavbar />
      <div className="wrapper flx">
        <PageHeader  pageName="Hi, We're DTU Times" gradient={this.state.gradient} para={p} className="mf1"/>
        <div className="main mf mt-5">
          <div className="sub1">
          <h1 className="text-center">I am thinking of putting a photo for this div's background</h1>
          <p className="text-center text-secondary" style={{margin: 'auto auto', width:'610px'}}>Medium Rare is an elite author known for offering high-quality, high-value products backed by timely and personable support. Recognised and awarded by Envato on multiple occasions for producing consistently outstanding products, it's no wonder over 20,000 customers enjoy using Medium Rare templates.</p>
          </div>
          <div className="sub2">
          <div>
            <h1 className="text-center">I am also Thinking of Removing Team section</h1>
            <p className="text-center text-secondary" style={{margin: 'auto auto', width:'610px'}}>I want to include team section here in this tab.</p>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 col-sm-12" style={{marginLeft:"14rem"}}>
              <h4>Inclusion</h4>
              <p className="text-secondary" style={{fontSize:"14px", width:'290px'}}>With rich modal and notification functionality and a robust suite of options, Stack makes building feature-heavy pages simple and enjoyable. </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Ingenuity</h4>
              <p className="text-secondary" style={{fontSize:"14px", width:'290px'}}>Drastically reduce the time it takes to move from initial concept to production-ready with Stack and Variant Page Builder. Your clients will love you for it. </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <h4>Innovation</h4>
              <p className="text-secondary" style={{fontSize:"14px", width:'290px'}}>Our customers love the comfort that comes with six-months free support. Our dedicated support forum makes interacting </p>
            </div>
          </div>
          </div>
        </div>
        <div className="mf2">
        <Carousel enableKeyboardControls={true} withoutControls={false} style={{height:'550px'}}>
        <div className="one">
        <h3 className="title" style={{marginLeft:'25.5rem'}}>Slide 1</h3>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
          </div>
        </div>
        <div className="one">
          <h3 className="title" style={{marginLeft:'25.5rem'}}>Slide 2</h3>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
          </div>
        </div>
        <div className="one">
          <h3 className="title" style={{marginLeft:'25.5rem'}}>Slide 3</h3>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src="#" alt="Profile-Photo" className="img-center img-fluid rounded-circle"/>
              <h4 className="title">Name</h4>
              <p>Designation</p>
            </div>
          </div>
        </div>
      </Carousel>
        </div>
        <Footer />
      </div>
    </>
    );
  }
}

export default LandingPage;
