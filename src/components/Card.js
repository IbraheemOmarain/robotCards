import React from "react";

const Card = ({name,email,id}) => {
    //Kepp this in mind so we do not need props as a parameter
    //const{name,email,id}=props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
      <img src={`https://robohash.org/${id}test?200*200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
