import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

import { Image } from "react-bootstrap";

const Contributor = ({ match }) => {
   const githubContext = useContext(GithubContext);

   const { getContributor, loading, contributor } = githubContext;

   useEffect(() => {
      getContributor(match.params.login);
      // eslint-disable-next-line
   }, []);

   const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
   } = contributor;

   if (loading) return <Spinner />;

   return (
      <Fragment>
        <div className="text-left">
         <Link to="/about" className="btn btn-light border mr-2 mb-2">Back</Link>
         Hireable:{" "}
         {hireable ? (
            <i className="fas fa-check text-success" />
         ) : (
            <i className="fas fa-times-circle text-danger" />
         )}
         </div>
         <div className="row p-2 m-2 border">
            <div className="col-md offset-1 justify-content-md-center">
               <Image
                  src={avatar_url}
                  roundedCircle
                  style={{ width: "150px" }}
               />
               <h1>{name}</h1>
               <p>Location: {location}</p>
            </div>
            <div className="col-md text-left">
               {bio && (
                  <Fragment>
                     <h3>Bio</h3>
                     <p>{bio}</p>
                  </Fragment>
               )}
               <a href={html_url} className="btn btn-dark mb-2">
                  Visit Github Profile
               </a>
               <p className="text-left">
                  {login && (
                     <Fragment>
                        <strong>Username: </strong> {login}
                     </Fragment>
                  )}
               </p>
               <p className="text-left">
                  {company && (
                     <Fragment>
                        <strong>Company: </strong> {company}
                     </Fragment>
                  )}
               </p>
               <p className="text-left">
                  {blog && (
                     <Fragment>
                        <strong>Website: </strong> {blog}
                     </Fragment>
                  )}
               </p>
            </div>
            <div className="col-md-1"></div>
         </div>
         <div className="row p-2 m-2 border">
            <div className="col">
               <div className="badge badge-danger p-2 m-2 border">
                  Followers: {followers}
               </div>
               <div className="badge badge-success p-2 m-2 border">
                  Following: {following}
               </div>
               <div className="badge badge-light p-2 m-2 border">
                  Public Repos: {public_repos}
               </div>
               <div className="badge badge-dark p-2 m-2 border">
                  Public Gists: {public_gists}
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Contributor;
