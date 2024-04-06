import { useEffect, useState } from 'react';
import Icons from '../assets/Icons/icons';

const EditNameModal = ({ modal, closeModal }) => {
  const [editedValue, setEditedValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('editedValue', editedValue);
    closeModal();
  };

  useEffect(() => {
    const storedValue = localStorage.getItem('editedValue');
    if (storedValue !== null && storedValue !== undefined) {
      setEditedValue(storedValue);
    }
  }, []);
  const handleCancel = () => {
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
      <div className="bg-white rounded-xl   custom-animation inline-block max-h-[400px]  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-3 md:p-6  py-5 w-full  max-w-[600px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-lg lg:text-3xl">
            Edit clinic's photos
          </h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex  border-[#ddd] rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.Warning className="w-6 h-6" />
          <span className="text-base  lg:ml-4">
            {' '}
            Write the unique clinic’s name in English. Use the same words that
            clients would use to search for your clinic.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <div className="my-4 ">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-base">
              Title
            </label>
            <input
              type="text"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="p-2 border w-full block border-[#ddd]"
              maxLength="50"
            />
          </div>
          <span className="text-[gray] my-2 block float-right text-base">
            {editedValue?.length}/50
          </span>
          <div className="w-full mt-4 my-2 flex  flex-wrap-reverse md:flex-nowrap gap-y-3   items-center justify-center ">
            <button
              onClick={handleCancel}
              type="button"
              className="text-left hover:text-black text-[gray] mx-5 capitalize lg:w-1/2">
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

export default EditNameModal;
