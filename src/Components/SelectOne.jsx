import { useEffect, useRef, useState } from 'react';
import Icons from '../assets/Icons/icons';

const SelectOne = ({ data, selected, setSelected, disabled, label, title }) => {
  const [open, setOpen] = useState(false);
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
    <div className="relative">
      {label && (
        <label className="capitalize text-base block mb-2 font-normal">
          {label}
        </label>
      )}
      <button
        disabled={disabled}
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 flex items-center justify-between w-full rounded-lg min-h-[38px] border border-[#ddd]">
        {selected ? (
          <span className="text-balance font-normal text-[#171717]">
            {selected}
          </span>
        ) : (
          <span className="text-balance font-normal text-[gray]">{title}</span>
        )}
        <Icons.Arrow className={open ? 'rotate-180' : ''} />
      </button>
      <ul
        ref={ref}
        className={`bg-white mt-2 w-full  rounded-xl max-h-[150px] overflow-y-auto z-[999] py-3 absolute transition-all shadow-xl border border-[#ddd] ${
          open
            ? 'max-h-[400px] visible overflow-visible opacity-100'
            : 'overflow-hidden opacity-0 invisible max-h-0'
        } `}>
        {data?.map((item, index) => {
          return (
            <li
              className="hover:text-[#15803d] hover:bg-[#eee] p-2 px-3 cursor-pointer text-[#171717] text-base"
              onClick={() => {
                setSelected(item?.name);
                setOpen(false);
              }}
              key={index}>
              {item?.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SelectOne;
