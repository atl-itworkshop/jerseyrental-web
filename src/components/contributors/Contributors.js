import React, { useContext, useEffect } from "react";
import ContributorItem from "./ContributorItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Contributors = () => {
   const githubContext = useContext(GithubContext);

   const { loading, contributors, getContributors } = githubContext;

   useEffect(() => {
      getContributors();
      // eslint-disable-next-line
   }, []);


   if (loading) return <Spinner />;

   if (loading) {
    return <Spinner />;
 } else {
    return (
       <div style={userStyle}>
          {contributors.map(contributor => (
             <ContributorItem
                key={contributor.id}
                contributor={contributor}
             />
          ))}
       </div>
    );
 }
   
};

const userStyle = {
   display: "grid",
   gridTemplateColumns: "repeat(3, 1fr)",
   gridGap: "1rem"
};

export default Contributors;
