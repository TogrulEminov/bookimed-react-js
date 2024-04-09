import React, { useState } from 'react';
import Icons from '../../assets/Icons/icons';
import SelectOne from '../../Components/SelectOne';
import { useBeforeStore } from '../../zustand/ZustandOne';
import noImage from '../../assets/noImage.jpg';
import ProcedureData from '../../resources/Procedure.json';
const BeforeModal = ({ closeModal, modal }) => {
  const { beforeState, uptadeBeforeState, resetBeforeState } = useBeforeStore();
  const [imgPreview, setImgPreview] = useState(null);
  const doctors = JSON.parse(localStorage.getItem('formState'));
  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
        uptadeBeforeState({
          value: { ...beforeState.value, images: reader.result },
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const setProcedure = (newProcedure) => {
    uptadeBeforeState({
      value: { ...beforeState.value, procedure: newProcedure },
    });
  };

  const setDoctors = (newDoctors) => {
    uptadeBeforeState({
      value: { ...beforeState.value, doctors: newDoctors },
    });
  };

  const handleSubmit = () => {
    closeModal();
    resetBeforeState();
    const storedArray = JSON.parse(localStorage.getItem('beforeAfter')) || [];
    storedArray.push(beforeState.value);
    localStorage.setItem('beforeAfter', JSON.stringify(storedArray));
  };

  return (
    <div
      className={`fixed min-h-screen inset-0  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl custom-animation inline-block max-h-[600px] h-full align-middle shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-3 md:p-6 py-5 w-full max-w-[1000px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-lg lg:text-3xl">
            Add Before & After Photo
          </h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex border-[#ddd]  rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.Warning className="w-6 h-6" />
          <span className="text-base ml-3 w-[calc(100%-40px)]">
            Give as much information about the doctor as possible to build
            patient confidence.
          </span>
        </div>

        <div className="row">
          <div className="lg:col-lg-6">
            <div>
              {imgPreview ? (
                <figure className="w-full relative  h-[250px] border rounded-sm bg-[#e7e7e7] border-[#ababab]">
                  <img
                    src={imgPreview || noImage}
                    alt="my preview"
                    className="w-full object-cover h-full"
                  />
                </figure>
              ) : (
                <label
                  htmlFor="before"
                  className="w-full relative  h-[250px] border rounded-sm bg-[#e7e7e7] border-[#ababab] after:absolute after:border after:border-dashed after:border-[gray]  flex items-center justify-center">
                  <span className="text-lg text-[#666] absolute bottom-5 left-20">
                    Before
                  </span>
                  <span className="text-lg text-[#666] absolute bottom-5 right-20">
                    After
                  </span>
                  <div className="font-medium text-[#999] text-lg text-center">
                    <Icons.Plus className="w-10 mb-2 h-10 mx-auto fill-[gray]" />
                    Add Photo
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImgUpload}
                    className="sr-only cursor-pointer"
                    id="before"
                  />
                </label>
              )}
            </div>

            <div className="flex items-center my-4 flex-wrap gap-2">
              {imgPreview && (
                <figure className="relative w-[100px] border border-[#ddd] rounded-sm overflow-hidden h-[100px]">
                  <img
                    src={imgPreview}
                    alt="my preview"
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]  "></div>
                  <button
                    onClick={() => setImgPreview(null)}
                    className="w-6 h-6  text-red-900 absolute top-2 right-2"></button>
                  <Icons.Close />
                </figure>
              )}
            </div>
          </div>
          <div className="lg:col-lg-6">
            <label htmlFor="" className="block my-2">
              <span className="mb-2 block">Procedure</span>
              <SelectOne
                title="Selected procedure"
                data={ProcedureData}
                selected={beforeState.value.procedure}
                setSelected={setProcedure}
              />
            </label>
            <label htmlFor="" className="block my-2">
              <span className="mb-2 block">Doctors</span>
              <SelectOne
                title="Select doctors"
                data={doctors}
                selected={beforeState.value.doctors}
                setSelected={setDoctors}
              />
            </label>
          </div>
          <div className="col-12">
            <button
              onClick={handleSubmit}
              className="max-w-[300px] w-full border rounded-3xl flex items-center justify-center bg-red-400 p-2 mx-auto my-4 text-white text-lg">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeModal;
