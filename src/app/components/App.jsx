import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "./action";
import { motion } from "framer-motion";
function App() {
  const dispatch = useDispatch();
  const { data, error, status } = useSelector((state) => state.post);

  const [info, setInfo] = useState([]);

  const [search, setSearch] = useState("");

  const handleClick = () => {
    console.log(info);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);

    const filtered = data?.description?.filter((item) =>
      item?.toLowerCase().includes(search.toLowerCase())
    );

    setInfo(filtered);
  };

  const numRows = data?.length;
  const numCols = 7;
  const rowsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(numRows / rowsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  // Handle pagination button clicks
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setInfo(data);
  });

  useEffect(() => {
    dispatch(getInfo());
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Search Sports Data</h1>

      <div className="inputContainer">
        <input
          onChange={handleChange}
          placeholder="Search by Country"
          className="search"
        ></input>
      </div>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Active</th>
              <th>Description</th>
              <th>Group</th>
              <th>Has OutRights</th>
              <th>Key</th>
              <th>Title</th>
            </tr>
          </thead>

          <tbody>
            {info?.map((item, index) => (
              <tr key={index}>
                <motion.td
                  initial={{ opacity: 0, x: -56, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 56, scale: 0 }}
                >
                  {index + 1}
                </motion.td>
                <motion.td
                  initial={{ opacity: 1, y: -45, scale: 1 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 45, scale: 0 }}
                >
                  {item.active.toString()}
                </motion.td>
                <motion.td
                  initial={{ opacity: 1, x: -2, scale: 1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 1, x: 5, scale: 1 }}
                >
                  {item.description}
                </motion.td>
                <motion.td
                  initial={{ opacity: 1, x: -2, scale: 1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 1, x: 5, scale: 1 }}
                >
                  {item.group}
                </motion.td>
                <motion.td
                  initial={{ opacity: 0, x: -59, scale: 0 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 1, x: 9, scale: 1 }}
                >
                  {item.has_outrights.toString()}
                </motion.td>
                <motion.td
                  initial={{ opacity: 1, y: -24, scale: 1 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 14, scale: 0 }}
                >
                  {item.key}
                </motion.td>
                <td>{item.title}</td>
              </tr>
            ))}
            <tr>
              <td>{info?.active}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
