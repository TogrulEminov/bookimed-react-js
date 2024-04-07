import React, { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';
import SelectOne from '../../Components/SelectOne';
import procedure from '../../resources/Procedure.json';
import ModalImg from '../../Components/ModalImg';
const BeforeAfter = ({ modal, closeModal }) => {
  const [selected, setSelected] = useState('');
  const [data, setData] = useState([]);
  const [doctors, setDoctors] = useState('');
  const [array, setArray] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('formState');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const MAX_IMAGES = 5;

  const fileBase64 = (image) => {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      const url = fileReader.result;
      const updatedArray = [...array, url];
      const trimmedArray = updatedArray.slice(-MAX_IMAGES);
      setArray(trimmedArray);
    };
    fileReader.readAsDataURL(image);
  };

  const handleImage = (e) => {
    let image = e.target.files[0];
    if (image) {
      fileBase64(image);
    }
  };

  const deleteItemByIndex = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
    const formData = {
      selected: selected,
      doctors: doctors,
      imageArray: array,
    };
    const existingData = JSON.parse(localStorage.getItem('beforeAfter')) || [];
    const newData = [...existingData, formData];
    localStorage.setItem('beforeAfter', JSON.stringify(newData));
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
        <form onSubmit={handleSubmit} className="row">
          <div className="lg:col-lg-6">
            <label
              htmlFor="file"
              className="w-full h-[300px]  flex items-center justify-center after:h-full    border border-solid relative border-[#ddd] bg-[#e7e7e7] after:absolute after:border-dashed after:border after:left-[calc(50% - .5px)] after:top-0 after:border-[#ddd]">
              <input
                type="file"
                id="file"
                accept="image/*"
                className="sr-only cursor-pointer"
                onChange={handleImage}
              />
              <span className="text-[#666] text-3xl relative z-10 text-center font-semibold">
                <Icons.Plus className="w-10 h-10 mx-auto mb-3 fill-[#999]" />
                Add photo
              </span>
              <span className="absolute left-20 bottom-1 text-[#171717]">
                Before
              </span>
              <span className="absolute right-20 bottom-1 text-[#171717]">
                After
              </span>
            </label>
          </div>
          <div className="lg:col-lg-6">
            <div className="flex flex-wrap gap-y-2">
              <label htmlFor="" className="block w-full h-fit">
                <span className="w-full block mb-3">Procedure</span>
                <SelectOne
                  title="Add procedure"
                  selected={selected}
                  data={procedure}
                  setSelected={setSelected}
                />
              </label>
              <label htmlFor="" className="block w-full h-fit">
                <span className="w-full block mb-3">Doctors</span>
                <SelectOne
                  title="Doctors"
                  selected={doctors}
                  data={data}
                  setSelected={setDoctors}
                />
              </label>
            </div>
          </div>
          <div className="lg:col-lg-12">
            <div className="flex my-4 items-center flex-wrap gap-y-4">
              {array?.slice(0, 5).map((itemUrl, index) => {
                return (
                  <ModalImg
                    onClick={() => deleteItemByIndex(index)}
                    img={itemUrl}
                    count={index + 1}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          <div className="lg:col-lg-12 my-4">
            <div className="flex items-center justify-center">
              <button className="w-full max-w-[200px] mx-auto text-white h-[48px] rounded-2xl bg-red-600">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeforeAfter;
