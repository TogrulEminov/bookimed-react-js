import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import Icons from '../assets/Icons/icons';

const MultiSelector = ({ data, title, placeholder, selected, setSelected }) => {
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

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const toggleSelection = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(newSelected);

    if (newSelected.length === 0) {
      setInputValue('');
    }
  };
  return (
    <div className="w-full font-medium relative select-none" ref={selectOption}>
      <button
        onClick={() => setOpen(!open)}
        className={`bg-[#fafafa] border rounded-sm ${
          open ? 'border-greenown' : 'border-transparent'
        } w-full p-2 flex items-center justify-between rounded ${
          selected.length === 0 && 'text-gray-700'
        }`}>
        <div className="flex items-center">
          {selected.length === 0 ? (
            <span>{title}</span>
          ) : (
            <span className="flex items-center border border-[#ddd] text-[gray] px-2 rounded-xl">
              {selected[0]}
              {selected.length > 1 && (
                <span
                  className="ml-1 text-red-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(selected.slice(1));
                  }}>
                  <Icons.Close />
                </span>
              )}
            </span>
          )}
          {selected.length === 1 && (
            <span
              className="ml-1 text-red-600 cursor-pointer"
              onClick={() => setSelected([])}>
              <Icons.Close />
            </span>
          )}
          {selected.length > 1 && (
            <span className="ml-2 px-2 rounded-md border border-[#ddd] text-red-900">
              {` +${selected.length - 1}`}
            </span>
          )}
        </div>
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </button>
      <ul
        className={`bg-white mt-2 w-full z-[999] absolute transition-all shadow-xl border rounded-lg py-2 border-[#ddd] ${
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
          filteredData.map((item) => (
            <li
              key={item.name}
              className={`p-2 text-sm flex items-center group hover:bg-[#f5f7fa] cursor-pointer hover:text-black
                ${
                  selected.includes(item.name) &&
                  'bg-[#f5f7fa] text-black'
                }
                ${
                  item.name
                    .toLowerCase()
                    .startsWith(inputValue.toLowerCase()) && 'block'
                }`}
              onClick={() => toggleSelection(item.name)}>
              <span
                className={`flex items-center justify-center w-[16px] h-[16px] border rounded-[4px] border-[#d4d4d4] group-hover:border-[#15803d]
                  ${
                    selected.includes(item.name) &&
                    'bg-[#15803d] border-[#15803d] text-white'
                  }
                `}>
                {selected.includes(item.name) && <FaCheck size={10} />}
              </span>
              <span className="text-[#171717] pl-3">{item.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MultiSelector;
