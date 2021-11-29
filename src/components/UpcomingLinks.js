import React from "react";
import UpcomingLink from "./UpcomingLink";

const UpcomingLinks = ({Links}) => {

    const LinkNodes = Links.map(Link => {
        return (
            <UpcomingLink title={Link.title} key={Link.id}>{Link.url}</UpcomingLink>
        );
    });
  
    return (
    <>
      {LinkNodes}
    </>
    )
  };

export default UpcomingLinks;