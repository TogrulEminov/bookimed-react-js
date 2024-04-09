import React, { useState, useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import CertificatesModal from '../../../Modal/CertificatesModal';
import useToggle from '../../../Hooks/useToggle';

const Certificates = () => {
  const [open, handleOpen, closeModal] = useToggle();
  const [selectData, setSelectData] = useState(
    JSON.parse(localStorage.getItem('selectData')) || []
  );
  useEffect(() => {
    localStorage.setItem('selectData', JSON.stringify(selectData));
  }, [selectData]);

  const handlePublish = (data) => {
    setSelectData(data);
  };
  return (
    <>
      <div>
        <div className="font-bold mb-4 text-lg">
          Hospital accreditations of quality
        </div>
        <ul className="mb-4">
          {selectData.map((item, i) => (
            <li className="flex gap-4 w-full mb-2" key={i}>
              <img
                className="w-[65px] h-[65px]"
                src={item.img}
                alt={item.title}
              />
              <span className="py-4 border-t border-b border-[#eee]">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleOpen}
        className="font-medium text-base leading-5 text-[#a3cc0e] px-4 py-2 border border-[#a3cc0e] rounded-full flex items-center">
        <MdEdit className="me-1" size={20} />
        <span className="ms-1">Edit accreditations</span>
      </button>

      <CertificatesModal
        selectData={selectData}
        setSelectData={setSelectData}
        handlePublish={handlePublish}
        closeModal={closeModal}
        modal={open}
      />
    </>
  );
};

export default Certificates;
