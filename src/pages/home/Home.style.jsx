import styled from 'styled-components';
import iconOvals from '@assets/images/icon-ovals.svg'
import iconShapes from '@assets/images/icon-shapes.svg'


export const StyledMain = styled.main`
    margin-top: -100px;
`;

export const CarouselWrapper = styled.div`
    position: relative;

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
    }
`

export const CarouselText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    color: #fff;


    @media (max-width: 740px) {
        top: 60%;
    }

`

export const CarouselImage = styled.img`
    object-fit: cover;
`

export const CaraouselTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 10px;

    @media (min-width: 740px) {
        font-size: 3rem;
    }

    @media (max-width: 340px) {
        font-size: 1.2rem
    }
`

export const CarouselAuthor = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    color: #B8B8B8;

    @media (min-width: 740px) {
        font-size: 2.2rem;
    }

    @media (max-width: 340px) {
        font-size: 0.9rem
    }
`

export const SectionLink = styled.section`
    color: #333;
    padding: 30px;

    > div {
        width: 100%;
        height: 150px;
        padding: 0 15px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    > div {
        &:before {
            content: '';
            display: block;
            width: 100px;
            height: 100px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
`

export const RightBox = styled.div`
    text-align: right;
    background-image: linear-gradient(45deg, #FCEFDD, #E6F2E7);
    margin-bottom: 20px;

    &:before {
        background-image: url(${iconOvals});
    }
`

export const LeftBox = styled.div`
    text-align: left;
    background-image: linear-gradient(45deg, #E6F2E7, #FCEFDD);
    flex-direction: row-reverse;

    &:before {
        background-image: url(${iconShapes});
    }
    
    button {
        &:hover {
            background-color: #9F6510;
        }
    }
`

export const TextSection = styled.div`
    display: block;
    font-size: 1.4rem;
    line-height: 1.5em;

    > p {
        margin-bottom: 10px;
    }
`