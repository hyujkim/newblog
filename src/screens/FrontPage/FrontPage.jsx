import React from "react";
import "./style.css";

export const FrontPage = () => {
  return (
    <div className="front-page">
      <div className="div">
        <div className="overlap-group">
          <img className="image" alt="Image" src="https://c.animaapp.com/5PKk5Md0/img/image-1@1.5x.png" />
          <div className="text-wrapper">KIM HYUNJI</div>
          <div className="text-wrapper-2">CONTACT</div>
          <div className="text-wrapper-3">CV</div>
        </div>
        <div className="text-wrapper-4">hjaileen@daum.net</div>
        <div className="overlap">
          <a
            className="text-wrapper-5"
            href="https://www.instagram.com/jhaileenk/"
            rel="noopener noreferrer"
            target="_blank"
          >
            INSTAGRAM
          </a>
          <img className="arrow" alt="Arrow" src="https://c.animaapp.com/5PKk5Md0/img/arrow-1.svg" />
          <p className="HYUNJI-KIM">
            <span className="span">HYUNJI KIM</span>
            <span className="text-wrapper-6"> 21/01/2023</span>
          </p>
        </div>
        <a
          className="text-wrapper-7"
          href="https://www.youtube.com/channel/UCidXN2bBmf1lBnoMIlaKidw"
          rel="noopener noreferrer"
          target="_blank"
        >
          YOUTUBE
        </a>
        <div className="overlap-2">
          <div className="new-page" />
          <div className="new-page" />
        </div>
        <div className="PAGE">
          <img className="img" alt="Page" src="https://c.animaapp.com/5PKk5Md0/img/page-1-9-2-1.png" />
        </div>
        <img className="project" alt="Project" src="https://c.animaapp.com/5PKk5Md0/img/project3-1@1.5x.png" />
        <img className="project-2" alt="Project" src="https://c.animaapp.com/5PKk5Md0/img/project4-1@1.5x.png" />
        <img className="project-3" alt="Project" src="https://c.animaapp.com/5PKk5Md0/img/project5-1@1.5x.png" />
        <img className="project-4" alt="Project" src="https://c.animaapp.com/5PKk5Md0/img/project7-1@1.5x.png" />
      </div>
    </div>
  );
};
