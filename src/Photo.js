import React from "react";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";

const Photo = ({
  index,
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  // Animation
  const { ref: rightAnimation } = useWebAnimations({
    ...bounceInRight,
    timing: {
      duration: 4000,
    },
  });

  const { ref: leftAnimation } = useWebAnimations({
    ...bounceInLeft,
    timing: {
      duration: 4000,
    },
  });

  // Animation Login Right and Left
  let animation;

  if (index % 2 === 0) {
    animation = leftAnimation;
  } else {
    animation = rightAnimation;
  }
  return (
    <article className="photo" ref={animation}>
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
