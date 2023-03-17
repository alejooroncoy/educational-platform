const Modal = ({ modal, overlay, children }) => {
  return (
    <div ref={overlay} className="overlay overlay--modal">
      <article ref={modal} className="modal">
        {children}
      </article>
    </div>
  );
};

export default Modal;
