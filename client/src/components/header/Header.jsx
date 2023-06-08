import "./header.css"
import headerImage from "./headerImage.jpg"

export default function  () {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={headerImage} alt="" />
    </div>
  )
}
