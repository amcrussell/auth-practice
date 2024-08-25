import React, { useState, useEffect } from "react";

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((e) => console.log("[fetch erorr]", e));
  }, []);

  return (
    <div className="">
      <div className="">Hello {data}</div>
    </div>
  );
};

export default App;
