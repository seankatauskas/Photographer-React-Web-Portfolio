import React from 'react'
import  Carousel  from 'react-bootstrap/Carousel'
import './carousel.css'

const SliderCarousel = () => {
    return (
        <div className='Wrapper'>
            <Carousel fade pause interval='2500'  indicators='false' className='Carousel' >
                
            <Carousel.Item className='Carousel.Item' >
                    <img 
                        className="d-block-tall"
                        src="/images/table/Philippe-Starck.jpg"
                        
                    />
                    </Carousel.Item>


                <Carousel.Item className='Carousel.Item' >
                    <img
                        className="d-block-tall"
                        src="/images/table/Ron-Arad.jpg"
                        
                    />
                   
                </Carousel.Item>

                <Carousel.Item className='Carousel.Item' >
                    <img 
                        className="d-block"
                        src="/images/table/Lord-Bath.jpg"
                        
                    />
                
                </Carousel.Item>
                

                <Carousel.Item className='Carousel.Item' >
                    <img 
                        className="d-block-tall"
                        src="/images/table/Eileen.jpg"
                        
                    />
                
                </Carousel.Item>


                <Carousel.Item className='Carousel.Item' >
                    <img 
                        className="d-block-tall"
                        src="/images/table/Harry-&-Joan-On-Holiday.jpg"
                        
                    />
                
                </Carousel.Item>

                <Carousel.Item className='Carousel.Item' >
                    <img 
                        className="d-block"
                        src="/images/table/Marcel-Wanders.jpg"
                        
                    />
                     </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default SliderCarousel