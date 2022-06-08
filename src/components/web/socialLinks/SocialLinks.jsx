import React from "react";
// Mis componentes
import { ReactComponent as YoutubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";
import { ReactComponent as TwitteIcon } from "../../../assets/img/svg/twitter.svg";
import "./socialLinks.scss";

//? Inicio
export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/"
        target="_blank"
        className="youtube"
        rel="noreferrer"
      >
        <YoutubeIcon />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        className="twitter"
        rel="noreferrer"
      >
        <TwitteIcon />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        className="facebook"
        rel="noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://co.linkedin.com/"
        target="_blank"
        className="linkedin"
        rel="noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
