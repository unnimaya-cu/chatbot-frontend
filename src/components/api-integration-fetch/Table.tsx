import React, { useEffect, useState } from "react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

// const users: User[] = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@gmail.com",
//     age: 12,
//   },
//   {
//     id: 2,
//     name: "David",
//     email: "david@gmail.com",
//     age: 20,
//   },
//   {
//     id: 3,
//     name: "Sarah",
//     email: "sarah@gmail.com",
//     age: 18,
//   },
// ];

const UserTable: React.FC = () => {
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
console.log("users of table",users);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {/* {users.map((user) => ( */}

          <tr
          // key={user.id}
          >
            <td>{"user.id"}</td>
            <td>{"user.name"}</td>
            <td>{"user.email"}</td>
            <td>{"user.age"}</td>
          </tr>
          {/* //   ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
