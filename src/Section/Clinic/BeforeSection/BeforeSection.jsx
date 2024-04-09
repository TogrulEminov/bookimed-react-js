import React, { useEffect, useState } from 'react';
import Icons from '../../../assets/Icons/icons';
import useToggle from '../../../Hooks/useToggle';
import BeforeModal from '../../../Modal/BeforeModal/BeforeModal';
import BeforeCard from '../../../Components/BeforeCard';

const BeforeSection = () => {
  const [open, handleOpen, closeModal] = useToggle();
  const [add, setAdd] = useState([]);

  const handleAdd = (item) => {
    setAdd(item);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('beforeAfter'));
    if (storedArray) {
      setData(storedArray);
    }
  }, []);

  const deleteItemByIndex = (index) => {
    const newArray = [...data];
    newArray.splice(index, 1);
    setData(newArray);
    localStorage.setItem('beforeAfter', JSON.stringify(newArray));
  };
  return (
    <>
      <div className="bg-white rounded-3xl mt-3 md:shadow-own1 p-3 md:p-8 ">
        <h3 className="flex items-center  font-bold text-3xl  mb-4">
          Before & After Photos ({data?.length})
        </h3>
        <div className="row gap-y-2">
          <div className="col-12 xl:col-xl-3 lg:col-lg-4 md:col-md-6">
            <button
              onClick={handleOpen}
              className="w-full h-[200px] border-2 border-[#a3cc0e] flex items-center justify-center">
              <div className="w-fit h-fit text-center">
                <Icons.Plus className="fill-[#a3cc0e] mx-auto mb-2 w-10 h-10" />
                <span className="font-semibold text-lg text-[#a3cc0e]">
                  Add Photo
                </span>
              </div>
            </button>
          </div>
          {data &&
            data?.map((item, index) => (
              <div key={index} className="xl:col-xl-3 lg:col-lg-4 md:col-md-6">
                <BeforeCard
                  handleAdd={() => handleAdd(item)}
                  index={index}
                  img={item.images}
                  add={add}
                  deleteItemByIndex={() => deleteItemByIndex(index)}
                />
              </div>
            ))}
        </div>
      </div>

      <BeforeModal modal={open} closeModal={closeModal} />
    </>
  );
};

export default BeforeSection;
