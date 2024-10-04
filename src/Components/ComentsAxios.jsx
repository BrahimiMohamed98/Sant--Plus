import React from "react";
import Card from "react-bootstrap/Card";
export default function ComentsAxios(props) {
  return (
    <div>
       <Card style={{ width: "18rem" }}>
       <h2 style={{ color: 'red'}}>Comment {props.data.id}</h2>
        <h3 style={{ fontStyle: 'bold'}}>{props.data.name}</h3>
        <p>{props.data.body}</p>
      </Card>

    </div>
  );
}
