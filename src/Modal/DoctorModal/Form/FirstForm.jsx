import SelectOne from '../../../Components/SelectOne';

const FirstForm = ({ img }) => {
  return (
    <div className="row">
      <div className="lg:col-lg-3">
        <figure className="w-[100px] h-[100px] border border-[#ddd]">
          <img src={img} alt="image" />
        </figure>
        <label
          htmlFor="upload"
          className="text-[#a3cc0e] font-normal text-balance">
          <input id="upload" type="file" className="sr-only" />
          Select Doctor's modal
        </label>
      </div>
      <div className="lg:col-lg-9">
        <div className="w-full mb-2">
          <label htmlFor="nameSurname">
            Doctor's name (in English)
            <input
              type="text"
              id="nameSurname"
              placeholder="Write the doctor's name and surname"
              className="p-2 min-h-[38px] rounded-lg border-[#ddd] outline-none"
            />
          </label>
        </div>
        <div className="w-full mb-2">
          <SelectOne />
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
