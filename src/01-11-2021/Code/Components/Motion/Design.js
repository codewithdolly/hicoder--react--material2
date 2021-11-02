import React from "react";
import { useParams } from "react-router-dom";

function Design() {
  let { topicId } = useParams();
  console.log(topicId);

  return (
    <div>
      <h1>The Topic ID is: {topicId}</h1>
    </div>
  );
}

export default Design;
