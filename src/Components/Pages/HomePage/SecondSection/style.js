import styled from "styled-components";

const SecondSectionWrapper = styled.div`
    padding: 100px 0;
    background-color: #fff;

    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;

        .left{
            width: 50%;
            padding-right: 40px;
            border-right: 5px solid #FFF066;

            h3{
                font-size: 30px;
                font-weight: 600;
                margin-bottom: 50px;
                color: #000;
            }

            p{
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 30px;
                color: #000;
            }
        }

        .right{
            width: 50%;
            position: relative;

            .black{
                background-color: #353B47;
                height: 400px;
                width: 70%;
                border-radius: 30px;
            }

            img{
                width: 80%;
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
        }
    }


    @media (max-width: 767px) {
        .wrapper{
            flex-direction: column;
            gap: 0;

            .left{
                width: 100%;
                padding-right: 0;
                border-right: none;
                margin-bottom: 50px;
            }

            .right{
                width: 100%;
                position: relative;

                .black{
                    width: 70%;
                    height: 300px;
                }

                img{
                    width: 60%;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                }
            }
        }
    }
`

export {SecondSectionWrapper};