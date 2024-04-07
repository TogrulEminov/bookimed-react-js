import { useState } from 'react';

const YearCalc = () => {
  const [year, setYear] = useState({
    min: 1950,
    max: new Date().getFullYear(),
    current: new Date().getFullYear(),
  });

  const handleDecrement = () => {
    if (year?.current > year.min) {
      setYear((prevYear) => ({
        ...prevYear,
        current: prevYear.current - 1,
      }));
    }
  };

  const handleIncrement = () => {
    if (year?.current < year.max) {
      setYear((prevYear) => ({
        ...prevYear,
        current: prevYear.current + 1,
      }));
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
              year.current === 1950 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={handleDecrement}>
            -
          </button>
          <input
            type="number"
            className="w-full h-full outline-none border-none p-2 text-center"
            maxLength={4}
            value={year.current}
            readOnly
          />
          <button
            type="button"
            className={`w-16 block border border-blue-50 h-full bg-[#eee] ${
              year.current ? 'cursor-pointer' : 'cursor-not-allowed'
            }`}
            onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      <p>{new Date().getFullYear() - year.current} years of experience</p>
    </div>
  );
};

export default YearCalc;
