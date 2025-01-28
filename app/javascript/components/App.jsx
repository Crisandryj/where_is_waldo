import React from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/v1/characters")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      Characters
      {data.map(({ name }) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

export default App;
