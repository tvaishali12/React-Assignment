import { useState } from "react";

const CallApi = () => {
  const [search, setSearch] = useState("");
  const [apidata, setapidata] = useState([]);

  const setbothstate = (value) => {
    setSearch(value);

    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then((data) => data.json())
      .then((data) => setapidata(data.products));
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setbothstate(e.target.value)}
      />

      {apidata.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </>
  );
};
export default CallApi;
