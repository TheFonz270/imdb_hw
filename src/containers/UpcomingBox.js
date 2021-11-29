import React, {useState} from "react";
import UpcomingLinks from "../components/UpcomingLinks";

const UpcomingBox = () => {

    const [Links, setLinks] = useState(
        [
          {
            id: 1,
            title: "Silent Voice",
            url: "https://www.imdb.com/title/tt5323662/?ref_=fn_al_tt_1"
          },
          {
            id: 2,
            title: "Your Name",
            url: "https://www.imdb.com/title/tt5311514/?ref_=tt_sims_tt_i_1"
          },
          {
            id: 3,
            title: "Belle",
            url: "https://www.imdb.com/title/tt13651628/?ref_=nv_sr_srsg_3"
          },
          {
            id: 4,
            title: "Wolf Children",
            url: "https://www.imdb.com/title/tt2140203/?ref_=fn_al_tt_1"
          },
          {
            id: 5,
            title: "Weathering With You",
            url: "https://www.imdb.com/title/tt9426210/?ref_=fn_al_tt_1"
          }
        ]
      )

  return (
    <div id='UpcomingBox'>
      <h3>My Top Anime Films</h3>
      <ul>
      <UpcomingLinks Links={Links}/>
      </ul>
      <a id='ViewMore' href="https://www.imdb.com/calendar/?region=gb" target='_blank'>View more upcoming releases >></a>
    </div>
  );

}

export default UpcomingBox;