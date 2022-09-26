import React from "react";
import "./brand.css";
import { google, shopify, slack, atlassian, dropbox } from "./import";

function Brand() {
  return (
    <div className="gpt3__brand section-padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
}

export default Brand;
