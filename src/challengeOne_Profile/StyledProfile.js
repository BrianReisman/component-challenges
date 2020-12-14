import styled from "styled-components";

const StyledProfile = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 100px;
  height: 364px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 22px;
    margin: 0;
    padding: 0;
    width: 336px;
    height: 26px;
    text-align: center;
    line-height: 25.78px; /*x*/
    border: 1px dotted tomato;
  }
  img {
    border-radius: 50%;
    height: 100px; /*x*/
    padding-top: 24px;
  }
  .container {
    border: 1px solid #ccc;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .topHalf {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .topHalf.imgDiv {
    display: flex;
  }

  .locationDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px; /*x*/
    height: 16px; /*x*/
    opacity: 60%;
    font-size: 14px; /*x*/
    color: rgba(34, 34, 34, 1); /*x*/
    line-height: 16.41px;
    img {
      height: 12px;
      margin-right: 2%;
      border: 1px solid blue;
    }
  }
`;

export default StyledProfile;
