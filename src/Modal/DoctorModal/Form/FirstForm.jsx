import SelectMulti from '../../../Components/SelectMulti';
import SelectOne from '../../../Components/SelectOne';
import YearCalc from '../../../Components/YearCalc';
import noImage from '../../../assets/noImage.jpg';
import specialities from '../../../resources/speciality.json';
import languages from '../../../resources/languages.json';
const FirstForm = ({
  year,
  setYear,
  speciality,
  setSpeciality,
  language,
  setLanguage,
}) => {
  return (
    <div className="row">
      <div className="lg:col-lg-2">
        <figure className="w-[100px] h-[100px] border overflow-hidden mx-auto border-[#ddd] rounded-full mb-3">
          <img
            src={noImage}
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
            placeholder="Write the doctor's name and surname"
            className="p-2 min-h-[38px] rounded-lg border-solid w-full border border-[#ddd] outline-none block"
          />
        </div>
        <div className="w-full mb-2">
          <SelectOne />
        </div>
        <div className="w-full mb-2">
          <YearCalc year={year} setYear={setYear} />
        </div>
        <div className="w-full mb-2">
          <h4 className="mb-2 font-medium text-base text-[gray]">
            Doctor's medical specialty/subspecialty (e.g. neurologist, hair
            transplant specialist, etc.)
          </h4>
          <SelectMulti
            data={specialities}
            selected={speciality}
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
            selected={language}
            setSelected={setLanguage}
            title="Choose language"
          />
        </div>
        <div className="w-full mb-3">
          <h4 className="mb-2 font-medium text-base text-[gray]">
            Doctor's Video presentation (YouTube links only)
          </h4>
          <input
            type="text"
            placeholder="https://www.youtube.com/watch?v="
            className="p-2 min-h-[38px] rounded-lg border-solid w-full border border-[#ddd] outline-none block"
          />
        </div>
        <div className="w-full flex items-center justify-between mb-5">
          <label htmlFor="consultation" className="cursor-pointer">
            <input
              type="checkbox"
              id="consultation"
              className="accent-[#15803d] focus:accent-[#15803d]"
            />
            <span className={`ml-2 `}>
              The doctor's gives an online consultation
            </span>
          </label>
          <label htmlFor="publish" className="cursor-pointer">
            <input
              type="checkbox"
              id="publish"
              className="accent-[#15803d] focus:accent-[#15803d]"
            />
            <span className={`ml-2   text-[#15803d]  `}>
              Publish on the website
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
