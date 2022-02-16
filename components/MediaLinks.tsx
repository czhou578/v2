import Script from "next/script";

const MediaLinks: React.FC = () => {
  return (
    <div className="mediaLinksContainer">
      <Script
        src="https://kit.fontawesome.com/8be8acb73b.js"
        crossOrigin="anonymous"
      />
      <a href="https://github.com/czhou578">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.quora.com/profile/Colin-Zhou-6">
        <i className="fa-brands fa-quora"></i>
      </a>
      <a href="https://dribbble.com/colinzhou">
        <i className="fa-brands fa-dribbble"></i>
      </a>
      <a href="https://www.linkedin.com/in/colin-z-84a1a0137/">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.twitter.com/ColinZhou17">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="https://www.worldcubeassociation.org/persons/2014ZHOU16">
        <i className="fa-solid fa-cube"></i>
      </a>
    </div>
  );
};

export default MediaLinks;
