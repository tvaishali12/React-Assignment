//-----------------------------debounce without api------------------------------
// import { useEffect, useState } from "react";

// const UEWD = () => {
//   const [search, setSearch] = useState("");

//   // useEffect(() => {
//   //   console.log("Mounting");
//   // }, []);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       console.log("Updating : ", search);
//     }, 3000);
//     return () => clearTimeout(timeout);
//   }, [search]);

//   return (
//     <>
//       <input value={search} onChange={(e) => setSearch(e.target.value)} />
//       <p>Search Key: {search}</p>
//     </>
//   );
// };

// export default UEWD;
//-----------------------debouncing with api-----------------------------------
import { useEffect, useState } from "react";

const movieItem = {
  padding: 12,
  margin: 12,
  border: "1px solid silver",
  backgroundColor: "#325795",
  color: "#fff",
};

const ReactDebounceUWD = () => {
  const [search, setsearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      console.log({ search });
      if (search) {
        fetch(`https://dummyjson.com/products/search?q=${search}`)
          .then((data) => data.json())
          .then((data) => setMovies(data.products));
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [search]);
  return (
    <>
      <input
        type="text"
        placeholder=" Search Input !!"
        onChange={(e) => setsearch(e.target.value)}
      />

      <div>
        <h1>My Movies</h1>
        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id} style={movieItem}>
                <p>{item.title}</p>
                {/* <p>{item.description}</p> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default ReactDebounceUWD;
