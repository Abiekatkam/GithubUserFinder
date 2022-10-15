import { useContext } from "react";
import { AppContext } from "../App";

import locationIcon from "../assets/locationIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import companyIcon from "../assets/companyIcon.svg";

function GitUserLinks() {
  const {
    userDetailData: {
      repos,
      followers,
      following,
      location,
      website,
      twitter,
      company,
      isLight,
    },
  } = useContext(AppContext);

  return (
    <div className="gitlinkdetails">
      <div
        className={
          !isLight ? "gitlinkdetail" : "gitlinkdetail gitlinkdetailLight"
        }
      >
        <div className="gitlinkbox">
          <p>Repos</p>
          <span>{repos}</span>
        </div>

        <div className="gitlinkbox">
          <p>Followers</p>
          <span>{followers}</span>
        </div>

        <div className="gitlinkbox">
          <p>Following</p>
          <span>{following}</span>
        </div>
      </div>

      <div className="gitlinks">
        <div className="gitlinkBoxes">
          <div className="gitlinkBox">
            <img
              className="gitlinklocation"
              src={locationIcon}
              alt="Location"
            />
            <p className={location ? "" : "gitlinknotAvailable"}>
              {location ? location : "Not Available"}
            </p>
          </div>
          <div className="gitlinkBox">
            <img className="gitlinkwebsite" src={websiteIcon} alt="Website" />
            <p className={website ? "" : "gitlinknotAvailable"}>
              <a href={website} target="_self">
                {website ? website : "Not Available"}
              </a>
            </p>
          </div>
        </div>

        <div className="gitlinkBoxes">
          <div className="gitlinkBox">
            <img className="gitlinktwitter" src={twitterIcon} alt="Twitter" />
            <p className={twitter ? "" : "gitlinknotAvailable"}>
              {twitter ? twitter : "Not Available"}
            </p>
          </div>
          <div className="gitlinkBox">
            <img className="gitlinkcompany" src={companyIcon} alt="Company" />
            <p className={company ? "" : "gitlinknotAvailable"}>
              {company ? company : "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitUserLinks;
