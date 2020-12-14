import React from "react";
import StyledProfile from "./StyledProfile";
import pinIcon from "./assets/pinIcon.svg";
import Stats from "./Stats";

const Profile = ({ data }) => {
  // console.log(data);
  return (
    <StyledProfile>
      <div className="container">
        <div className="topHalf">
          <div className=".imgDiv">
            <img src={data.avatar_url} alt="user avatar img" />
          </div>
          <h3>{data.name}</h3>
          <div className="locationDiv">
            <img src={pinIcon} alt="map pin icon" />
            <p>{data.location}</p>
          </div>
        </div>
        <Stats data={data} className="test" />
        <div className="btns">
          <button>Code Together</button>
          <button>chat icon</button>
        </div>
      </div>
    </StyledProfile>
  );
};

export default Profile;
