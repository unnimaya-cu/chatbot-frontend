// try {
// const response = await fetch("http://localhost:3000/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           email: email,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create user");
//       }

//       const data = await response.json();

//       console.log("Created user:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }

  
//      useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // setLoading(true);

//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }

//         const data = await response.json();

//         setUsers(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);