import React, { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';
import SelectOne from '../../Components/SelectOne';
const BeforAfterSecond = ({ modal, closeModal, deleteItemByIndex, index }) => {
  const [selected, setSelected] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [numbers, setNumbers] = useState({
    age: '',
    year: '',
  });

  const [newSelected, setNewSelected] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem('newSelected');
    if (storedData) {
      setNewSelected(JSON.parse(storedData));
    }
  }, []);
  useEffect(() => {
    const storedData = localStorage.getItem('formState');
    if (storedData) {
      setDoctors(JSON.parse(storedData));
    }
  }, []);

 

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNumbers({ ...numbers, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();

    const formData = {
      selected: newSelected.selected,
      year: numbers.year,
      age: numbers.age,
      imageArray: newSelected.imageArray,
      doctors: selected || newSelected.doctors,
    };

    const existingData = JSON.parse(localStorage.getItem('beforeAfter')) || [];
    const indexToUpdate = existingData.findIndex(
      (item) => item.selected === newSelected.selected
    );
    if (indexToUpdate !== -1) {
      existingData[indexToUpdate] = formData;
    } else {
      existingData.push(formData);
    }
    localStorage.setItem('beforeAfter', JSON.stringify(existingData));
    closeModal();
  };
  return (
    <div
      className={`fixed inset-0  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl   custom-animation inline-block max-h-[600px] h-full  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-6  py-5 w-full  max-w-[600px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-3xl">Add Before & After Photo</h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border border-[#ddd] rounded-xl p-4  items-center mb-4 flex flex-wrap ">
          <Icons.Warning />
          <span className="text-base  ml-4">
            Add as many high quality photos as you can so clients can see your
            works in every detaill. Maximum file size is 10 MB.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="row gap-y-4">
          <div className="lg:col-lg-6">
            <figure
              htmlFor="file"
              className="w-full h-[300px]  flex items-center justify-center border border-solid relative border-[#ddd] bg-[#e7e7e7]">
              <img
                src={
                  newSelected &&
                  newSelected.imageArray &&
                  newSelected.imageArray.length > 0
                    ? newSelected.imageArray[0]
                    : ''
                }
                alt={newSelected?.selected}
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="lg:col-lg-6">
            <div className="flex flex-wrap gap-y-2">
              <label htmlFor="" className="block w-full h-fit">
                <span className="w-full block mb-3">Procedure</span>
                <SelectOne disabled={true} title={newSelected.selected} />
              </label>
              <label htmlFor="" className="block w-full h-fit">
                <span className="w-full block mb-3">Doctors</span>
                <SelectOne
                  title="Doctors"
                  selected={selected}
                  data={doctors}
                  setSelected={setSelected}
                />
              </label>
              <label htmlFor="" className="block w-full h-fit">
                <span className="w-full block mb-3">
                  Year of performing (if you do not specify the year, you will
                  not participate in the Bookimed Best Plastic Surgeon Contest
                  2020)
                </span>
                <input
                  type="number"
                  name="year"
                  value={numbers.year}
                  onChange={handleChange}
                  className="p-2 border border-solid w-full outline-none border-[#ddd]"
                />
              </label>
              <label htmlFor="" className="block w-full h-fit">
                <span className="w-full block mb-3">
                  Patient’s age (optional)
                </span>
                <input
                  type="number"
                  name="age"
                  value={numbers.age}
                  onChange={handleChange}
                  className="p-2 border border-solid w-full outline-none border-[#ddd]"
                />
              </label>
            </div>
          </div>
          <div className="lg:col-lg-6">
            <div className="flex flex-wrap gap-y-2"></div>
          </div>

          <div className="lg:col-lg-12 my-4">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={deleteItemByIndex}
                className="w-full max-w-[200px] mx-auto text-white h-[48px] rounded-2xl bg-red-600">
                Delete{' '}
              </button>
              <button
                type="submit"
                className="w-full max-w-[200px] mx-auto text-white h-[48px] rounded-2xl bg-greenown">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeforAfterSecond;
