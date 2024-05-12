import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productDetails.css";

import { FaStar } from "react-icons/fa6";
import img1 from "../../assets/milk_1.png";
import img2 from "../../assets/milk_1ss.png";
import img3 from "../../assets/milk_1sss.png";
import img4 from "../../assets/milk_2.png";
import img5 from "../../assets/milk_1-150x150.png";
import img6 from "../../assets/milk_1ss-150x150.png";
import img7 from "../../assets/milk_1sss-150x150.png";
import img8 from "../../assets/milk_2-150x150.png";
import img9 from "../../assets/product_payment_logo.svg";
import img10 from "../../assets/single-product.jpg";
import { FaFacebookSquare, FaUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaRecycleSolid } from "react-icons/lia";
import { GiFlour } from "react-icons/gi";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";
import { TiStarFullOutline } from "react-icons/ti";
import ReactStars from "react-rating-stars-component";
const ProductDetails = () => {
  const sliderRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [date, setDate] = useState(new Date());
  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} items to cart`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const scrollNext = () => {
    sliderRef.current.slickNext();
  };

  const scrollPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };



  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
 
  return (
   <div className="product-details container-section mat-50">
     <div className="main-div">
      <div className="Product-detail">
        <div className="product-left">
          <div className="Slider">
            <Slider ref={sliderRef} {...settings}>
              <div className="slid-img">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Image 1",
                      src: img4,
                      width: 600,
                      height: 400,
                    },
                    largeImage: {
                      src: img4,
                      width: 1200,
                      height: 800,
                    },
                    enlargedImageContainerClassName: "enlarged-image-container",
                    enlargedImageClassName: "enlarged-image",
                  }}
                />
              </div>
              <div className="slid-img">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Image 2",
                      src: img2,
                      width: 600,
                      height: 400,
                    },
                    largeImage: {
                      src: img2,
                      width: 1200,
                      height: 800,
                    },
                    enlargedImageContainerClassName: "enlarged-image-container",
                    enlargedImageClassName: "enlarged-image",
                  }}
                />
              </div>
              <div className="slid-img">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Image 3",
                      src: img3,
                      width: 600,
                      height: 400,
                    },
                    largeImage: {
                      src: img3,
                      width: 1200,
                      height: 800,
                    },
                    enlargedImageContainerClassName: "enlarged-image-container",
                    enlargedImageClassName: "enlarged-image",
                  }}
                />
              </div>
              <div className="slid-img">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Image 4",
                      src: img1,
                      width: 600,
                      height: 400,
                    },
                    largeImage: {
                      src: img1,
                      width: 1200,
                      height: 800,
                    },
                    enlargedImageContainerClassName: "enlarged-image-container",
                    enlargedImageClassName: "enlarged-image",
                  }}
                />
              </div>
            </Slider>
            <button className="prev-button" onClick={scrollPrev}>
              <FaChevronLeft />
            </button>
            <button className="next-button" onClick={scrollNext}>
              <FaChevronRight />
            </button>
          </div>
          <div className="thumbnails flex">
            <img
              className="mini-items"
              src={img8}
              alt="Thumbnail 1"
              onClick={() => handleThumbnailClick(0)}
            />
            <img
              className="mini-items"
              src={img6}
              alt="Thumbnail 2"
              onClick={() => handleThumbnailClick(1)}
            />
            <img
              className="mini-items"
              src={img7}
              alt="Thumbnail 3"
              onClick={() => handleThumbnailClick(2)}
            />
            <img
              className="mini-items"
              src={img5}
              alt="Thumbnail 4"
              onClick={() => handleThumbnailClick(3)}
            />
          </div>
        </div>
        {/* Product Right */}
        <div className="Product-right">
          <h3 className="heading-h3">Aptamil Gold+ ProNutra Biotik Stage 1 Infant Formula– 31.7</h3>
          <div className="reviews">
            <FaStar className="yellow" /> <FaStar className="yellow" />{" "}
            <FaStar className="yellow" /> <FaStar className="black" />{" "}
            <FaStar className="black" />
            <a>(customer reviews)</a>
            <a>Share</a>
            <FaFacebookSquare />
            <FaXTwitter />
            <FaWhatsapp />
          </div>
          <hr className="my-3"/>
          <p className="leading-6">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor.
          </p>
          <ul className="mt-2 leading-6">
            <li className="text-black text-sm leading-6">Pellentesque habitant tristique senectus</li>
            <li className="text-black text-sm leading-6">Turpis egestaVestibulum tortor quam</li>
            <li className="text-black text-sm leading-6">Eugiat vitae ultricies eget tempor</li>
          </ul>
          <h5 className="heading-h5 mt-3" >$20.00 – $47.00</h5>
          <div className="timer">
            <h3 className="flex items-center">Hurry Up Sale End in:</h3>
            <div className="box text-lg flex flex-col">{day} <span className="text-xs font-medium">Day</span></div>
            <div className="box text-lg flex flex-col">{hours} <span className="text-xs font-medium">Hour</span></div>
            <div className="box text-lg flex flex-col">{minutes} <span className="text-xs font-medium">Min</span></div>
            <div className="box text-lg flex flex-col">{seconds} <span className="text-xs font-medium">Sec</span></div>
          </div>
          <div className="weight">
            <h4>Weight:</h4>
            <p title="350ml">350ml</p>
            <p title="500gm">500gm</p>
          </div>
          <div className="btns mt-3">
            <div className="quntity">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button className="cart" onClick={handleAddToCart}>
              <PiShoppingCartDuotone />
              Add to Cart
            </button>
          </div>
          <div className="whishlist">
            <a href="">Add to Wishlist</a>
            <p>|</p>
            <a href=""> Add to Compare</a>
          </div>
          <div className="payment">
            <h3>Guaranteed Safe Checkout</h3>
            <img src={img9} alt="" />
          </div>
        </div>
        {/* <div className="product-end">
          <div className="content">
            <p>
              {" "}
              <TbTruckDelivery /> Free worldwide shipping on all orders over
              $100
            </p>
            <p>
              {" "}
              <GiFlour /> Guranteed 100% Organic from natural farmas
            </p>
            <p>
              <LiaRecycleSolid /> 1 Day Returns if you change your mind
            </p>
          </div>
        </div> */}
      </div>
      {/* discription */}
      <div className="items mat-25 ">
        <button
          className={activeTab === "description" ? "btn-dis active" : "btn-dis"}
          onClick={() => handleTabClick("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "additional" ? "btn-dis active" : "btn-dis"}
          onClick={() => handleTabClick("additional")}
        >
          Additional Information
        </button>
        <button
          className={activeTab === "reviews" ? "btn-dis active" : "btn-dis"}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </button>
      </div>
   <div className="mb-20">
   {activeTab === "description" && (
        <>
          <div className="discription">
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. ibero sit amet quam
              egestas semper. Aenean ultricies mi vitae est. Mauris placerat
              eleifend leo.ea commodo consat. Duis aute irure dolor in
              reprehenderit n volup tate velitesse cillum dolore euy elit ale
              ruin irure dolor.uis aute irure dolor in reprehenderit n volup
              tate velit esse cillum,
            </p>
          </div>
          <div className="img-dis">
            {/* <div className="left-img">
              <img className="image-left" src={img10} alt="img" />
            </div> */}
            <div className="right">
              <h2>Premium & Sugar Free Yogurt</h2>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. ibero sit
                amet quam egestas semperAenean ultricies mi vitae est Mauris
                placerat eleifend.
              </p>
              <li>Pellentesque habitant morbi tristique senectus</li>
              <li>turpis egestaVestibulum tortor quam</li>
              <li>eugiat vitae ultricies eget tempor</li>
              <li>libero amet quam egestas</li>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor.
              </p>
            </div>
          </div>
        </>
      )}
      {activeTab === "additional" && (
        <div className="additional-information">
          <h2>Weight:</h2>
          <p>375ml & 500gm</p>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="reviews-content">
          <h3>1 REVIEW FOR ANGIE’S BOOMCHICKAPOP SWEET & SALTY KETTLE CORN</h3>
          <div className="user-review flex">
<div className=""><FaUserCircle className="text-zinc-400 text-6xl"/></div>
<div className="ms-2">
  <div className="flex"><TiStarFullOutline className="text-orange-400"/> <TiStarFullOutline className="text-orange-400"/> <TiStarFullOutline className="text-orange-400"/> <TiStarFullOutline className="text-orange-400"/> <TiStarFullOutline className="text-zinc-400"/></div>
  <h4 className="text-base">admin <span className="text-xs text-slate-400">– May 1, 2021</span></h4>
  <p className="text-gray-500 text-sm">Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
</div>
          </div>
          <h4 className="text-2xl mt-5">Add a review</h4>
          <hr className="h-0"/>
          <p>
          Your email address will not be published. Required fields are marked *
          </p>
      
  <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
 
<label  className="text-sm">Your review *</label>
      <textarea cols="30" rows="10" className="focus:outline-none bg-gray-200 p-4 border-none h-56"></textarea>
      <label className="text-sm">Name *</label>
      
            <input type="text"  className="focus:outline-none bg-gray-200 p-4 border-none "/>
            <label className="text-sm">Email *</label>
            <input type="email" className="focus:outline-none bg-gray-200 p-4 border-none " />
   <label for="11" className="text-sm flex items-center">
   <input type="checkbox" id="11" className="mr-1"/>
   Save my name, email, and website in this browser for the next time I comment.
   </label>
          <button className="btn-tr">Submit</button>
        </div>
      )}
   </div>
    </div>
   </div>
  );
};

export default ProductDetails;
