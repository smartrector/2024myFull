import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axiosInstance from "../../utils/axios";
import styled from "styled-components";
import CommentWrite from "./BlogComp/CommentWrite";
import {useSelector} from "react-redux";
import CommentList from "./BlogComp/CommentList";

const TitleWrap = styled.h2`
  font-size: 10px;
  font-weight: bold;
  padding: 5px 16px;
  background: skyblue;
  display: inline-block;
  color: white;
  border-radius: 5px;
`;

function BlogViewPage() {
  const {blogId} = useParams();
  const [blogCon, setBlogCon] = useState(null);
  const [comment, setComment] = useState([]);

  const userData = useSelector((state) => state.user?.userData);

  console.log("ok1");

  useEffect(() => {
    async function loadBlogCon() {
      try {
        const res = await axiosInstance.get(`/blog/${blogId}`);
        setBlogCon(res.data.blog);
      } catch (error) {}
    }
    loadBlogCon();
  }, []);

  useEffect(() => {
    async function comment() {
      try {
        const res = await axiosInstance.get(`/blog/${blogId}/comment`);
        console.log(res.data.comment);
        setComment(res.data.comment);
      } catch (error) {
        console.log(error);
      }
    }
    comment();
  }, []);
  if (!blogCon) return null;
  const handleInserComment = async (commentContent) => {
    // alert(commentContent);
    const commentData = {
      content: commentContent,
      userId: userData.user.id,
    };
    console.log(commentData);

    try {
      const res = await axiosInstance.post(
        `/blog/${blogId}/comment`,
        commentData
      );
      console.log(res.data.comment);
      const newComment = res.data.comment;
      setComment([...comment, newComment]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container m-auto p-4">
      <h3>글보기</h3>
      <h4>title / {blogCon.title} </h4>
      <hr className="my-4" />
      <p>{blogCon.content}</p>

      <TitleWrap>댓글</TitleWrap>

      <h4>댓글작성</h4>
      <CommentWrite onSubmit={handleInserComment} />

      {comment.length === 0 ? (
        <p>댓글없네요!!!!!</p>
      ) : (
        comment.map((item, idx) => {
          return <CommentList comment={item} key={idx} />;
        })
      )}
    </div>
  );
}

export default BlogViewPage;
