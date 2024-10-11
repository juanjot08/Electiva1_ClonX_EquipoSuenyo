import "../styles/Components/Modal.css";
import PropTypes from "prop-types";

export const Modal = ({
  shouldShow,
  onRequestClose,
  hasIcon = true,
  children,
}) => {
  return shouldShow ? (
    <div className="overlay">
      <div className="primary-modal">
        <div className="controls">
          <div className="close-button" onClick={onRequestClose}>
            <img src="/icons/icon-close.svg" alt="" />
          </div>
          {hasIcon && (
            <img
              className="modal-icon"
              src="/images/icon-default-maskable-large.35928fda.png"
              alt=""
            />
          )}
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  shouldShow: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.element,
  hasIcon: PropTypes.bool
};
