import React, {useEffect, useState} from "react";
import axiosInstance from "../../utils/axios";

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
  return (
    <div>
      <div className="container m-auto p-4">
        <h3>블로그</h3>
        <ul>
          {blogs.map((item, idx) => {
            return (
              <li key={idx}>
                {item.title} / {item.user.name} / {item.user.email}
              </li>
            );
          })}
        </ul>

        <div>pager</div>
      </div>
    </div>
  );
}

export default BlogListPage;
