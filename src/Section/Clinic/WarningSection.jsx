import React from 'react';
import Icons from '../../assets/Icons/icons';
import { Link } from 'react-router-dom';

const WarningSection = () => {
  return (
    <section className="my-3">
      <div className="row gap-y-4">
        <div className="col-12 xl:col-xl-6">
          <div className="flex items-center flex-wrap  gap-2 border p-2 border-[#ddd] rounded-md">
            <Icons.Warning className="w-6 h-6" />
            <span className="ml-2 text-[12px] md:text-sm">
              Please note: you're changing the English version of your clinic's
              profile
            </span>
          </div>
        </div>
        <div className="col-12 xl:col-xl-6">
          <Link
            to="/"
            target="_blank"
            className="flex text-sm items-center gap-y-2 flex-wrap justify-center bg-[#fb765f] px-5 py-3 h-full gap-x-2 text-white md:text-lg  rounded-2xl">
            <Icons.Search /> Check my profile on the website
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WarningSection;
