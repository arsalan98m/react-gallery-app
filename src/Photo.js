import React from "react";
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  const { keyframes, timing } = zoomIn;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      duration: 1000,
    },
  });

  return (
    <article className="photo" ref={ref}>
      <img src={regular} alt={alt_description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
