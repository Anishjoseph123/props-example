// import React from "react";
// import Child from "./Child";
// // =
// const Parent = () => {
//   const name = "David";
//   const age = 25;
//   const location = "Mangalore";

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Child name={name} age={age} location={location} />
//     </div>
//   );
// };
// export default Parent;

import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  // Function to receive data from child
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Message from Child: {message}</p>

      {/* Pass function as prop */}
      <Child sendDataToParent={handleChildData} />
    </div>
  );
}

export default Parent;
