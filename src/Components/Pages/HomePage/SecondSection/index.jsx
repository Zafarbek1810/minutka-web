import React from 'react';
import { SecondSectionWrapper } from './style';
import Container from '../../../Common/Container';

const Second = () => {
    return (
        <SecondSectionWrapper>
            <Container>
             <div className="wrapper">
                <div className="left">
                    <h3>About Taxi Company</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamm</p>

                </div>
                <div className="right">
                    <div className="black"></div>
                    <img src="/images/taxi.png" alt="" />
                </div>
             </div>
            </Container>
        </SecondSectionWrapper>
    );
};

export default Second;