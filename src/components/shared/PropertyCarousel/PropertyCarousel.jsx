import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './PropertyCarousel.css'
import { useState } from 'react';



const PropertyCarousel = ({ children, fullWidth = 1160, gap = 30, slidesPerPage = 3 }) => {

    const [slideWidth, setSlideWidth] = useState(0)

    const width = parseInt((((fullWidth - gap) - ((slidesPerPage - 1) * gap)) / slidesPerPage))

    const maxSlide = (width + gap) * (children.length - slidesPerPage)

    const carouselItemsContainerStyles = { position: 'relative', left: `-${slideWidth}px`, gap: `${gap}px`, margin: `0 ${gap / 2}px` }

    const handleRightSlide = () => {

        if (maxSlide > slideWidth) {
            const newSlideWidth = slideWidth + (width + gap)
            setSlideWidth(newSlideWidth)
        }
    }

    const handleLeftSlide = () => {
        if (slideWidth > 0) {
            const newSlideWidth = slideWidth - (width + gap)
            setSlideWidth(newSlideWidth)
        }
    }

    return (
        <div className="carousel-container">
            <div className='carousel-items-container'>
                <div style={carouselItemsContainerStyles} className={`carousel-items`}>
                    {
                        children?.map((item, idx) => <div style={{ minWidth: `${width}px` }} className={`item`} key={idx}>{item}{item._id}</div>)
                    }
                </div>
            </div>
            <div className="carousel-btn-container">
                <button disabled={(slideWidth <= 0)} onClick={() => handleLeftSlide()} className='carousel-btn left-btn'><FaAngleLeft /></button>
                <button disabled={(maxSlide <= slideWidth)} onClick={() => handleRightSlide()} className='carousel-btn right-btn'><FaAngleRight /></button>
            </div>
        </div>
    );
};

export default PropertyCarousel;