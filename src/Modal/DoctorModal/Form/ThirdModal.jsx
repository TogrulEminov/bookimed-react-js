import { useFormStore } from '../../../zustand/ZustandOne';

const ThirdModal = () => {
  const { formState, updateFormState } = useFormStore();

  const handleAboutChange = (e) => {
    const newName = e.target.value;
    updateFormState({ value: { ...formState.value, doctorAbout: newName } });
  };

  const handleCvChange = (e) => {
    const newCv = e.target.value;
    updateFormState({ value: { ...formState.value, CV: newCv } });
    console.log({ value: { ...formState.value, CV: newCv } })
  };

  const handleVideoChange = (e) => {
    const newVideo = e.target.value;
    updateFormState({ value: { ...formState.value, video: newVideo } });
    console.log({ value: { ...formState.value, video: newVideo } })
  };

  return (
    <div className="">
      <h3 className="font-medium text-lg text-[#171717] mb-3">
        Tell patients more about this doctor: education, work experience, any
        competitive advantages, achievements, awards.
      </h3>
      <label htmlFor="" className="block mb-4">
        <span className="block mb-2 text-[#171717] w-full">
          WOW fact about the doctor (if any)
        </span>
        <textarea
          name="doctorAbout"
          value={formState.value.doctorAbout}
          onChange={handleAboutChange}
          className="w-full max-h-[400px] outline-none p-2 min-h-[100px] resize-y border border-solid border-[#ddd]"
        ></textarea>
        <span className="float-right">
          {formState.value.doctorAbout?.length}/700
        </span>
      </label>
      <label htmlFor="" className="block mb-4">
        <span className="block w-full mb-2 text-[#171717]">
          Full Doctor's CV
        </span>
        <textarea
          onChange={handleCvChange}
          value={formState.value.CV}
          className="h-[150px] w-full resize-none p-2  outline-none border border-solid border-[#ddd]"
        ></textarea>
        <span className="float-right">{formState.value.CV?.length}/32000</span>
      </label>

      <label htmlFor="" className="block mb-4">
        <span className="block w-full mb-2 text-[#171717]">
          Doctor's Video presentation (YouTube links only)
        </span>
        <input
          onChange={handleVideoChange}
          value={formState.value.video}
          className="p-2  w-full border border-solid  outline-none border-[#ddd]"
        />
      </label>
    </div>
  );
};

export default ThirdModal;
