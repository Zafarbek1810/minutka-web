import styled from "styled-components";

const RightNavWrapper = styled.div`
  list-style: none;
  width: 30%;
  display: flex;
  flex-flow: row nowrap;
  ul {
    width: 100%;
    display: flex;
    margin-left: 30px;
    justify-content: space-between;
    align-items: center;
    li {
      .link {
        padding: 10px 10px;
        font-family: "Azo Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #000;
        flex: none;
        order: 0;
        flex-grow: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        &:hover {
          font-family: "Azo Sans";
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          color: #000;
          flex: none;
          order: 0;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 10px;
          gap: 10px;
          background: rgba(255, 230, 0, 0.6);
          border-radius: 8px;
          flex: none;
        }
      }

      .active {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 10px;
        gap: 10px;
        background: rgba(255, 230, 0, 0.6);
        border-radius: 8px;
        flex: none;
        order: 0;
        flex-grow: 0;
        font-family: "Azo Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #000;
        cursor: pointer;
      }
    }
  }

  .lang {
    .ant-select-item-option-content {
      font-family: "Azo Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #001002;
      display: flex !important;
      align-items: center !important;
    }
    .ant-select-selection-item {
      display: flex;
      align-items: center;
      font-family: "Azo Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: #001002;
    }
    .ant-select-arrow{
      display: none;
    }

    img {
      margin-right: 10px !important;
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;
    justify-content: start;

    svg {
      path {
        fill: #fff !important;
      }
      width: 16px;
      height: 16px;
      margin-left: 10px;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      li {
        color: #fff !important;
        height: 20px;
        margin-bottom: 20px;

        .link {
          color: #fff !important;
          font-size: 16px !important;
          font-weight: 600;
          padding-top: 0 !important;
        }

        .active {
          font-size: 16px !important;
          background-color: transparent;
          padding-top: 0;
        }

        .lang {
          .ant-select-selection-item {
            display: flex;
            align-items: center;
            color: #fff;
          }
        }
      }
    }

    .btn {
      width: 90%;
      margin-left: 10px;
    }
  }
`;

export { RightNavWrapper };
