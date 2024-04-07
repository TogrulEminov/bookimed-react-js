import React, { useState } from 'react';
import Icons from '../../../assets/Icons/icons';
import { FaCheck } from 'react-icons/fa';
import { useFormStore } from '../../../zustand/ZustandOne';

const SeconModal = ({ data, placeholder, title }) => {
  const { formState, updateFormState } = useFormStore();
  const [selected, setSelected] = useState(formState.value.doctorSpec || []);
  const [inputValue, setInputValue] = useState('');
  const [check, setCheck] = useState(false);

  const toggleSelection = (value) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    setSelected(newSelected);
    updateFormState({ value: { ...formState.value, doctorSpec: newSelected } });
  };

  const removeSelected = (itemToRemove) => {
    const updatedSelected = selected.filter((item) => item !== itemToRemove);
    setSelected(updatedSelected);
    updateFormState({
      value: { ...formState.value, doctorSpec: updatedSelected },
    });
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setCheck(!check);

    if (!check) {
      setSelected(data.map((item) => item.name));
      updateFormState({
        value: {
          ...formState.value,
          doctorSpec: data.map((item) => item.name),
        },
      });
    } else {
      setSelected([]);
      updateFormState({ value: { ...formState.value, doctorSpec: [] } });
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const groupedData = filteredData.reduce((acc, item) => {
    const firstLetter = item.name.slice(0, 1).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});
  return (
    <div>
      <h3 className="text-lg text-[#171717] mb-5">
        Doctor's medical fields (e.g. neurology, plastic surgery, etc)
      </h3>
      {Array.isArray(selected) && (
        <div className="flex items-center gap-2 flex-wrap mb-5">
          {selected.map((item, index) => (
            <div
              key={index}
              className="border mx-2 max-w-fit relative border-[#ddd] rounded-xl p-2 flex items-center">
              <span className="text-sm text-[gray]">{item}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelected(item);
                }}>
                <Icons.Close className="text-red-500 ml-3" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mb-2 flex-wrap flex items-center">
        <label htmlFor="" className="w-full ">
          Search
        </label>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleSearch}
          className="w-full p-2 border border-solid border-[#ddd]"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="check"
          className={check ? 'text-greenown' : 'text-[#171717]'}>
          <input
            id="check"
            type="checkbox"
            className={'accent-greenown focus:accent-greenown mr-4'}
            checked={check}
            onClick={() => handleClick()}
          />
          Choose all
        </label>
      </div>
      <div className="flex items-center flex-wrap">
        {filteredData?.length === 0 ? (
          <span className="p-2 text-sm text-opacity-65 flex items-center justify-center">
            No match
          </span>
        ) : (
          Object.entries(groupedData)?.map(([firstLetter, items]) => (
            <div
              key={firstLetter}
              className="mb-4 w-full flex items-center flex-wrap gap-x-5">
              <h3 className="capitalize w-full mb-3 font-semibold">
                {firstLetter}
              </h3>
              {items?.map((item) => (
                <div key={item.name} className="mb-2">
                  <span
                    className={`text-sm mb-2 flex items-center group cursor-pointer hover:text-black
              ${
                Array.isArray(selected) && selected.includes(item.name)
                  ? 'text-[#15803d]'
                  : ''
              }
              ${
                item.name.toLowerCase().startsWith(inputValue.toLowerCase())
                  ? 'block'
                  : ''
              }
              `}
                    onClick={() => toggleSelection(item.name)}>
                    <span
                      className={`flex items-center justify-center w-[16px] h-[16px] border rounded-[4px] border-[#d4d4d4] group-hover:border-[#15803d]
                ${
                  Array.isArray(selected) && selected.includes(item.name)
                    ? 'bg-[#15803d] border-[#15803d] text-white'
                    : ''
                }
                `}>
                      {Array.isArray(selected) &&
                        selected.includes(item.name) && <FaCheck size={10} />}
                    </span>
                    <span className="text-[#171717] pl-3">{item.name}</span>
                  </span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SeconModal;
