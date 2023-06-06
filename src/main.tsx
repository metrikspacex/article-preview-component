import "./styles/globals.scss";

import React from "react";
import ReactDOM from "react-dom/client";

import Avatar from "./assets/images/avatar-michelle.jpg";
import BackgroundImage from "./assets/images/drawers.jpg";
import Article from "./components/article/article";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Article
      avatarAlt="michelle"
      avatarInfo={{
        birthday: {
          day: 28,
          month: "Jun",
          year: 2020,
        },
        name: "Michelle Appleton",
      }}
      avatarSrc={Avatar}
      backgroundImageAlt="drawers"
      backgroundImageSrc={BackgroundImage}
      heading="Shift the overall look and feel by adding these wonderful touches to furniture in your home"
      subheading="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
    />
  </React.StrictMode>
);
