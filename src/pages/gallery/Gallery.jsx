import React, { useState } from 'react'
import "./gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../../components/Header";
import grouphoto from "../../images/groupphoto.jpg"
// function to get all gallery images
const galleryLength = 9;
const image = []
for (let i = 1; i <= galleryLength; i++) {
  image.push(require(`../../images/gallery${i}.jpg`))
}

const Gallery = () => {

  // function to view image at large when clicked
  const [data, setdata] = useState({ img: '', i: 0 });
  function viewImage(img, i) {
    setdata({ img, i });
  }

  const imgAction = function (event) {
    let i = data.i;
    if (event === "next-img") {
      setdata({ img: image[i + 1], i: i + 1 });
    }
    if (event === "previous-img") {
      setdata({ img: image[i - 1], i: i - 1 });
    }
    if (!event) {
      setdata({ img: "", i: 0 });
    }
  }

  return (
    <>
      {
        data.img &&
        <div  className='gallery_div'>
          <button onClick={function () { imgAction() }} className='close__btn btn btn-info'>X</button>
          {/*popup image showing on click of the image above other images */}
          <div className='prev_btn'><button onClick={function () { imgAction("previous-img") }} className='btn btn-dark '>Prev</button></div>
          <img src={data.img} alt='pop up Images' className='pop_img'></img>
        <div className='next_btn'><button onClick={function () { imgAction("next-img") }} className='btn btn-dark '>Next</button> </div>  
        </div>
      }
      <Header title="Our Gallery" image={grouphoto}>
        Consectetur lorem donec massa sapien. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Viverra tellus in hac habitasse platea. Tortor pretium viverra suspendisse potenti
        nullam ac tortor vitae. Tellus rutrum tellus
      </Header>
      <div style={{ padding: "10px" }}>
        {/* making the image gallery responsive to screens */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {
              image.map((image, i) => (
                <img key={i} src={image} className='image_itm' alt="gallery Images" onClick={function () { viewImage(image, i) }}></img>
              ))
            }
          </Masonry>
        </ResponsiveMasonry>
      </div>

    </>
  )
};

export default Gallery