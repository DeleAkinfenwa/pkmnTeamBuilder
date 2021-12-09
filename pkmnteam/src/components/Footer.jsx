import React from "react";

export default function Footer() {
  return (
    <div className="footerstuff">
      <p className="credit">Made by Dele Akinfenwa</p>
      <div className="imgco">
        <a className="contacts" href="https://github.com/DeleAkinfenwa">
          <img
            className="icon"
            src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            alt="GitHub icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/dele-akinfenwa-9131b79b">
          <img
            className="icon"
            src={
              "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
            }
            alt="LinkedIN icon"
          />
        </a>
      </div>
    </div>
  );
}
