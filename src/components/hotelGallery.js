import React from 'react';
import ImageGallery from 'react-image-gallery';


const img1 =  require('../images/hotelJS_1.jpeg');
const img1Thumbnail= require('../images/hotelJS_1_Thumbnail.jpg');
const img2 =  require('../images/hotelJS_2.jpg');
const img2Thumbnail= require('../images/hotelJS_2_Thumbnail.jpg');
const img3 =  require('../images/hotelJS_3.jpg');
const img3Thumbnail= require('../images/hotelJS_3_Thumbnail.jpg');

class HotelGallery extends React.Component {

    render() {

        const images = [
            {
                original: img1,
                thumbnail: img1Thumbnail,
            },
            {
                original: img2,
                thumbnail: img2Thumbnail,
            },
            {
                original: img3,
                thumbnail: img3Thumbnail,
            }
        ]

        return (
            <ImageGallery items={images} />
        );
    }

}

export {HotelGallery}