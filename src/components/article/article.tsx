/* eslint-disable max-lines-per-function */
/* eslint-disable react/jsx-max-depth */
import clsx from "clsx";
import { type HTMLAttributes, useState } from "react";

import IconFacebook from "../../assets/images/icon-facebook.svg";
import IconPinterest from "../../assets/images/icon-pinterest.svg";
import IconTwitter from "../../assets/images/icon-twitter.svg";
import styles from "./article.module.scss";

export type ArticleProps = HTMLAttributes<HTMLElement> & {
  avatarAlt: string;
  avatarInfo: {
    birthday: {
      day: number;
      month: string;
      year: number;
    };
    name: string;
  };
  avatarSrc: string;
  backgroundImageAlt: string;
  backgroundImageSrc: string;
  heading: string;
  subheading: string;
};
export default function Article({
  avatarAlt,
  avatarInfo,
  avatarSrc,
  backgroundImageAlt,
  backgroundImageSrc,
  className,
  heading,
  subheading,
}: ArticleProps) {
  const [modal, setModal] = useState(false);

  return (
    <section
      aria-label="article"
      className={clsx(styles.root, className)}
      role="article">
      <img
        alt={backgroundImageAlt}
        className={clsx(styles["article-image"])}
        src={backgroundImageSrc}
      />

      <h1 className={clsx(styles["article-heading"])}>{heading}</h1>

      <h2 className={clsx(styles["article-subheading"])}>{subheading}</h2>

      <div className={clsx(styles["article-footer"])}>
        <div className={clsx(styles["article-avatar-info"])}>
          <img
            alt={avatarAlt}
            className={clsx(styles["article-avatar-info-thumbnail"])}
            src={avatarSrc}
          />

          <div className={clsx(styles["article-avatar-info-container"])}>
            <span className={clsx(styles["article-avatar-info-name"])}>
              {avatarInfo.name}
            </span>
            <span className={clsx(styles["article-avatar-info-birthday"])}>
              {avatarInfo.birthday.day}&nbsp;
              {avatarInfo.birthday.month}&nbsp;
              {avatarInfo.birthday.year}
            </span>
          </div>
        </div>

        <div
          className={clsx(styles["article-share-wrapper"])}
          onClick={() => {
            setModal((prevState) => !prevState);
          }}>
          <svg
            className={clsx(styles["article-share"])}
            height="13"
            width="15"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              fill="#6E8098"
            />
          </svg>
        </div>

        {modal ? (
          <div className={clsx(styles["article-footer-modal"])}>
            <div className={clsx(styles["article-footer-modal-links"])}>
              <h1 className={clsx(styles["modal-text"])}>share</h1>
              <img alt="facebook" src={IconFacebook} />
              <img alt="twitter" src={IconTwitter} />
              <img alt="pinterest" src={IconPinterest} />
            </div>
            <div
              className={clsx(styles["article-share-wrapper"])}
              onClick={() => {
                setModal((prevState) => !prevState);
              }}>
              <svg
                className={clsx(styles["article-share"])}
                height="13"
                width="15"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  fill="#ffffff"
                />
              </svg>
            </div>
            <div className={clsx(styles["modal-down-arrow"])}></div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
