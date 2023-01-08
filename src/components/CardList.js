import React from "react";

import Card from "../components/Card";

const CardList = ({ robots }) => {
  const cardComponents = robots.map((user,i) => {
    return (
      <Card 
      key={robots.id}
       id={robots[i].id} 
       name={robots[i].name}
        email={robots[i].email}
         />
    );
  });
  return (
    <div>
      {cardComponents};
    </div>
  );
};

export default CardList;
