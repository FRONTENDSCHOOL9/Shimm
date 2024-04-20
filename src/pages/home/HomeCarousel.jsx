import { CaraouselTitle, 
    CarouselAuthor, 
    CarouselText, 
    CarouselWrapper, 
    CarouselImage } from '@pages/home/Home.style'

function HomeCarousel() {
    return (
        <>
            <CarouselWrapper>
                <ul className='carousel-list'>
                    <li className='carousel-item'>
                        <CarouselImage src='/src/assets//images/carousel-image01.png' alt='' />
                        <CarouselText>
                            <CaraouselTitle>“마음을 고요히 하라. <br/>그러면 모든 것이 고요해질 것이다.”</CaraouselTitle>
                            <CarouselAuthor>바하우딘 나크시반디</CarouselAuthor>
                        </CarouselText>
                    </li>
                </ul>
            </CarouselWrapper>
        </>
    )
}

export default HomeCarousel;