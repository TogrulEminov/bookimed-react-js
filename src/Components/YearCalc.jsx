import React, { useState } from 'react';

const YearCalc = () => {
  const [year, setYear] = useState({
    min: 1950,
    max: new Date().getFullYear(),
    current: '',
  });
  const handleDecrease
  return (
    <div className="flex items-center justify-between">
      <div className="max-w-[200px] w-full rounded-sm border border-[#ddd] h-[50px]">
        <button type="button" className="w-[40px] h-full bg-[#eee]">
          -
        </button>
        <input type="number" />
        <button type="button" className="w-[40px] h-full bg-[#eee]">
          +
        </button>
      </div>
      <p>dkjd year of experince</p>
    </div>
  );
};

export default YearCalc;
