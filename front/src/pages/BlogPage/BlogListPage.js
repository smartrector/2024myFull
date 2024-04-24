import React, {useEffect, useState} from "react";
import axiosInstance from "../../utils/axios";
import ListItem from "./BlogComp/ListItem";
import styled from "styled-components";

const PageNumber = styled.span`
  display: inline-block;
  padding: 10px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "blue" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const res = await axiosInstance.get("/blog", {params: {page: page}});
        console.log(res.data);
        setBlogs(res.data.blogs);
        setTotalCnt(res.data.totalCnt);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(page);
  }, [page]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber); // 페이지 번호 클릭 시 해당 페이지로 setPage
  };
  return (
    <div>
      <div className="container m-auto p-4">
        <h3>블로그</h3>
        <ul>
          {blogs.map((item, idx) => {
            return (
              <ListItem
                item={item}
                idx={idx}
                no={totalCnt - (page * 5 + idx)}
              />
            );
          })}
        </ul>

        <div>
          {Array.from({length: Math.ceil(totalCnt / 5)}, (_, index) => (
            <PageNumber
              className="mb-4"
              key={index}
              active={index === page}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </PageNumber>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogListPage;
