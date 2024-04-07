import React from 'react';
import Icons from '../../assets/Icons/icons';
import SelectOne from '../../Components/SelectOne';

const BeforeAfter = ({ modal, closeModal }) => {
  return (
    <div
      className={`fixed inset-0  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl   custom-animation inline-block max-h-[600px]  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-6  py-5 w-full  max-w-[1000px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-3xl">Edit clinic's photos</h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border border-[#ddd] rounded-xl p-4  items-center mb-4 flex flex-wrap ">
          <Icons.Warning />
          <span className="text-base  ml-4">
            {' '}
            Add as many high quality photos as you can so clients can see your
            works in every detaill. Maximum file size is 10 MB.
          </span>
        </div>
        <div className="row">
          <div className="lg:col-lg-6">
            <label className="w-full max-h-[300px] h-full border border-solid relative border-[#ddd] bg-[#f8f8f8]">
              <input type="file" className="sr-only" />
            </label>
          </div>
          <div className="lg:col-lg-6">
            <div className="flex flex-wrap gap-y-2">
              <label htmlFor="">
                <span>Procedure</span>
                <SelectOne />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
