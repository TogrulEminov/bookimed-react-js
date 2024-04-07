import React, { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';
import useToggle from '../../Hooks/useToggle';
import BeforeAfter from '../../Modal/BeforeAfter/BeforeAfter';
import BeforeAfterCard from '../../Components/BeforeAfterCard';

const BeforeAndAfter = () => {
  const [open, handleOpen, closeModal] = useToggle();
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('beforeAfter'));
    if (storedArray) {
      setData(storedArray);
    }
  }, []);

  const handleOpenAndUptade = (data) => {
    localStorage.setItem('newSelected', JSON.stringify(data));
  };

  const deleteItemByIndex = (index) => {
    const newArray = [...data];
    newArray.splice(index, 1);
    setData(newArray);
    localStorage.setItem('beforeAfter', JSON.stringify(newArray));
  };
  return (
    <>
      <div className="bg-white rounded-3xl mt-3 md:shadow-own1 p-3 md:p-8 ">
        <h3 className="font-semibold text-2xl mb-5">
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

          {data?.map((item, index) => {
            return (
              <BeforeAfterCard
                index={index}
                key={index}
                deleteItemByIndex={() => deleteItemByIndex(item)}
                handleSecondOpen={() => handleOpenAndUptade(item)}
                image={
                  item && item.imageArray && item.imageArray.length > 0
                    ? item.imageArray[0]
                    : ''
                }
              />
            );
          })}
        </div>
      </div>
      <BeforeAfter modal={open} closeModal={closeModal} /> {/* modal 1 */}
    </>
  );
};

export default BeforeAndAfter;
