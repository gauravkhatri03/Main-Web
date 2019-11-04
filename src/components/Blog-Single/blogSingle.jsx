import React, { Component } from "react";
// import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import IndexNavbar from "../Navbars/IndexNavbar";
import Background from "assets/img/chester-wade.jpg";
import Mark from "assets/img/mark-finn.jpg";

const nextBlogTitle = {
  width: "97%",
  margin: "auto",
  textAlign: "center"
};
const nextBlogQuotation = {
  width: "97%",
  margin: "auto",
  textAlign: "center",
  top: "490%"
};
const readNext = {
  width: "97%",
  margin: "auto",
  textAlign: "center",
  fontSize: "1.2rem",
  paddingTop: "15%"
};
const authorStyle = {
  height: "10vh",
  position: "absolute",
  bottom: "20%",
  right: "0",
  left: "0"
};
const authorInfo = {
  position: "absolute",
  bottom: "10%",
  left: "0",
  right: "0",
  textAlign: "center",
  height: "2vh"
};
const authorName = {
  position: "absolute",
  bottom: "15%",
  left: "0",
  right: "0",
  textAlign: "center",
  height: "2vh"
};
const info = [
  {
    id: 1,
    title: "Celebrating 10 years of DTU Times",
    img: Background,
    qoutation: "Some catchy quotation for 1st",
    authorImg: require("../../assets/img/ryan.jpg"),
    date: "Published November 26, 2019 by A. Timfoney"
  },
  {
    id: 2,
    title: "The title for the next blog comes here",
    img: Mark,
    qoutation: "Some catchy quotation",
    authorImg: require("../../assets/img/ryan.jpg"),
    date: "Published November 29, 2019 by B. Timfoney"
  },
  {
    id: 3,
    title: "The title for the next blog comes here 3",
    img:
      "https://images.unsplash.com/photo-1569046611351-34f36e84321f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    qoutation: "Some catchy quotation",
    authorImg: require("../../assets/img/ryan.jpg"),
    date: "Published November 30, 2019 by B. Timfoney"
  },
  {
    id: 4,
    title: "The title for the next blog comes here 4",
    img:
      "https://images.unsplash.com/photo-1563212108-928913ca0ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1063&q=80",
    qoutation: "Some catchy quotation",
    authorImg: require("../../assets/img/ryan.jpg"),
    date: "Published November 30, 2019 by B. Timfoney"
  }
];
class BlogSingle extends Component {
  state = {
    index: 0
  };
  componentDidMount() {
    if (
      Number(this.props.match.params.id) > info.length ||
      Number(this.props.match.params.id) === 0
    ) {
      this.props.history.push("/blog/1");
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: Number(this.props.match.params.id) - 1
      });
      console.log(this.state.index);
    }
  }
  blogStyle = i => {
    if (info.length <= i) {
      i = 0;
    }
    var styles = {
      backgroundSize: "100% 100%",
      backgroundImage:
        "linear-gradient(black, #33333380), url(" + info[i].img + ")",
      height: "80vh",
      position: "relative"
    };
    return styles;
  };
  nextBlogStyle = i => {
    i = i + 1;
    if (info.length <= i) {
      i = 0;
    }
    var styles = {
      backgroundSize: "100% 100%",
      backgroundImage:
        "linear-gradient(black, #33333380), url(" + info[i].img + ")",
      height: "60vh"
    };
    return styles;
  };
  nextBlog = () => {
    var scrollStep = -window.scrollY / (400 / 15),
      scrollInterval = setInterval(function() {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
    // window.scrollTo(0,0)
    this.setState(pState => {
      if (pState.index < info.length - 1) {
        return {
          index: pState.index + 1
        };
      } else {
        return {
          index: 0
        };
      }
    });
    this.props.history.push("/blog/" + Number(this.state.index + 1));
    console.log(this.state.index);
  };
  render() {
    const blogStyle = this.blogStyle(this.state.index);
    const nextBlogCover = this.nextBlogStyle(this.state.index);
    return (
      <>
        <IndexNavbar g="p" />
        <div className="wrapper">
          <div className="container-fluid" style={blogStyle}>
            <div className="">
              <img
                src={info[this.state.index].authorImg}
                className=" rounded-circle img-set img-center"
                style={authorStyle}
              />
            </div>
            <p style={authorName}>abc</p>
            <p style={authorInfo}>
              Hello this is a sample text for the caption of the author
            </p>
          </div>
          <div
            className="container"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <div className="row">
              <div className="col"></div>
              <div className="col-9">
                <div className="publisher-name">
                  <small className="text-muted" style={{ fontSize: "1rem" }}>
                    {info[this.state.index].date}
                  </small>
                </div>
                <div
                  className="main-content-heading"
                  style={{ paddingRight: "7rem" }}
                >
                  <h1 className="title" style={{ fontSize: "5vh" }}>
                    {info[this.state.index].title}
                  </h1>
                </div>
                <div className="main-content-subheading">
                  <h2 style={{ fontSize: "3vh" }}>
                    {info[this.state.index].qoutation}
                  </h2>
                </div>
                <div className="main-content-next-info">
                  {/* <h6>Scroll down to go to the next article</h6> */}
                </div>
                <div className="main-content">
                  <p
                    className="h4"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "2rem",
                      wordSpacing: "0.1rem",
                      fontFamily: "PT Serif, serif",
                      fontSize: "2.8vh"
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus exercitationem quos iusto odit! Cumque magni, enim
                    illo rem ullam eaque aspernatur id eos dolor ab, delectus
                    repellendus? Unde culpa molestiae tenetur nihil quidem saepe
                    sint quaerat hic harum fuga eos tempore, ab quam autem?
                    Eligendi atque nesciunt laboriosam accusamus minima porro
                    ad? Nulla harum ut adipisci id, dolor aliquid maxime optio
                    alias numquam mollitia esse voluptatum. Vero temporibus
                    ullam delectus alias incidunt beatae, culpa a quos ad.
                    Voluptatum neque ab sapiente unde, voluptas distinctio
                    praesentium alias rem omnis id facilis inventore, atque
                    soluta illum doloribus odio a cum obcaecati fugit. Autem
                    facere eaque esse aut numquam rem recusandae sed nemo sequi
                    nisi? Corporis voluptatem, alias minima incidunt libero
                    ipsum tempora nam voluptates placeat doloribus quo quod
                    debitis ipsam facilis. Est voluptas, animi, a atque quisquam
                    quasi tenetur ullam commodi, tempora provident eius dolorem
                    odio optio non quia saepe quod pariatur sapiente mollitia
                    porro enim. Nostrum dolores dignissimos ut quisquam enim
                    aperiam voluptates quae saepe earum non nulla, libero neque
                    fugit? Ducimus quis veniam provident culpa sunt
                    exercitationem aperiam doloribus? Eius laudantium aperiam
                    rerum distinctio, libero vitae ad laborum. Labore fuga
                    incidunt optio consectetur veniam quaerat a est, ipsa ad
                    dolor vel suscipit soluta dolorum temporibus obcaecati
                    nostrum repellendus natus sit libero reprehenderit quod?
                    Corrupti impedit ducimus asperiores quisquam laudantium eum
                    doloremque, sit incidunt qui magnam fugit facilis debitis
                    expedita sed quo vel eveniet amet nisi blanditiis. Culpa
                    quibusdam in nulla ex quod exercitationem laborum nihil
                    vitae quidem blanditiis consequuntur molestias eius, est
                    harum eligendi porro sequi! Laboriosam fugiat odit culpa
                    iure officia, possimus recusandae nihil quasi facere odio
                    ipsa, impedit incidunt dolores eveniet asperiores delectus
                    ipsum architecto maiores ad voluptate velit fugit distinctio
                    vero officiis. Ea blanditiis perferendis nam reiciendis
                    laborum asperiores corrupti distinctio inventore, autem esse
                    ex, minima fugit natus a veniam culpa illo! Fuga modi, odit
                    ut minus facere nihil odio et tempore nemo, dolores,
                    asperiores debitis? Ut id perspiciatis laboriosam, alias
                    nostrum corrupti atque maiores nam repellendus. Perspiciatis
                    vel commodi architecto porro non voluptas deleniti
                    perferendis error optio totam quam dicta mollitia nisi, enim
                    autem voluptatibus recusandae odit animi sequi. At nostrum
                    alias quas quo tempora illo dolorem dolor fugit iure soluta
                    nisi consequatur vel, sunt sequi asperiores perspiciatis
                    maiores vero hic veniam, nulla saepe aliquam corrupti! Quis
                    ab soluta aliquam unde! Quibusdam aspernatur ex harum
                    voluptate molestias deserunt odit unde molestiae,
                    accusantium, libero in quam atque assumenda cum incidunt
                    asperiores a. Neque itaque minima illo ea qui aliquam
                    mollitia. Veritatis sed aspernatur libero commodi
                    exercitationem! Beatae, suscipit omnis. Veniam est tenetur
                    commodi ab animi neque laborum ea excepturi, magni quas
                    dolores culpa, dignissimos rem veritatis eligendi itaque
                    quam? Dolorem quidem optio praesentium rem necessitatibus
                    nemo, obcaecati deserunt itaque cum possimus voluptatibus
                    suscipit nulla, ut atque, illum adipisci repellendus? Sint,
                    illo ea aliquid saepe laboriosam deserunt necessitatibus,
                    explicabo iste aut neque recusandae excepturi nostrum velit
                    inventore repudiandae minus? Accusantium delectus qui
                    doloribus accusamus fugiat facilis, quis quisquam inventore
                    tenetur eos! Alias distinctio hic aut soluta nihil veniam,
                    velit harum repellat culpa itaque expedita voluptate
                    molestias quis tempora, provident, dignissimos omnis aperiam
                    quia laborum possimus voluptatibus similique temporibus?
                    Modi nihil beatae soluta voluptatem tenetur eaque. Fugiat,
                    illo eius incidunt unde aut ea architecto alias fugit sint
                    officiis veniam ad ducimus quasi quae animi magni soluta
                    placeat fuga illum ullam ipsa. Et, aliquam. Cum quisquam
                    perspiciatis magnam sequi libero autem ad est unde. Dolor
                    atque nostrum pariatur ut nisi cum ducimus facere placeat,
                    eius tenetur, maiores aperiam. Eum et exercitationem ut quae
                    excepturi consequuntur obcaecati molestiae libero pariatur
                    cumque voluptate natus iste nobis laboriosam, rem incidunt
                    delectus illum magni inventore expedita hic at? At ex sequi
                    aperiam neque eveniet minus obcaecati ipsum accusamus
                    sapiente iure, beatae, praesentium eligendi corrupti minima
                    repellendus totam omnis aliquam explicabo! Officiis fuga
                    voluptate corrupti sint a laboriosam, nisi quod aspernatur
                    enim neque iusto repudiandae quas voluptatem deleniti
                    dignissimos at autem tempora numquam! Consequuntur labore
                    quidem nobis omnis cumque, nemo porro, minima in quae,
                    praesentium assumenda alias perspiciatis. Facere minima
                    laborum reiciendis culpa excepturi. Odio rerum cum tempore
                    dignissimos minus non sunt aperiam fugiat quae! Est, unde
                    itaque! Facere temporibus aliquam assumenda fugit nostrum
                    quos architecto, impedit quibusdam sit repellat nobis magnam
                    minus cumque totam nam voluptas. Ab totam nesciunt similique
                    ipsa id nam qui, quia alias vitae sequi tempora unde placeat
                    veniam quasi labore eaque, laudantium soluta eos vero
                    impedit rem nisi eum provident. Officiis dolor pariatur
                    eligendi vel natus? Distinctio ipsam voluptatem fuga
                    reiciendis officia dolor odio a dignissimos numquam. Saepe
                    tenetur commodi repellat unde dolores a similique! Quo quam
                    delectus nihil vero veniam inventore, ea rerum quis tempora
                    error reiciendis nulla optio repellat et doloremque sunt,
                    aperiam, nisi repudiandae eum? Laborum, ex nostrum. Enim
                    dignissimos fugiat esse! Omnis, praesentium expedita.
                    Accusamus ea labore laudantium exercitationem optio vero
                    minus quaerat dolorum voluptates accusantium consequuntur
                    explicabo vel a saepe fugiat quis ut aliquam quod, voluptas
                    quam numquam modi iste? Minus soluta cumque, commodi eum
                    dignissimos dicta nam modi, voluptatum suscipit,
                    exercitationem quam neque aliquam rem aliquid veniam at
                    quidem nesciunt quibusdam impedit alias vitae reprehenderit
                    molestiae! Velit aperiam quaerat veritatis autem pariatur
                    distinctio ipsa delectus, quo facilis consectetur excepturi
                    dicta ipsam obcaecati earum. Nesciunt veritatis doloremque
                    nihil. Eos, reprehenderit! Blanditiis expedita consequuntur
                    pariatur eius eos provident vero sequi totam ipsa quod vel,
                    a, animi inventore ex, neque corrupti dolores quo? Enim ex
                    molestias maiores exercitationem. Officiis nostrum obcaecati
                    et! Officiis eum, sit officia tempora reprehenderit harum
                    architecto saepe dolor libero eos. Illo nisi quam commodi
                    exercitationem quisquam, maxime iusto blanditiis vero
                    ducimus soluta nesciunt at sunt eum? Mollitia vitae,
                    voluptatibus quam illum voluptate dignissimos omnis vero ad
                    perspiciatis sint amet nostrum laudantium dolore nam ipsam
                    consequuntur soluta beatae! Quae incidunt architecto magnam
                    vitae dolorum quod impedit optio excepturi fuga iure itaque
                    rerum, quis blanditiis fugiat atque magni velit deserunt,
                    consequatur quam vero modi! Laudantium tempore repudiandae
                    iure! Perspiciatis exercitationem reiciendis incidunt natus,
                    quidem quis sed a porro iste blanditiis. Neque, quae.
                    Asperiores, pariatur deserunt quidem quibusdam eveniet
                    maiores error maxime hic! A, similique laboriosam!
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div>
          <div className="container-fluid" style={nextBlogCover}>
            <div style={readNext}>
              <a
                onClick={this.nextBlog}
                style={{ color: "white", cursor: "pointer" }}
              >
                Read Next
              </a>
            </div>
            <div style={nextBlogTitle}>
              <h1 className="title" style={{ fontSize: "3rem" }}>
                {this.state.index < info.length - 1
                  ? info[this.state.index + 1].title
                  : info[0].title}
              </h1>
            </div>
            <div style={nextBlogQuotation}>
              <h2 style={{ fontSize: "1.5rem" }}>
                {this.state.index < info.length - 1
                  ? info[this.state.index + 1].qoutation
                  : info[0].qoutation}
              </h2>
            </div>
          </div>
          {/* <div
            className="container"
            style={{ marginTop: "3rem", marginBottom: "3rem" }}
          >
            <div className="row">
              <div className="col"></div>
              <div className="col-9">
                <div className="publisher-name">
                  <small className="text-muted" style={{ fontSize: "1rem" }}>
                    Published November 26, 2019 by A. Timfoney
                  </small>
                </div>
                <div
                  className="main-content-heading"
                  style={{ paddingRight: "7rem" }}
                >
                  <h1 className="title" style={{ fontSize: "3rem" }}>
                    Celebrating 10 years of DTU Times
                  </h1>
                </div>
                <div className="main-content-subheading">
                  <h2>Some catchy quotation</h2>
                </div>
                <div className="main-content-next-info">
                  <h6>Scroll down to go to the next article</h6>
                </div>
                <div className="main-content">
                  <p
                    className="h4"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      lineHeight: "2rem",
                      wordSpacing: "0.1rem",
                      fontFamily: "PT Serif, serif",
                      fontSize: "1.3rem"
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus exercitationem quos iusto odit! Cumque magni, enim
                    illo rem ullam eaque aspernatur id eos dolor ab, delectus
                    repellendus? Unde culpa molestiae tenetur nihil quidem saepe
                    sint quaerat hic harum fuga eos tempore, ab quam autem?
                    Eligendi atque nesciunt laboriosam accusamus minima porro
                    ad? Nulla harum ut adipisci id, dolor aliquid maxime optio
                    alias numquam mollitia esse voluptatum. Vero temporibus
                    ullam delectus alias incidunt beatae, culpa a quos ad.
                    Voluptatum neque ab sapiente unde, voluptas distinctio
                    praesentium alias rem omnis id facilis inventore, atque
                    soluta illum doloribus odio a cum obcaecati fugit. Autem
                    facere eaque esse aut numquam rem recusandae sed nemo sequi
                    nisi? Corporis voluptatem, alias minima incidunt libero
                    ipsum tempora nam voluptates placeat doloribus quo quod
                    debitis ipsam facilis. Est voluptas, animi, a atque quisquam
                    quasi tenetur ullam commodi, tempora provident eius dolorem
                    odio optio non quia saepe quod pariatur sapiente mollitia
                    porro enim. Nostrum dolores dignissimos ut quisquam enim
                    aperiam voluptates quae saepe earum non nulla, libero neque
                    fugit? Ducimus quis veniam provident culpa sunt
                    exercitationem aperiam doloribus? Eius laudantium aperiam
                    rerum distinctio, libero vitae ad laborum. Labore fuga
                    incidunt optio consectetur veniam quaerat a est, ipsa ad
                    dolor vel suscipit soluta dolorum temporibus obcaecati
                    nostrum repellendus natus sit libero reprehenderit quod?
                    Corrupti impedit ducimus asperiores quisquam laudantium eum
                    doloremque, sit incidunt qui magnam fugit facilis debitis
                    expedita sed quo vel eveniet amet nisi blanditiis. Culpa
                    quibusdam in nulla ex quod exercitationem laborum nihil
                    vitae quidem blanditiis consequuntur molestias eius, est
                    harum eligendi porro sequi! Laboriosam fugiat odit culpa
                    iure officia, possimus recusandae nihil quasi facere odio
                    ipsa, impedit incidunt dolores eveniet asperiores delectus
                    ipsum architecto maiores ad voluptate velit fugit distinctio
                    vero officiis. Ea blanditiis perferendis nam reiciendis
                    laborum asperiores corrupti distinctio inventore, autem esse
                    ex, minima fugit natus a veniam culpa illo! Fuga modi, odit
                    ut minus facere nihil odio et tempore nemo, dolores,
                    asperiores debitis? Ut id perspiciatis laboriosam, alias
                    nostrum corrupti atque maiores nam repellendus. Perspiciatis
                    vel commodi architecto porro non voluptas deleniti
                    perferendis error optio totam quam dicta mollitia nisi, enim
                    autem voluptatibus recusandae odit animi sequi. At nostrum
                    alias quas quo tempora illo dolorem dolor fugit iure soluta
                    nisi consequatur vel, sunt sequi asperiores perspiciatis
                    maiores vero hic veniam, nulla saepe aliquam corrupti! Quis
                    ab soluta aliquam unde! Quibusdam aspernatur ex harum
                    voluptate molestias deserunt odit unde molestiae,
                    accusantium, libero in quam atque assumenda cum incidunt
                    asperiores a. Neque itaque minima illo ea qui aliquam
                    mollitia. Veritatis sed aspernatur libero commodi
                    exercitationem! Beatae, suscipit omnis. Veniam est tenetur
                    commodi ab animi neque laborum ea excepturi, magni quas
                    dolores culpa, dignissimos rem veritatis eligendi itaque
                    quam? Dolorem quidem optio praesentium rem necessitatibus
                    nemo, obcaecati deserunt itaque cum possimus voluptatibus
                    suscipit nulla, ut atque, illum adipisci repellendus? Sint,
                    illo ea aliquid saepe laboriosam deserunt necessitatibus,
                    explicabo iste aut neque recusandae excepturi nostrum velit
                    inventore repudiandae minus? Accusantium delectus qui
                    doloribus accusamus fugiat facilis, quis quisquam inventore
                    tenetur eos! Alias distinctio hic aut soluta nihil veniam,
                    velit harum repellat culpa itaque expedita voluptate
                    molestias quis tempora, provident, dignissimos omnis aperiam
                    quia laborum possimus voluptatibus similique temporibus?
                    Modi nihil beatae soluta voluptatem tenetur eaque. Fugiat,
                    illo eius incidunt unde aut ea architecto alias fugit sint
                    officiis veniam ad ducimus quasi quae animi magni soluta
                    placeat fuga illum ullam ipsa. Et, aliquam. Cum quisquam
                    perspiciatis magnam sequi libero autem ad est unde. Dolor
                    atque nostrum pariatur ut nisi cum ducimus facere placeat,
                    eius tenetur, maiores aperiam. Eum et exercitationem ut quae
                    excepturi consequuntur obcaecati molestiae libero pariatur
                    cumque voluptate natus iste nobis laboriosam, rem incidunt
                    delectus illum magni inventore expedita hic at? At ex sequi
                    aperiam neque eveniet minus obcaecati ipsum accusamus
                    sapiente iure, beatae, praesentium eligendi corrupti minima
                    repellendus totam omnis aliquam explicabo! Officiis fuga
                    voluptate corrupti sint a laboriosam, nisi quod aspernatur
                    enim neque iusto repudiandae quas voluptatem deleniti
                    dignissimos at autem tempora numquam! Consequuntur labore
                    quidem nobis omnis cumque, nemo porro, minima in quae,
                    praesentium assumenda alias perspiciatis. Facere minima
                    laborum reiciendis culpa excepturi. Odio rerum cum tempore
                    dignissimos minus non sunt aperiam fugiat quae! Est, unde
                    itaque! Facere temporibus aliquam assumenda fugit nostrum
                    quos architecto, impedit quibusdam sit repellat nobis magnam
                    minus cumque totam nam voluptas. Ab totam nesciunt similique
                    ipsa id nam qui, quia alias vitae sequi tempora unde placeat
                    veniam quasi labore eaque, laudantium soluta eos vero
                    impedit rem nisi eum provident. Officiis dolor pariatur
                    eligendi vel natus? Distinctio ipsam voluptatem fuga
                    reiciendis officia dolor odio a dignissimos numquam. Saepe
                    tenetur commodi repellat unde dolores a similique! Quo quam
                    delectus nihil vero veniam inventore, ea rerum quis tempora
                    error reiciendis nulla optio repellat et doloremque sunt,
                    aperiam, nisi repudiandae eum? Laborum, ex nostrum. Enim
                    dignissimos fugiat esse! Omnis, praesentium expedita.
                    Accusamus ea labore laudantium exercitationem optio vero
                    minus quaerat dolorum voluptates accusantium consequuntur
                    explicabo vel a saepe fugiat quis ut aliquam quod, voluptas
                    quam numquam modi iste? Minus soluta cumque, commodi eum
                    dignissimos dicta nam modi, voluptatum suscipit,
                    exercitationem quam neque aliquam rem aliquid veniam at
                    quidem nesciunt quibusdam impedit alias vitae reprehenderit
                    molestiae! Velit aperiam quaerat veritatis autem pariatur
                    distinctio ipsa delectus, quo facilis consectetur excepturi
                    dicta ipsam obcaecati earum. Nesciunt veritatis doloremque
                    nihil. Eos, reprehenderit! Blanditiis expedita consequuntur
                    pariatur eius eos provident vero sequi totam ipsa quod vel,
                    a, animi inventore ex, neque corrupti dolores quo? Enim ex
                    molestias maiores exercitationem. Officiis nostrum obcaecati
                    et! Officiis eum, sit officia tempora reprehenderit harum
                    architecto saepe dolor libero eos. Illo nisi quam commodi
                    exercitationem quisquam, maxime iusto blanditiis vero
                    ducimus soluta nesciunt at sunt eum? Mollitia vitae,
                    voluptatibus quam illum voluptate dignissimos omnis vero ad
                    perspiciatis sint amet nostrum laudantium dolore nam ipsam
                    consequuntur soluta beatae! Quae incidunt architecto magnam
                    vitae dolorum quod impedit optio excepturi fuga iure itaque
                    rerum, quis blanditiis fugiat atque magni velit deserunt,
                    consequatur quam vero modi! Laudantium tempore repudiandae
                    iure! Perspiciatis exercitationem reiciendis incidunt natus,
                    quidem quis sed a porro iste blanditiis. Neque, quae.
                    Asperiores, pariatur deserunt quidem quibusdam eveniet
                    maiores error maxime hic! A, similique laboriosam!
                  </p>
                </div>
              </div>
              <div className="col"></div>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default BlogSingle;
