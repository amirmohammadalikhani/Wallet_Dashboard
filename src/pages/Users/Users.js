import React from "react";
import "./Users.scss";
import { Link } from "react-router-dom";
// import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Users() {
  const allDataOfUsers = [
    {
      id: 1,
      name: "Reza Zare",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "active",
      transaction: "$123",
    },
    {
      id: 2,
      name: "Amin Hosseini",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "not-active",
      transaction: "$123",
    },
    {
      id: 3,
      name: "Arash Moradi",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "not-active",
      transaction: "$123",
    },
    {
      id: 4,
      name: "Mehran Kazemi",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "active",
      transaction: "$123",
    },
    {
      id: 5,
      name: "Mohammad Amini",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "active",
      transaction: "$123",
    },
    {
      id: 6,
      name: "Sasan Motiei",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "active",
      transaction: "$123",
    },
    {
      id: 7,
      name: "Zahra Aghaie",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "not-active",
      transaction: "$123",
    },
    {
      id: 8,
      name: "Qadir Yolme",
      email: "alikhaniamir83@gmail.com",
      avatar: "logo192.png",
      status: "not-active",
      transaction: "$123",
    },
  ];

  const headerOfTable = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div>
              <img src={params.row.avatar} alt="profile" />
              {params.row.name}
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to="/">
              <button>Edit</button>
            </Link>
            <DeleteIcon />
          </>
        );
      },
    },
  ];
  return (
    <main>
      {/* <DataGrid
        rows={allDataOfUsers}
        columns={headerOfTable}
        disableRowSelectionOnClick
        pageSizeOptions={2}
      /> */}
    </main>
  );
}
