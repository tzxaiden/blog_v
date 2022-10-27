import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu"
import { Link } from "react-router-dom";

// import DOMPurify from "dompurify";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1438190/pexels-photo-1438190.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?cs=srgb&dl=pexels-ali-pazani-2777898.jpg&fm=jpg&_gl=1*ip6xoi*_ga*NjUyMzkxMDExLjE2NjY5MDU1OTE.*_ga_8JE65Q40S6*MTY2NjkwNTU5Mi4xLjEuMTY2NjkwNTYzMS4wLjAuMA.."
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p> Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}></Link>
            <img src={Edit} alt="" />
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus
          excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem
          ratione sit debitis deserunt repellendus numquam ab vel perspiciatis
          corporis!
        </p>
      </div>
      <Menu />
    </div>
  );
  {
    /* <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>{" "}
      </div>
      <Menu cat={post.cat} />
    </div>
  ); */
  }
};

export default Single;
