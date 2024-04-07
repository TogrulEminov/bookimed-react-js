import { useFormStore } from '../zustand/ZustandOne';
const YearCalc = () => {
  const { formState, updateFormState } = useFormStore();

  if (!formState || !formState.value || !formState.value.year) {
    return null;
  }

  const handleDecrement = () => {
    if (formState.value.year.current > formState.value.year.min) {
      updateFormState({
        value: {
          ...formState.value,
          year: {
            ...formState.value.year,
            current: formState.value.year.current - 1,
          },
        },
      });
    }
  };

  const handleIncrement = () => {
    if (formState.value.year.current < formState.value.year.max) {
      updateFormState({
        value: {
          ...formState.value,
          year: {
            ...formState.value.year,
            current: formState.value.year.current + 1,
          },
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <label className="mb-2 block text-blue-gray-900">
          The year of start practicing
        </label>
        <div className="max-w-[200px] w-full rounded-sm border border-[#ddd] h-[50px] flex items-center justify-center hover:border-blue-500">
          <button
            type="button"
            className={`w-16 block border border-blue-50 h-full bg-[#eee] ${
              formState.value.year.current === 1950
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            }`}
            onClick={handleDecrement}>
            -
          </button>
          <input
            type="number"
            className="w-full h-full outline-none border-none p-2 text-center"
            maxLength={4}
            value={formState.value.year.current}
            readOnly
          />
          <button
            type="button"
            className={`w-16 block border border-blue-50 h-full bg-[#eee] ${
              formState.value.year.current === formState.value.year.max
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            }`}
            onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      <p>
        {new Date().getFullYear() - formState.value.year.current} years of
        experience
      </p>
    </div>
  );
};

export default YearCalc;
