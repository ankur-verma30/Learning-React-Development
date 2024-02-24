import React from "react";

// function forwardRefInput() {
//   return (
//     <div>
//       <input type="text"/>
//     </div>
//   )
// }

const forwardRefInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
export default forwardRefInput;
