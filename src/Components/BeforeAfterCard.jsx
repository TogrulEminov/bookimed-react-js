import React from 'react';
import Icons from '../assets/Icons/icons';
import BeforAfterSecond from '../Modal/BeforeAfter/BeforAfterSecond';
import useToggle from '../Hooks/useToggle';

const BeforeAfterCard = ({
  image,
  deleteItemByIndex,
  handleSecondOpen,
  index,
}) => {
  const [open, handleOpen, closeModal] = useToggle();

  const openModal = () => {
    handleSecondOpen();
    handleOpen();
  };
  return (
    <>
      <div className="md:col-md-6 lg:col-lg-3">
        <figure className="w-full h-full rounded-xl overflow-hidden relative">
          <img
            src={image}
            alt="my "
            className="w-full object-cover h-[250px] lg:max-w-full"
          />
          <button
            onClick={openModal}
            className="border-none cursor-pointer absolute right-2 z-10 top-2">
            <Icons.Edit className="w-6 h-6 fill-greenown" />
          </button>
          <div className="absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        </figure>
      </div>
      <BeforAfterSecond
        modal={open}
        index={index}
        closeModal={closeModal}
        deleteItemByIndex={deleteItemByIndex}
      />
    </>
  );
};

export default BeforeAfterCard;
