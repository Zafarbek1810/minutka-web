import styled from "styled-components";

const BannerWrapper = styled.div`
    background: url('/images/banner.jpg') no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;


    .wrapper{
        height: 100vh;
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: center;

        .left{
            width: 50%;
            height: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

        }
        .right{
            width: 50%;
            height: 100%;

            img{
                width: 100%;
                height: 100%;
                user-select: none;
                object-fit: contain;
            }
        }
    }



    @media (max-width: 767px) {
        .right{
            display: none;
        }

        .left{
            width: 100% !important;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

        }
    }

`

export {BannerWrapper};