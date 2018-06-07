import React from "react";

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className="tc grow bg-light-blue br2 pa3 ma2 dib       bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200"`} alt="Jane Doe" />
      <div>
        <h2> {name} </h2>
        <p> {email}</p>
      </div>
    </div>
  )
};

export default Card;