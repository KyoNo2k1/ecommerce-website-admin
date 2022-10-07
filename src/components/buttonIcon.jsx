import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function ButtonIcon(color, icon) {
  return (
    <button className="bg-dark_primary text-white hover:bg-[#1e193e] py-3 px-5 rounded fixed right-24 bottom-8">
      <FontAwesomeIcon icon={faAdd} />
    </button>
  );
}

export default ButtonIcon;
