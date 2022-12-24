import { useEffect, useState } from "react";

const OnEnterAddList = () => {
  const [message, setMessage] = useState("");
  const [list, setlist] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setlist((lastState) => [...lastState, message]);
      setMessage("");
      if (localStorage.getItem("listData")) {
        localStorage.setItem(
          "listData",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("listData")),
            message,
          ])
        );
      } else {
        localStorage.setItem("listData", JSON.stringify([message]));
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("listData")) {
      JSON.parse(localStorage.getItem("listData")).map((item) => {
        return setlist((pre) => [...pre, item]);
      });
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter  Data Here !!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      {list.map((item) => {
        return (
          <p>
            <li>{item}</li>
          </p>
        );
      })}
    </div>
  );
};
export default OnEnterAddList;
