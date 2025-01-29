import React from "react";
import TargetBox from "./TargetBox";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/v1/characters")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    //   Characters
    //   {data.map(({ name }) => (
    //     <div>{name}</div>
    //   ))}
    <div>
      <TargetBox />
    </div>
  );
};

export default App;
