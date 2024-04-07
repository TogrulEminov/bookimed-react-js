import React, { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';
import LicenceCard from '../../Components/LicenceCard';
import useToggle from '../../Hooks/useToggle';
import ClinicLicenceModal from '../../Modal/ClinicLicenceModal/ClinicLicenceModal';
import FotoramaModal from '../../Modal/ClinicLicenceModal/FotoramaModal';
const ClinicLicence = () => {
  const [open, handleOpen, closeModal] = useToggle();
  const [showModal, handleShowOpen, closeShowModal] = useToggle();
  const [data, setData] = useState([]);
  const [gallery, setGallery] = useState('');
  const handleOpenModal = (data) => {
    setGallery(data);
    handleShowOpen();
  };

  useEffect(() => {
    const storedData = localStorage.getItem('licences');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const deleteItemByIndex = (index) => {
    const newArray = [...data];
    newArray.splice(index, 1);
    setData(newArray);
    localStorage.setItem('licences', JSON.stringify(newArray));
  };

  return (
    <>
      <div className="bg-white rounded-3xl mt-3 md:shadow-own1 p-3 md:p-8 ">
        <h3 className="flex items-center  font-bold text-3xl  mb-4">
          <Icons.Badge className="fill-greenown mr-4 w-10 h-10" />
          Clinic’s licence
        </h3>
        <button
          onClick={handleOpen}
          className="flex items-center p-3 rounded-xl text-greenown border border-solid border-greenown font-semibold">
          <Icons.Upload className="fill-greenown mr-3" />
          Please uploadyour work permission
        </button>

        <div className="my-4">
          <div className="row">
            {data?.map((item) => {
              return (
                <LicenceCard
                  key={item?.id}
                  handleOpen={() => handleOpenModal(item)}
                  id={item.id}
                  handleDelete={() => deleteItemByIndex(item)}
                  img={item.img}
                  date={item.date}
                />
              );
            })}
          </div>
        </div>
      </div>
      <ClinicLicenceModal modal={open} closeModal={closeModal} />
      <FotoramaModal
        modal={showModal}
        gallery={gallery}
        closeModal={closeShowModal}
      />
    </>
  );
};

export default ClinicLicence;
