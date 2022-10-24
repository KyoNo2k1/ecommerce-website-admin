import React, { useEffect, useState } from "react";
import Progressbar from "react-js-progressbar";
import { useSelector } from "react-redux";

const ProgressBarComponent = () => {
  const { arrComments } = useSelector((store) => store.products);

  const [percentage, setPercentage] = useState(0);
  const change_progressbar_input = () => {
    setPercentage(percentage + 10);
  };
  const intervalId = setInterval(change_progressbar_input, 2000);
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [arrComments]);

  return (
    <div className="mt-24 w-full flex justify-center">
      <Progressbar
        input={percentage}
        pathWidth={10}
        size={100}
        pathColor={[
          "#56ab2f",
          "#a8e063",
          "#bde0fe",
          "#a2d2ff",
          "#cdb4db",
          "#ffc8dd",
          "#ffafcc",
          "#00b4d8",
          "#3a86ff",
          "#0077b6",
        ]}
        trailWidth={20}
        trailColor="#4e4d93"
        textStyle={{ fill: "red" }}
      ></Progressbar>
    </div>
  );
};

export default ProgressBarComponent;
