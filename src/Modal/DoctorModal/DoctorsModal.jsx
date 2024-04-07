import React, { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';
import FirstForm from './Form/FirstForm';
import DoctorSpec from '../../resources/DoctorSpeciality.json';
import ThirdModal from './Form/ThirdModal';
import { useFormStore } from '../../zustand/ZustandOne';
import SeconModal from './Form/SeconModal';

const DoctorsModal = ({ modal, closeModal }) => {
  const { initialIndex, nextForm, prevForm, formState } = useFormStore();

  const handlePrevForm = () => {
    prevForm();
  };

  const handleNextForm = () => {
    const {
      name,
      speciality,
      language,
      video,
      year,
      doctorSpec,
      doctorAbout,
      CV,
    } = formState.value;

    if (initialIndex === 1) {
      if (
        !name ||
        !video ||
        speciality.length === 0 ||
        !year.current ||
        language.length === 0
      ) {
        alert('Please fill in all required fields.');
        return;
      }
    } else if (initialIndex === 2) {
      if (!doctorSpec) {
        alert('Please fill in the year field.');
        return;
      }
    } else if (initialIndex === 3) {
      if (!doctorAbout || !CV) {
        alert('Please fill in the year field.');
        return;
      }
    }

    if (initialIndex === 3) {
      alert('You have reached the last step.');
      return;
    }
    nextForm();
  }; 
  const handleSave = (e) => {
    e.preventDefault();
    const {
      name,
      speciality,
      language,
      video,
      year,
      doctorSpec,
      doctorAbout,
      CV,
      publish,
      online,
      img,
    } = formState.value;
    if (initialIndex === 1) {
      if (
        !name ||
        !video ||
        speciality.length === 0 ||
        !year.current ||
        language.length === 0
      ) {
        alert('Please fill in all required fields.');
        return;
      }
    } else if (initialIndex === 2) {
      if (!doctorSpec) {
        alert('Please fill in the year field.');
        return;
      }
    } else if (initialIndex === 3) {
      if (!doctorAbout || !CV) {
        alert('Please fill in the year field.');
        return;
      }
    }
    const dataToSave = {
      name: name,
      id: Math.random().toString(),

      speciality: speciality,
      language: language,
      video: video,
      year: year?.current,
      doctorSpec: doctorSpec,
      doctorAbout: doctorAbout,
      CV: CV,
      publish: publish,
      online: online,
      img: img,
    };

    if (initialIndex === 3) {
      const existingData = JSON.parse(localStorage.getItem('formState')) || [];
      const newData = [...existingData, dataToSave];
      localStorage.setItem('formState', JSON.stringify(newData));
      closeModal();
    }
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
            Add doctor {initialIndex}/3
          </h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex border-[#ddd] rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.Warning className="w-6 h-6" />
          <span className="text-base lg:ml-4">
            Give as much information about the doctor as possible to build
            patient confidence.
          </span>
        </div>
        <form onSubmit={handleSave} className="w-full">
          {initialIndex === 1 && <FirstForm />}
          {initialIndex === 2 && <SeconModal data={DoctorSpec} />}
          {initialIndex === 3 && <ThirdModal />}
          <div className="w-full flex items-center justify-center">
            {initialIndex > 1 && (
              <button
                type="button"
                onClick={handlePrevForm}
                className="max-fit mx-auto rounded-2xl text-base text-black">
                Go back
              </button>
            )}

            {initialIndex === 3 && (
              <button
                type="submit"
                className="max-fit mx-auto rounded-2xl text-base text-white bg-red-400 p-3 px-5">
                Save changes
              </button>
            )}

            {initialIndex < 3 && (
              <button
                onClick={handleNextForm}
                type="button"
                className="max-fit mx-auto rounded-2xl text-base text-white bg-red-400 p-3 px-5">
                Save changes and continue
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorsModal;
