import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';

const Selector = ({
  data,
  title,
  placeholder,
  selected,
  setSelected,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false); 

  const selectOption = useRef(null);

  const handleOutsideClick = (event) => {
    if (selectOption.current && !selectOption.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const filteredData = data.filter((country) =>
    country.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="w-full font-medium relative select-none" ref={selectOption}>
      <button
        onClick={() => setOpen(!open)}
        className={`bg-[#fafafa] border rounded-sm ${
          open ? 'border-greenown' : 'border-transparent'
        } w-full p-2 flex items-center justify-between rounded ${
          !selected && 'text-gray-700'
        }`}>
        {selected
          ? selected.length > 25
            ? selected.substring(0, 25) + '...'
            : selected
          : title}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </button>
      <ul
        className={`bg-white mt-2 z-[999] w-full absolute transition-all shadow-xl border rounded-lg py-2 border-[#ddd] ${
          open
            ? 'max-h-[400px] visible overflow-visible opacity-100'
            : 'overflow-hidden opacity-0 invisible max-h-0'
        } `}>
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {filteredData.length === 0 ? (
          <li className="p-2 text-sm  text-opacity-65 flex items-center  justify-center">
            No match
          </li>
        ) : (
          filteredData.map((country) => (
            <li
              key={country.name}
              className={`p-2 text-sm flex items-center group hover:bg-[#f5f7fa] cursor-pointer hover:text-black
                ${
                  country.name.toLowerCase() === selected?.toLowerCase() &&
                  'bg-[#f5f7fa] text-black'
                }
                ${
                  country.name
                    .toLowerCase()
                    .startsWith(inputValue.toLowerCase()) && 'block'
                }`}
              onClick={() => {
                setSelected(prevSelected => {
                  if (prevSelected.toLowerCase() === country.name.toLowerCase()) {
                    return '';
                  } else {
                    return country.name;
                  }
                });
                setOpen(false);
                setInputValue('');
              }}>
              <span
                className={`flex items-center justify-center w-[16px] h-[16px] border rounded-[4px] border-[#d4d4d4] group-hover:border-[#15803d]
                  ${
                    country.name.toLowerCase() ===
                      selected?.toLowerCase() &&
                    'bg-[#15803d] border-[#15803d] text-black'
                  }
                `}>
                {country.name.toLowerCase() ===
                  selected?.toLowerCase() && (
                  <FaCheck size={10} className="text-white" />
                )}
              </span>
              <span className="text-[#171717] pl-3">{country.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Selector;
