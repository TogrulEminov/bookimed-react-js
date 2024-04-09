// BeforeCard.jsx
import React, { useState } from 'react';
import Icons from '../assets/Icons/icons';
import BeforeModal2 from '../Modal/BeforeModal/BeforeModal2';
import useToggle from '../Hooks/useToggle';

const BeforeCard = ({ img, deleteItemByIndex, index }) => {
  const [open, handleOpen, closeModal] = useToggle();
  const [editData, setEditData] = useState(null);

  return (
    <>
      <figure className="relative h-[200px] overflow-hidden w-full rounded-md">
        <img src={img} alt="my before" className="w-full object-cover h-full" />
        <div className="w-full h-full absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        <button onClick={() => {
          handleOpen();
          setEditData(true);
        }} className="absolute top-0 right-0">
          <Icons.Edit className="fill-greenown w-8 h-8" />
        </button>
      </figure>
      <BeforeModal2
        modal={open}
        index={index}
        editData={editData}
        closeModal={closeModal}
        deleteItemByIndex={deleteItemByIndex}
      />
    </>
  );
};

export default BeforeCard;
