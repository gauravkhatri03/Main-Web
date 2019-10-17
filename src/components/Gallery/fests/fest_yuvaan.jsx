import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import IndexNavbar from '../../Navbars/IndexNavbar'
import Footer from '../../Footer/Footer';
const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200",
      srcSet: [
        "https://source.unsplash.com/2ShvY8Lf6l0/500x375 500w",
        "https://source.unsplash.com/2ShvY8Lf6l0/800x600 800w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1024x768 1024w",
        "https://source.unsplash.com/2ShvY8Lf6l0/1600x1200 1600w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3,
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/1600x1600",
      srcSet: [
        "https://source.unsplash.com/Dm-qxdynoEc/500x500 500w",
        "https://source.unsplash.com/Dm-qxdynoEc/800x800 800w",
        "https://source.unsplash.com/Dm-qxdynoEc/1024x1024 1024w",
        "https://source.unsplash.com/Dm-qxdynoEc/1600x1600 1600w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/1200x1600",
      srcSet: [
        "https://source.unsplash.com/qDkso9nvCg0/375x500 375w",
        "https://source.unsplash.com/qDkso9nvCg0/600x800 600w",
        "https://source.unsplash.com/qDkso9nvCg0/768x1024 768w",
        "https://source.unsplash.com/qDkso9nvCg0/1200x1600 1200w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/1200x1600",
      srcSet: [
        "https://source.unsplash.com/iecJiKe_RNg/375x500 375w",
        "https://source.unsplash.com/iecJiKe_RNg/600x800 600w",
        "https://source.unsplash.com/iecJiKe_RNg/768x1024 768w",
        "https://source.unsplash.com/iecJiKe_RNg/1200x1600 1200w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/1200x1600",
      srcSet: [
        "https://source.unsplash.com/epcsn8Ed8kY/375x500 375w",
        "https://source.unsplash.com/epcsn8Ed8kY/600x800 600w",
        "https://source.unsplash.com/epcsn8Ed8kY/768x1024 768w",
        "https://source.unsplash.com/epcsn8Ed8kY/1200x1600 1200w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/1600x1200",
      srcSet: [
        "https://source.unsplash.com/NQSWvyVRIJk/500x375 500w",
        "https://source.unsplash.com/NQSWvyVRIJk/800x600 800w",
        "https://source.unsplash.com/NQSWvyVRIJk/1024x768 1024w",
        "https://source.unsplash.com/NQSWvyVRIJk/1600x1200 1600w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/1200x1600",
      srcSet: [
        "https://source.unsplash.com/zh7GEuORbUw/375x500 375w",
        "https://source.unsplash.com/zh7GEuORbUw/600x800 600w",
        "https://source.unsplash.com/zh7GEuORbUw/768x1024 768w",
        "https://source.unsplash.com/zh7GEuORbUw/1200x1600 1200w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/1600x1200",
      srcSet: [
        "https://source.unsplash.com/PpOHJezOalU/500x375 500w",
        "https://source.unsplash.com/PpOHJezOalU/800x600 800w",
        "https://source.unsplash.com/PpOHJezOalU/1024x768 1024w",
        "https://source.unsplash.com/PpOHJezOalU/1600x1200 1600w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/1600x1200",
      srcSet: [
        "https://source.unsplash.com/I1ASdgphUH4/500x375 500w",
        "https://source.unsplash.com/I1ASdgphUH4/800x600 800w",
        "https://source.unsplash.com/I1ASdgphUH4/1024x768 1024w",
        "https://source.unsplash.com/I1ASdgphUH4/1600x1200 1600w"
      ],
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3
    }
  ];

const YuvaanFest= () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
//   const [pics,setPics] = useState([]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  useEffect(()=>{
    document.body.classList.toggle("index-page")
  })
//   useEffect(()=>{
//       fetch('api').then(res=> res.json()).then(data=>{setPics(data.imgs)})
//   })
//   const photos = [{
//     src: pics[0]
//   }]
  return (
    <>
    <IndexNavbar g="p"/>
    <div className="container black">
      <h1 className="text-center" style={{marginTop:'100px'}}>YUVAAN 2020</h1>
      <h3 className="text-center">The Literature and Film Festival </h3>
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={500}  margin={0}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    <Footer g="default"/>
    </>
  );
}
export default YuvaanFest;