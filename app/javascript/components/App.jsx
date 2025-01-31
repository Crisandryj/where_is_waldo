import React from "react";
import TargetBox from "./TargetBox";
import backgroundImage from "../../assets/images/wheres_waldo_img.jpeg";

const App = () => {
  const [data, setData] = React.useState([]);
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover", // Adjust background size as needed
    backgroundPosition: "center", // Adjust background position as needed
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    // Add more styles as needed
  };
  React.useEffect(() => {
    fetch("/api/v1/characters")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div style={styles}>
      <TargetBox />
    </div>
  );
};

export default App;
