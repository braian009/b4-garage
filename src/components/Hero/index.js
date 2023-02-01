import * as React from 'react';
import styled from 'styled-components';
import HeroBg from '../../assets/images/pagebackground4.jpg';


const Hero = () => {
    return (
        <HeroContainer>
            <div className='hero-inner'></div>
        </HeroContainer>
    )
};

const HeroContainer = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${HeroBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`;

export default Hero;