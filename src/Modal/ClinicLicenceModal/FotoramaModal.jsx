import React from 'react';
import Icons from '../../assets/Icons/icons';

const FotoramaModal = ({ modal, closeModal, gallery }) => {
  return (
    <div
      className={`fixed inset-0 z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={closeModal}></div>
      <div className="bg-white rounded-xl custom-animation inline-block h-full max-h-[500px] align-middle shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-6 py-5 w-full max-w-[600px]">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-lg lg:text-3xl text-greenown ">
            {gallery?.date}
          </h3>
          <button className="text-[gray]" onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <figure className="w-fit mx-auto h-fit rounded-xl overflow-auto">
          <img
            src={gallery?.img}
            className="w-full h-auto rounded-xl max-w-[250px] mx-auto"
            alt="my modal img"
          />
        </figure>
      </div>
    </div>
  );
};

export default FotoramaModal;
