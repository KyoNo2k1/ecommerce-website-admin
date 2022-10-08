import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="min-w-fit min-h-fit p-2 flex justify-center items-center gap-5 rounded-xl bg-light_grey border-border_grey shadow-sm shadow-gray-600/50">
      <div className="w-6 h-6 flex justify-center items-center hover:bg-border_dark rounded-full cursor-pointer">
        <FontAwesomeIcon
          icon={faMinus}
          className="m-auto"
          onClick={decreaseCount}
        />
      </div>
      <div className="">{count}</div>
      <div className="w-6 h-6 flex justify-center items-center hover:bg-border_dark rounded-full cursor-pointer">
        <FontAwesomeIcon
          icon={faPlus}
          className="m-auto"
          onClick={increaseCount}
        />
      </div>
    </div>
  );
}

export default Counter;
