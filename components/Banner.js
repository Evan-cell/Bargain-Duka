import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
        >
            <div>
                <img loading='lazy' src="https://ke.jumia.is/cms/2023/W42/SIS/_SiS.jpg" alt="" />
            </div>
            <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W42/SIS/PRK_SIS.jpg" alt="" />
            </div>
            <div>
            <img loading='lazy' src="https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/SIS/Defacto_SIS.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/SIS/Ecko_SIS.jpg" alt="" />
            </div>
            <div>
                <img loading='lazy' src="https://ke.jumia.is/cms/2023/W38/CP/OkoaMwezi/SIS/Maybelline_SiS.jpg" alt="" />
            </div>

        </Carousel>
    </div>
  )
}

export default Banner