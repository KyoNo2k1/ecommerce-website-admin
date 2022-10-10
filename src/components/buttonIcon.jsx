import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const colors = {
  dark: {
    default: "bg-dark_primary hover:bg-[#1e193e] text-white",
    disabled: "bg-dark_primary text-white opacity-50",
  },
  light: {
    default: "transparent text-black",
    disabled: "transparent text-black opacity-50",
  },
};

const positions = {
  bottom: "fixed right-24 bottom-8",
  custom: "",
};

const icons = {
  add: faAdd,
  back: faArrowLeft,
};

const ButtonIcon = ({
  color = "dark",
  icon = "add",
  state = "default",
  position = "custom",
  customPos = "",
  handleEvent,
}) => {
  return (
    <button
      className={`py-3 px-5 rounded ${colors[color][state]} ${positions[position]} ${customPos}`}
      onClick={() => handleEvent()}
    >
      <FontAwesomeIcon icon={icons[icon]} />
    </button>
  );
};

export default ButtonIcon;
