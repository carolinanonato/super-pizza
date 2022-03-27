import React from 'react'
import Carousel from "react-elastic-carousel";
import flavour1 from '../img/new-flavour-1.png'
import flavour2 from '../img/new-flavour-2.png'
import flavour3 from '../img/new-flavour-3.png'


export default function CarouselModule() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];
    return (
        <>
            <h1 className="new-flavours-title">Exciting New Flavors You Have To Try</h1>
            <div className="carousel">
                <Carousel breakPoints={breakPoints}>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour1} alt="" /><p className="new-flavours-subtitle" >Bacon Pepper</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour2} alt="" /><p className="new-flavours-subtitle">Napoletana</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour3} alt="" /><p className="new-flavours-subtitle">Crazy Shrooms</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour1} alt="" /><p className="new-flavours-subtitle">Bacon Pepper</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour2} alt="" /><p className="new-flavours-subtitle">Napolitana</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour3} alt="" /><p className="new-flavours-subtitle">Mushrooms</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour1} alt="" /><p className="new-flavours-subtitle">Bacon Pepper</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour2} alt="" /><p className="new-flavours-subtitle">Napolitana</p></div>
                    <div className='carousel-box'><img className="new-flavour-img" src={flavour3} alt="" /><p className="new-flavours-subtitle">Mushrooms</p></div>



                </Carousel>
            </div>
        </>
    )
}

