import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "author",
      headerName: "Author",
      width: 150,
    },
    {
      field: "uploader",
      headerName: "Uploader",
      width: 110,
    },
    {
      field: "edit",
      headerName: "Edit",
      type: "actions",
      width: 160,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<FontAwesomeIcon icon={faPen} />}
            label="Edit"
            onClick={() => handleEditClick(id)}
          />,
        ];
      },
    },
    {
      field: "delete",
      type: "actions",
      headerName: "Delete",
      width: 160,
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<FontAwesomeIcon icon={faTrash} />}
            label="Save"
            onClick={() => handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  const [rows, setRows] = useState([]);
  const handleEditClick = (id) => {
    console.log("Edit", id);
  };
  const handleDeleteClick = (id) => {
    console.log("delete", rows[id - 1]);
  };

  const userId = localStorage.getItem("userID");
  const navigate = useNavigate();

  const [pageSize, setPageSize] = React.useState(0);

  const fetchData = async () => {
    if (!userId) {
      navigate("/login");
    }
    await axios
      .get(`/books/admin/${userId}`)
      .then((res) => {
        console.log(res.data);
        setPageSize(res.data.count);
        // setBooks(res.data.books);
        var rw = [];
        if (res.data.books.length > 0) {
          res.data.books.map((book, i) =>
            rw.push({
              id: i + 1,
              title: book.title,
              author: book.author,
              uploader: book.user.name,
              _id: book._id,
            })
          );
          setRows(rw);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [userId]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Toaster />
      <Box sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[pageSize]}
        />
      </Box>
    </div>
  );
};

export default Dashboard;
