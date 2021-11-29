import React from "react";

const UpcomingLink = ({title, children}) => {

  return(
    <li>
      <a href={children} target='_blank'>{title}</a>
    </li>
  )

}

export default UpcomingLink;