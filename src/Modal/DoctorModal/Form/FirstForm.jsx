import SelectMulti from '../../../Components/SelectMulti';
import SelectOne from '../../../Components/SelectOne';
import YearCalc from '../../../Components/YearCalc';
import noImage from '../../../assets/noImage.jpg';
import specialities from '../../../resources/speciality.json';
import languages from '../../../resources/languages.json';
import { useCheckboxState, useFormStore } from '../../../zustand/ZustandOne';
import { useState } from 'react';
const FirstForm = () => {
  const { formState, updateFormState } = useFormStore();
  const handleNameChange = (e) => {
    const newName = e.target.value;
    updateFormState({ value: { ...formState.value, name: newName } });
  };
  const handleVideoChange = (e) => {
    const newVideo = e.target.value;
    updateFormState({ value: { ...formState.value, video: newVideo } });
  };
  const onlineCheckbox = useCheckboxState('online');
  const publishCheckbox = useCheckboxState('publish');
  const setSpeciality = (newSpeciality) => {
    updateFormState({
      value: { ...formState.value, speciality: newSpeciality },
    });
  };

  const setLanguage = (newLanguage) => {
    updateFormState({ value: { ...formState.value, language: newLanguage } });
  };
  const [imgPreview, setImgPreview] = useState(null);

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
        updateFormState({ value: { ...formState.value, img: reader.result } });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="row">
      <div className="lg:col-lg-2">
        <figure className="w-[100px] h-[100px] border overflow-hidden mx-auto border-[#ddd] rounded-full mb-3">
          <img
            src={imgPreview || noImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </figure>
        <label
          htmlFor="upload"
          className="text-[#a3cc0e] block w-full text-center font-normal text-balance">
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleImgUpload}
            className="sr-only cursor-pointer"
          />
          Select Doctor's modal
        </label>
      </div>
      <div className="lg:col-lg-10">
        <div className="w-full mb-2">
          <label htmlFor="nameSurname" className="block mb-2">
            Doctor's name (in English)
          </label>
          <input
            type="text"
            id="nameSurname"
            value={formState.value.name || ''}
            onChange={handleNameChange}
            placeholder="Write the doctor's name and surname"
            className="p-2 min-h-[38px] rounded-lg border-solid w-full border border-[#ddd] outline-none block"
          />
        </div>
        <div className="w-full mb-2">
          <SelectOne />
        </div>
        <div className="w-full mb-2">
          <YearCalc />
        </div>
        <div className="w-full mb-2">
          <h4 className="mb-2 font-medium text-base text-[gray]">
            Doctor's medical specialty/subspecialty (e.g. neurologist, hair
            transplant specialist, etc.)
          </h4>
          <SelectMulti
            data={specialities}
            selected={formState.value.speciality}
            setSelected={setSpeciality}
            title="Choose speciality"
          />
        </div>
        <div className="w-full mb-3">
          <h4 className="mb-2 font-medium text-base text-[gray]">
            Languages the doctor speaks
          </h4>
          <SelectMulti
            data={languages}
            selected={formState.value.language}
            setSelected={setLanguage}
            title="Choose language"
          />
        </div>
        <div className="w-full mb-3">
          <h4 className="mb-2 font-medium text-base text-[gray]">
            Doctor's Video presentation (YouTube links only)
          </h4>
          <input
            type="url"
            placeholder="https://www.youtube.com/watch?v="
            value={formState.value.video || ''}
            onChange={handleVideoChange}
            className="p-2 min-h-[38px] rounded-lg border-solid w-full border border-[#ddd] outline-none block"
          />
        </div>
        <div className="w-full flex items-center justify-between mb-5">
          <label htmlFor="consultation" className="cursor-pointer">
            <input
              type="checkbox"
              {...onlineCheckbox}
              id="consultation"
              className="accent-[#15803d] focus:accent-[#15803d]"
            />
            <span
              className={`ml-2 ${
                formState.value.online ? 'text-greenown' : 'text-[#171717]'
              }`}>
              The doctor's gives an online consultation
            </span>
          </label>
          <label htmlFor="publish" className="cursor-pointer">
            <input
              type="checkbox"
              id="publish"
              {...publishCheckbox}
              className="accent-[#15803d] focus:accent-[#15803d]"
            />
            <span
              className={`ml-2   ${
                formState.value.publish ? 'text-greenown' : 'text-[#171717]'
              } `}>
              Publish on the website
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
