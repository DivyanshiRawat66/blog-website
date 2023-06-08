import "./post.css"
import postImage from "./post-img1.jpg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={postImage} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">
                    Music
                </span>
                <span className="postCat">
                    Life
                </span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit
            </span>
            <hr />
            <span className="postDate">1 day ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis eum voluptas ea officia sequi eos corrupti dolor doloribus vitae nesciunt aspernatur quae laudantium quis numquam magnam eveniet, fugit error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum eveniet temporibus voluptate porro earum assumenda rerum tempore dolore illum molestias unde impedit ad consectetur et non quo numquam cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consectetur quis obcaecati, tempore vel omnis officia adipisci nihil maxime velit quidem delectus iusto eaque, dolores neque labore. Cum, voluptates ducimus?
        </p>
    </div>
  )
}
