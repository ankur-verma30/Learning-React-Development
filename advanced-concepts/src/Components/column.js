import React from "react";

function column() {
  const items = [
    {
      id: 1,
      name: "Ankur",
    },
  ];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <React.Fragment>Title</React.Fragment>
          <React.Fragment>{item.title}</React.Fragment>
        </React.Fragment>
      ))}
      <td>Name</td>
      <td>Ankur</td>
    </React.Fragment>
  );
}

export default column;
