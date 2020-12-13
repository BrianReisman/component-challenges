import React from "react";
import Stat from "./Stat";

const Stats = (props) => {
  //the following two arrays need to have the title and props data you want paired together to occupy the same index
  const statsTitle = ['Friends', 'Repos', 'Bugs'];
  const statsArr = [props.data.followers, props.data.public_repos, props.data.name];

  //going through each of the statsArr, pass props to each individual stat (singular) along with the appriopriate title.
  const statsToRender = statsArr.map((stat, i) => {
    return <Stat title={statsTitle[i]} data={stat}/>
  })

  return (
    <>
      {statsToRender}
    </>
  );
};

export default Stats;
