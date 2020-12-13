import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    height: 100px;
  }
  .container{
    border: 1px solid #ccc;
  }
  .locationDiv{
    display: flex;
    align-items: center;
    justify-content: center;
    Width: 82px;
    Height: 16px;
    Top: 504px;
    Left: 689px;
    Opacity: 60%;
    img{
      height: 20px;
    }
  }
`;

export default StyledProfile;
