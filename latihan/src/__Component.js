import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "First Post",
                datePost: "Published 06 Feb, 2020",
              }}
            />
          </div>

          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/300/200",
                title: "Second Post",
                datePost: "Published 08 Feb, 2020",
              }}
            />
          </div>
          <div className="col-md-4">
            <Card
              content={{
                imageUrl: "http://placekitten.com/g/300/200",
                title: "Third Post",
                datePost: "Published 09 Feb, 2020",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
