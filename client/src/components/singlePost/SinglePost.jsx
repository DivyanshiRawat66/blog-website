import "./singlePost.css"
import singlePostImg from "./post-img2.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
          <img src= {singlePostImg}
           alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Divyanshi</b> </span>
              <span className="singlePostDate"> 1 hour ago </span>
          </div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio id ipsa ratione quisquam pariatur iure? Deserunt nihil quia similique quos repellat soluta saepe placeat explicabo error, maiores voluptates officia nobis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iusto aperiam ut minus minima est repudiandae eum odit quia vitae perspiciatis, voluptates, maiores quaerat neque asperiores provident. Incidunt, facilis? Magnam!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio id ipsa ratione quisquam pariatur iure? Deserunt nihil quia similique quos repellat soluta saepe placeat explicabo error, maiores voluptates officia nobis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iusto aperiam ut minus minima est repudiandae eum odit quia vitae perspiciatis, voluptates, maiores quaerat neque asperiores provident. Incidunt, facilis? Magnam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio id ipsa ratione quisquam pariatur iure? Deserunt nihil quia similique quos repellat soluta saepe placeat explicabo error, maiores voluptates officia nobis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas iusto aperiam ut minus minima est repudiandae eum odit quia vitae perspiciatis, voluptates, maiores quaerat neque asperiores provident. Incidunt, facilis? Magnam!
          </p>
        </div>
    </div>
  )
}