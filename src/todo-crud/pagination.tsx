import { useEffect, useState } from "react";

export default function Pagination() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=8`)
.then((res)=> res.json())
.then(setUsers)
},[])
console.log("usersss",users);

  return (

    <>
      <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <button onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
    </>
  );
}
