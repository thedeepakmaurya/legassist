const ModalOverlay = ({ onClose, content }) => {
 

  return (
    <section
      className="absolute inset-0 z-50 flex h-screen w-full cursor-pointer items-center justify-center backdrop-blur-xs backdrop-brightness-75 backdrop-filter"
      onClick={onClose}
    >
      <div className="w-[90%] xl:w-[50%]" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </section>
  );
};

export default ModalOverlay;
