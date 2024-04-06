import { useState } from "react";

const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setOpen(false);
    document.body.classList.remove('overflow-hidden');
  };
  return [open, handleOpen, closeModal];
};

export default useToggle;
