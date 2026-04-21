// import React from "react";
// const Child = ({ name, age }) => {
//   return (
//     <div>
//       <h1>Child Component</h1>
//       <p>Name:{name}</p>
//       <p>Age:{age}</p>
//     </div>
//   );
// };
// export default Child;
// import React from "react";
// const Child = (props) => {
//   const childName = "Jacob V";
//   return (
//     <div>
//       <h1>Child component</h1>
//       <p>Name:{props.name}</p>
//       <p>Age:{props.age}</p>
//       <p>Location:{props.location}</p>
//       <p>Name from Child:{childName}</p>
//     </div>
//   );
// };
// export default Child;

import React from "react";
function Child({ sendDataToParent }) {
  const handleClick = () => {
    const data = "Hello from Child!";

    // Send data to parent
    sendDataToParent(data);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
