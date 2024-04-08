import React from 'react';
import Icons from '../assets/Icons/icons';

const DoctorsCard = ({ img, year, deleteItemByIndex, name, speciality }) => {
  return (
    <div className="lg:col-lg-3 md:col-md-6">
      <div className="w-full p-2 h-full border border-solid border-[#ddd] rounded-xl overflow-hidden">
        <figure className="w-[100px] h-[100px] border border-[#ddd] mx-auto mb-3 overflow-hidden rounded-full">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </figure>
        <article className="p-2 text-center">
          <h3 className="font-semibold text-xl text-[#171717] mb-2">{name}</h3>
          <span className="font-medium text-sm text-[gray] block mb-2">
            {year} years of experience
          </span>
          <h6 className="font-semibold text-base text-[#000]">{speciality}</h6>
          <button
            onClick={deleteItemByIndex}
            className="cursor-pointer w-fit mx-auto border-none flex items-center justify-center text-[gray]">
            <Icons.Badge className="w-4 h-4 fill-[gray]" /> Delete doctor
          </button>
        </article>
      </div>
    </div>
  );
};

export default DoctorsCard;
