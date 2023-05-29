import PropTypes from "prop-types";

import "../styles/Button.scss";

export const Button = ({ children, handleClick }) => {
  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};
