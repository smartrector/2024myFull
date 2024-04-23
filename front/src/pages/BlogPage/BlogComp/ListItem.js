import React from "react";

function ListItem({item, idx, no}) {
  return (
    <li key={idx}>
      {no}. {item.title} / {item.user.name} / {item.user.email}
    </li>
  );
}

export default ListItem;
