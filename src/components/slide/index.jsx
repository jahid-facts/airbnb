import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './style.css'

const SlideImage = (props) => {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        arrows: false,
        onChange: (oldIndex, newIndex) => {
          //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
      }

    // const images = [
    //     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    //     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    //     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // ];
    const { image1, image2, image3 } = props;
    return ( 
        <Slide {...properties}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${image1})` }}>
                    {/* <span>Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${image2})` }}>
                    {/* <span>Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${image3})` }}>
                    {/* <span>Slide 3</span> */}
                </div>
            </div>
        </Slide>
    ); 
};

export default SlideImage;