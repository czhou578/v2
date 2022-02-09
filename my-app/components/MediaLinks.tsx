import Script from "next/script"


const MediaLinks: React.FC = () => {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/8be8acb73b.js" crossOrigin="anonymous"></Script>
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-quora"></i>
      <i className="fa-brands fa-dribbble"></i>
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-solid fa-cube"></i>
    </div>
  )
}

export default MediaLinks