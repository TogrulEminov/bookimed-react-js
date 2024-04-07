import React from 'react';
import Icons from '../assets/Icons/icons';
const LicenceCard = ({ img, date, handleOpen,handleDelete}) => {

  return (
    <>
      <div className="col-12 lg:col-lg-4 xl:col-xl-4 2xl:col-xxl-3 md:col-md-6 sm:col-sm-6">
        <figure className="border border-solid p-3 relative border-[#ddd] rounded-xl overflow-hidden">
          <div className="relative rounded-xl overflow-hidden">
            <img
              className="w-full max-h-48 h-full rounded-xl object-cover "
              src={img}
              alt={date}
            />
            <div className="w-full h-full absolute inset-0 bg-[rgba(0,0,0,0.25)] "></div>
            <button className="absolute top-2 right-1 w-10 h-10 z-10 border-none cursor-pointer" onClick={handleOpen}>
              <Icons.ZoomIN className="fill-greenown" />
            </button>
          </div>

          <button className="flex items-center w-full mt-2 justify-center"  onClick={handleDelete}>
            <Icons.Bin className="w-5 h-5 mr-3" />
            Delete document
          </button>
        </figure>
        <article className="p-2">
          <span className="block my-3 text-center">Licence is valid till</span>
          <div className="p-2 flex items-center justify-center border border-solid border-[#ddd] font-medium text-lg">
            {date}
          </div>
        </article>
      </div>
    </>
  );
};

export default LicenceCard;
