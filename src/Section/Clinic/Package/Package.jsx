import React from 'react';
import Icons from '../../../assets/Icons/icons';

const Package = () => {
  return (
    <>
      <div className="bg-white rounded-3xl mt-3 md:shadow-own1 p-3 md:p-8 ">
        <h3 className="flex items-center  font-bold text-3xl  mb-4">
          Packages
        </h3>
        <div className="flex items-center w-full  p-2 rounded-xl border border-solid border-[#ddd]">
          <Icons.Circle className="w-10 h-10 " />
          <div className="w-[calc(100%-60)]  ml-4">
            <h3 className="text-lg font-semibold mb-1">
              Packages is the main tool to attract patients and increase your
              revenue.
            </h3>
            <p className="text-base font-medium text-[gray]">
              Adding packages is crucial to get more leads and bookings.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <button className="flex items-center p-2 max-w-[200px] rounded-xl border-2 border-solid border-green-800">
            <Icons.Plus className="w-5 h-5 fill-green-800 " />
            <span className="ml-3 text-base text-green-800 font-bold">
              Add Package
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Package;
