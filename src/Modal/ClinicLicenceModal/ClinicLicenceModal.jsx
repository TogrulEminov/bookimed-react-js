import { useState } from 'react';
import Icons from '../../assets/Icons/icons';
const ClinicLicenceModal = ({ modal, closeModal }) => {
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handlePost = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      const imageData = reader.result;
      const dataToStore = {
        id: Math.random().toString(),
        img: imageData,
        date: date,
      };
      const existingData = JSON.parse(localStorage.getItem('licences')) || [];
      const newData = [...existingData, dataToStore];
      localStorage.setItem('licences', JSON.stringify(newData));
      closeModal();
    };
  };
  return (
    <div
      className={`fixed inset-0 min-h-screen  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl   custom-animation inline-block max-h-[500px]  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-3 md:p-6  py-5 w-full  max-w-[600px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-lg lg:text-3xl">
            Add the Clinic's Licence
          </h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex  border-[#ddd] rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.Warning className="w-6 h-6" />
          <span className="text-base  w-[calc(100%-40px)] lg:ml-4">
            {' '}
            Please add the document, which allows you to provide medical
            services. It can be issued by your Ministry of Health or any
            relevant authority. We will show it to the patient on the website to
            boost trust to your facility. Formats accepted: .jpg, .jpeg, .png.
          </span>
        </div>
        <form onSubmit={handlePost} className="my-3">
          {image && (
            <figure className="w-full h-full rounded-xl mb-4 overflow-hidden">
              <img
                src={URL.createObjectURL(image)}
                alt="uploads"
                className="w-[250px] h-[300px] mx-auto object-cover"
              />
            </figure>
          )}

          <label
            htmlFor="images"
            className="w-[250px] h-[250px] flex items-center justify-center bg-[#f4f8fb]   mx-auto">
            <input
              type="file"
              id="images"
              className="sr-only"
              accept="image/*"
              onChange={handleFile}
            />
            <Icons.Upload className="w-20 h-20 mx-auto fill-[#c4d2d8] " />
          </label>
          <span className="text-[#171717] block w-full  my-2 text-center text-base">
            Upload a scanned copy of the document
          </span>

          <div className="flex items-center justify-center my-3">
            <span className="font-bold block w-fit mr-4 text-xl">
              Licence is valid till{' '}
            </span>
            <input
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="max-w-[200px] w-full p-2 border border-solid border-[#ddd]"
            />
          </div>

          <div className="w-full mt-4 my-2 flex    flex-wrap-reverse md:flex-nowrap gap-y-3   items-center justify-center ">
            <button
              type="button"
              onClick={closeModal}
              className="text-left w-fit hover:text-black text-[gray] mx-5 capitalize">
              close
            </button>
            <button
              type="submit"
              className="px-10 py-3 mx-5 bg-red-400 rounded-2xl text-white flex items-center justify-center lg:w-1/2 text-base">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClinicLicenceModal;
