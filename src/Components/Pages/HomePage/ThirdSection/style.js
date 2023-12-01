import styled from "styled-components";

const ThirdSectionWrapper = styled.div`
padding: 100px 0;
    .wrapper{
        display: flex;
        align-items: center;
        color: #000;

        .left{
            width:40%;
            img{
                width: 100%;
            }
        }

        .right{
            width: 60%;
            display: flex;
            gap: 30px;
            padding-right: 100px;

            .col1{
                width: 50%;
                h3{
                    display: flex;
                    flex-direction: column;
                    font-size: 40px;
                    span{
                        color: #555555;
                    }
                }

                p{
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 30px;
                    color: #000;
                }
            }

            .col2{
                width: 50%;

                h5{
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    color: #000;
                }

                ul{
                    list-style: none;
                    padding-left: 0;
                    li{
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;

                        img{
                            margin-right: 10px;
                        }
                    }
                }

                p{
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 30px;
                    color: #000;
                }
            }
        }
    }

    @media (max-width: 767px) {
        padding: 50px 0;
        .wrapper{
            flex-direction: column;
            gap: 0;

            .left{
                width: 100%;
                padding-right: 0;
                border-right: none;
            }

            .right{
                width: 100%;
                padding: 0 10%;

                .col1{
                    width: 100%;
                    padding-right: 0;
                    margin-bottom: 30px;
                }

                .col2{
                    width: 100%;
                    padding-right: 0;
                }
            }
        }
    }


    @media (max-width: 500px) {
        padding: 50px 0;
        .wrapper{
            flex-direction: column;
            gap: 0;

            .left{
                width: 100%;
                padding-right: 0;
                border-right: none;
            }

            .right{
                width: 100%;
                padding: 0 10%;
                flex-direction: column;

                .col1{
                    width: 100%;
                    padding-right: 0;
                    margin-bottom: 30px;
                    h3{
                        font-size: 30px;
                    }
                }

                .col2{
                    width: 100%;
                    padding-right: 0;
                    h5{
                        font-size: 18px;
                    }
                }
            }
        }
    }
`

export {ThirdSectionWrapper};