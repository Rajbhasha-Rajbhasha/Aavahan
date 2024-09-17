import React from "react";
import styles from "./Team.module.css";
import HeadCard from "./HeadCard";
import { coordinatorsList } from "./heads_data";
// import { techList } from "./tech_data";
import Card3 from "./components/Card3";
import { coresList } from "./cores_data";
import OCCard from "./OCCard";
import Title from "./Title";
import Domain from "./Domain";
import Cores from "./Cores";
// import teampic from "../assets/images/teampic.webp"

// import style from "styled-jsx/style";

const WebTeam = () => {
  return (
    <div className={styles.container} style={{background:"#fef9e7" , maxWidth:"100vw" ,overflowX:"hidden",}}>
      <Title color={"DEVELOPERS"} noncolor={"TEAM"} />
      <div data-aos="fade-up" className="container">
        <div class="bg-black">

        </div>
      </div>
      <Title color={"HEADS OF"} noncolor={" TECH TEAM"} />
      <div className={styles.OverallHeadSection}>
        {coordinatorsList.map((heads) => {
          if (heads.id == "4" || heads.id == "15") {
            return (
              <OCCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>
      
      <Title color={"CORE"} noncolor={"COORDINATORS"} />
      <div className={styles.HeadSection }>
        {coordinatorsList.map((heads) => {
          if (   heads.id > 19 && heads.id < 23 ) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
                
              />
            );
          }
          return null;
        })}
      </div>

      <Title color={"TECHNICAL"} noncolor={"EXECUTIVES"} />
      <div className={styles.HeadSection}>
        {coordinatorsList.map((heads) => {
          if (   heads.id > 22 && heads.id < 26 ) {
            return (
              <HeadCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
              />
            );
          }
          return null;
        })}
      </div>

      <Title color={"SUPER"} noncolor={"SENIORS"} />
      <div className={styles.OverallHeadSection} style={{marginBottom: "4rem"}}>
        {coordinatorsList.map((heads) => {
          if (heads.id == "26" || heads.id == "27") {
            return (
              <OCCard
                key={heads.id}
                img={heads.imgUrl}
                name={heads.name}
                domain={heads.domain}
                linkedinId={heads.linkedinUrl}
                InstaId={heads.instaUrl}
                
              />
            );
          }
          return null;
        })}
      </div>

      </div>
  );
};

export default WebTeam;