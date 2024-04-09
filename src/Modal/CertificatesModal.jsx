import React, { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import mockData from '../resources/Quality.json';

const CertificatesModal = ({
  modal,
  closeModal,
  handlePublish,
  setSelectData,
  selectData,
}) => {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const showHandle = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = mockData.filter((item) =>
      item.title.toLowerCase().includes(term)
    );
    setFilteredData(filtered);
    setShowSearchResult(filtered.length > 0);
  };

  const addData = (item) => {
    const isData = selectData.find(
      (selectedItem) => selectedItem.id === item.id
    );
    if (!isData) {
      setSelectData([...selectData, item]);
    }
  };

  const handlePublishAndClose = () => {
    handlePublish(selectData);
    closeModal();
  };

  const handleDelete = (id) => {
    const newData = selectData.filter((item) => item.id !== id);
    setSelectData(newData);
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] px-3 justify-center items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white p-[40px] custom-animation inline-block align-middle shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative w-full max-w-[700px]">
        <h3 className="text-[#171717] pr-14 font-medium text-3xl mb-4">
          Edit Clinic’s Certificates and Accreditations of Quality
        </h3>
        <div>
          <div className="border border-[#dfe1e5] items-center gap-2 rounded-md p-3 text-base font-normal text-gray-700 mb-5 flex">
            <CiCircleInfo className="flex-shrink-0" size={20} />
            <span>
              The more Accreditations of Quality you add, the more trust it will
              give to the clinic’s potential clients.
            </span>
          </div>
          <div className="flex flex-col">
            <div className="data">
              <ul className="mb-4">
                {selectData.map((item, i) => (
                  <li
                    className="flex gap-4  border-t border-b mb-2 border-[#eee]"
                    key={i}>
                    <img
                      className="w-[65px] h-[65px]"
                      src={item.img}
                      alt={item.title}
                    />
                    <span className="py-4 w-full">{item.title}</span>
                    <button
                      className="delete ml-auto"
                      onClick={() => handleDelete(item.id)}>
                      <IoMdClose />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-sm">Quality Certificate/Accreditation</span>
              <form>
                <input
                  onChange={showHandle}
                  value={searchTerm}
                  className="my-5 border w-full border-[#eee] p-2 outline-none"
                  type="text"
                  placeholder="Start typing for search"
                />
              </form>
              {showSearchResult && (
                <div className="search-result h-[200px] overflow-auto p-5 shadow-xl mb-4 border border-[#eee]">
                  <ul>
                    {filteredData.length > 0 ? (
                      filteredData.map((item, i) => (
                        <li
                          onClick={() => addData(item)}
                          className="flex gap-4 mb-4 hover:bg-[#eee] cursor-pointer"
                          key={i}>
                          <div className="w-[65px] h-[65px]">
                            <img
                              className="w-[65px] h-[65px] object-cover shadow-lg"
                              src={item.img}
                              alt={item.title}
                            />
                          </div>
                          <span className="py-4">{item.title}</span>
                          <button className="text-4xl ml-auto">+</button>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 text-center">
                        No results found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-x-4">
          <button
            onClick={() => closeModal()}
            className="font-medium text-base leading-5 h-12 min-w-[200px] flex items-center cursor-pointer">
            Cancel
          </button>
          <button
            onClick={handlePublishAndClose}
            className="font-medium text-base leading-5 flex items-center h-12 min-w-[200px] cursor-pointer border border-[#fb765f] text-white text-center rounded-[30px] justify-center bg-[#fb765f] mr-4">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificatesModal;
