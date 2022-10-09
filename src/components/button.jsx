import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

/*
attribute: 
  Size: medium | small
  Color: white | secondary | opaque | primary | ghost
  State: default | disabled
  IconRight: true | false
  IconRightClick: function
*/

const sizes = {
  medium: "py-4 px-8",
  small: "py-3 px-6",
};

const colors = {
  white: {
    default:
      "text-dark_primary bg-white hover:bg-light_grey focus:bg-white focus:border-2 focus:border-solid focus:border-primary",
    disabled: "text-dark_primary bg-white opacity-50",
  },
  ghost: {
    default:
      "bg-transparent text-dark_primary hover:bg-border_grey focus:bg-transparent focus:border-2 focus:border-solid focus:border-primary",
    disabled: "bg-transparent text-dark_primary opacity-50",
  },
  secondary: {
    default:
      "bg-light_grey text-dark_primary hover:bg-border_grey focus:bg-light_grey focus:border-2 focus:border-solid focus:border-primary",
    disabled: "bg-light_grey text-dark_primary opacity-50",
  },
  primary: {
    default:
      "bg-dark_primary text-white hover:bg-[#1e193e] focus:bg-dark_primary focus:border focus:border-solid focus:border-primary",
    disabled: "bg-dark_primary text-white opacity-50",
  },
  opaque: {
    default:
      "bg-[rgba(249,249,249,0.15)] hover:bg-[rgba(249,249,249,0.3)] focus:border-2 focus:border-solid focus:border-primary text-white",
    disabled: "bg-[rgba(249,249,249,0.15)] text-white opacity-50",
  },
};

function Button({
  Color = "white",
  Size = "medium",
  State = "default",
  IconRight = false,
  IconRightClick = () => {},
  children = "Button",
  textColor = "",
  width = "",
}) {
  return (
    <button
      className={`border-primary border-[1px] text-body-md min-w-fit min-h-fit flex-1 flex items-center justify-center gap-4 relative ease-out duration-300 ${colors[Color][State]} ${sizes[Size]} ${textColor} ${width}`}
    >
      {children}
      {IconRight && (
        <FontAwesomeIcon icon={faCaretDown} onClick={IconRightClick} />
      )}
    </button>
  );
}

export default Button;
