import styled from "styled-components";

const RegisterWrapper = styled.div`
        padding: 100px 0;

        .top{
            h1{
                font-size: 40px;
                font-weight: 700;
                margin-bottom: 20px;
                color: #000;
            }
        }

        form {
    background: #fff;
    font-family: "Azo Sans";
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .label {
      width: 30%;
      display: block;
      position: relative;
      color: #000;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      margin-bottom: 20px;
      font-family: "Azo Sans";

      span.label-text {
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 18px;
        color: #000000;
        margin-bottom: 8px;
      }

      input {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 16px;
        color: #000000;
        border-radius: 6px;
        border: 1px solid #FFF066;
        padding: 15px 15px;
        background: #fff;

        &::placeholder{
            color: rgba(0, 0, 0, 0.5);
        }

        &:focus {
            outline: 2px solid #FFF066;
            border: 1px solid #FFF066;
            }
      }

      span.err-text {
        color: red !important;
        position: absolute;
        left: 0;
        top: 70px;
      }

      .select {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 20px;
        color: #000000;
        font-family: Azo sans;

      }
    }

    .label-date{
        width: 30%;
      display: block;
      position: relative;
      color: #000;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      margin-bottom: 20px;
      font-family: "Azo Sans";

      input {
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 16px;
        color: #000000;
        border-radius: 6px;
        border: none;
        padding: 10px 10px;
        background: #fff;

        &:focus {
            outline: none;
            border: none;
            }
      }
    }

      button {
        width: 100%;
        text-align: center;
        background-color: #FFF066;
        color: #000;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        border-radius: 4px;
        border: none;
        padding: 12px 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Azo Sans";
        transition: 300ms;

        &:hover{
            background-color: #FCE300;
            color: #000;
            cursor: pointer;
        }

        &:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }
      }
  }

  @media (max-width: 767px) {
    .top{
        h1{
            font-size: 30px;
        }
    }

    form {
      .label {
        width: 100%;
        margin-bottom: 20px;

        input {
          width: 100%;
        }
      }

      .label-date{
        width: 100%;
        margin-bottom: 20px;

        input {
          width: 100%;
        }
      }
    }
  }
`

export default RegisterWrapper;