import React, { useEffect, useRef, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import Icons from '../assets/Icons/icons';

const SelectMulti = ({ data, title, placeholder, selected, setSelected }) => {
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

  const filteredData = data?.filter((item) =>
    item?.name.toLowerCase().includes(inputValue?.toLowerCase())
  );

  const toggleSelection = (value) => {
    const newSelected = selected?.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];

    setSelected(newSelected);

    if (newSelected?.length === 0) {
      setInputValue('');
    }
  };

  const removeSelected = (itemToRemove) => {
    console.log('Removing:', itemToRemove);
    const updatedSelected = selected.filter((item) => item !== itemToRemove);
    setSelected(updatedSelected);
  };
  return (
    <div className="w-full font-medium relative select-none" ref={selectOption}>
      <div className="mb-2 flex items-center flex-wrap gap-y-3">
        {Array.isArray(selected) &&
          selected.map((item, index) => {
            return (
              <div
                key={index}
                className="border mx-2 max-w-[200px] relative border-[#ddd] rounded-xl p-2 flex items-center">
                <span className="text-[10px] text-[gray]">{item}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSelected(item);
                  }}>
                  <Icons.Close className="text-red-500 ml-3" />
                </button>
              </div>
            );
          })}
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`bg-[#fafafa] border rounded-sm ${
          open ? 'border-greenown' : 'border-transparent'
        } w-full p-2 flex items-center justify-between rounded ${
          Array.isArray(selected) && selected?.length === 0 && 'text-gray-700'
        }`}>
        {title}
        <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
      </button>
      <ul
        className={`bg-white mt-2 w-full z-[999] max-h-40 h-auto absolute transition-all shadow-xl border border-solid rounded-lg py-2 border-[#ddd] ${
          open
            ? 'visible  overflow-y-auto  opacity-100'
            : 'overflow-hidden opacity-0 invisible max-h-0'
        } `}>
        <span className="flex items-center px-2    bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </span>
        {filteredData?.length === 0 ? (
          <li className="p-2 text-sm  text-opacity-65 flex items-center  justify-center">
            No match
          </li>
        ) : (
          filteredData?.map((item) => (
            <li
              key={item.name}
              className={`p-2 text-sm mb-2 flex items-center group hover:bg-[#f5f7fa] cursor-pointer hover:text-black
                ${
                  Array.isArray(selected) &&
                  selected.includes(item.name) &&
                    'text-[#15803d]'
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
                    Array.isArray(selected) &&
                    selected.includes(item.name) &&
                    'bg-[#15803d] border-[#15803d] text-white'
                  }
                `}>
                {Array.isArray(selected) && selected.includes(item.name) && (
                  <FaCheck size={10} />
                )}
              </span>
              <span className="text-[#171717] pl-3">{item.name}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SelectMulti;
