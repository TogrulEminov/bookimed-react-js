import { useEffect, useState } from 'react';
import DoctorsModal from '../../../Modal/DoctorModal/DoctorsModal';
import Icons from '../../../assets/Icons/icons';
import useToggle from '../../../Hooks/useToggle';
import DoctorsCard from '../../../Components/DoctorsCard';

const Doctors = () => {
  const [open, handleOpen, closeModal] = useToggle();
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('formState'));
    if (storedArray) {
      setData(storedArray);
    }
  }, []);

  const deleteItemByIndex = (index) => {
    const newArray = [...data];
    newArray.splice(index, 1);
    setData(newArray);
    localStorage.setItem('formState', JSON.stringify(newArray));
  };
  return (
    <>
      <div className="bg-white rounded-3xl mt-3 md:shadow-own1 p-3 md:p-8 ">
        <h3 className="font-semibold text-2xl mb-5">Doctors (0)</h3>
        <div className="row gap-y-2">
          <div className="col-12 xl:col-xl-3 lg:col-lg-4 md:col-md-6">
            <button
              onClick={handleOpen}
              className="w-full h-[200px] border-2 border-[#a3cc0e] flex items-center justify-center">
              <div className="w-fit h-fit text-center">
                <Icons.Plus className="fill-[#a3cc0e] mx-auto mb-2 w-10 h-10" />
                <span className="font-semibold text-lg text-[#a3cc0e]">
                  Add Doctor
                </span>
              </div>
            </button>
          </div>
          {data &&
            data?.map((item, index) => {
              const year = new Date().getFullYear() - item?.year;
              return (
                <DoctorsCard
                  deleteItemByIndex={() => deleteItemByIndex(index)}
                  key={index}
                  img={item?.img}
                  name={item?.name}
                  year={year}
                />
              );
            })}
        </div>
      </div>
      <DoctorsModal modal={open} closeModal={closeModal} />
    </>
  );
};

export default Doctors;
