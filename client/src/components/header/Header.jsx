import "./header.css"
import headerImage from "./headerImage.jpg"

export default function  header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">MERN Development</span>
            <span className="headerTitleLg">Blog Website</span>
        </div>
        <img className="headerImg" src={headerImage} alt="" />
    </div>
  )
}
