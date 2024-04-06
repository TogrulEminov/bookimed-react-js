import { useEffect, useRef, useState } from 'react';
import Icons from '../assets/Icons/icons';
import data from '../resources/Degree.json';
const SelectOne = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef();
  const handleOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    <div>
      <label className="text-base block mb-1 font-normal">Degree</label>
      <button
        type="button"
        className="p-2 min-h-[38px] border border-[#ddd] rounded-sm">
        {selected ? (
          <span className="text-balance font-normal text-[#171717]">
            {selected}
          </span>
        ) : (
          <span className="text-balance font-normal text-[gray]">
            Choose a degree
          </span>
        )}
        <Icons.ArrowDown className={open ? 'rotate-90' : ''} />
      </button>
      <ul
        ref={ref}
        className={`bg-white mt-2 w-full z-[999] absolute transition-all shadow-xl border rounded-lg py-2 border-[#ddd] ${
          open
            ? 'max-h-[400px] visible overflow-visible opacity-100'
            : 'overflow-hidden opacity-0 invisible max-h-0'
        } `}>
        {data?.map((item, index) => {
          <li
            className="hover:text-[#15803d] text-[#171717] text-base"
            onClick={() => {
              setSelected(item?.name);
              setOpen(false);
            }}
            key={index}>
            {item?.name}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default SelectOne;
