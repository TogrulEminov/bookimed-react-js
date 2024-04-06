import { useEffect, useState } from 'react';
import Icons from '../assets/Icons/icons';

const FoundationModal = ({ modal, closeModal }) => {
  const defaultEditedValue = {
    foundationYear: new Date().toISOString().split('T')[0],
    departments: 0,
    doctors: 0,
    beds: 0,
    patients: 0,
  };

  const [editedValue, setEditedValue] = useState(defaultEditedValue);

  const editChange = (e) => {
    const { name, value } = e.target;
    setEditedValue({
      ...editedValue,
      [name]: name === 'foundationYear' ? value : parseInt(value, 10) || 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('editedValueFoundation', JSON.stringify(editedValue));
    closeModal();
  };

  useEffect(() => {
    const storedValue = localStorage.getItem('editedValueFoundation');
    if (storedValue !== null && storedValue !== undefined) {
      setEditedValue(JSON.parse(storedValue));
    }
  }, []);

  const handleCancel = () => {
    closeModal();
    setEditedValue({
      foundationYear: new Date().toISOString().split('T')[0],
      departments: 0,
      doctors: 0,
      beds: 0,
      patients: 0,
    });
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={closeModal}></div>
      <div className="bg-white rounded-xl custom-animation inline-block max-h-[400px] align-middle shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-6 py-5 w-full max-w-[600px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-lg lg:text-3xl">
            Edit Clinic’s Info
          </h3>
          <button className="text-[gray]" onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex border-[#ddd] rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.Warning className="w-6 h-6" />
          <span className="text-base lg:ml-4">
            The more details you add, the more chances that clients will choose
            your clinic.
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <div className="my-4 flex items-center flex-wrap">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-base lg:col-lg-4">
              Year of foundation
            </label>
            <input
              type="date"
              name="foundationYear"
              value={editedValue.foundationYear}
              onChange={editChange}
              min="2000-01-01"
              className="p-2 border w-full block border-[#ddd] lg:col-lg-8"
            />
          </div>
          <div className="my-4 flex items-center flex-wrap">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-base lg:col-lg-4">
              Departments
            </label>
            <input
              type="text"
              value={editedValue.departments}
              onChange={editChange}
              name="departments"
              className="p-2 border w-full block border-[#ddd] lg:col-lg-8"
              maxLength="50"
            />
          </div>
          <div className="my-4 flex items-center flex-wrap">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-base lg:col-lg-4">
              Doctors
            </label>
            <input
              type="text"
              name="doctors"
              value={editedValue.doctors}
              onChange={editChange}
              className="p-2 border w-full block border-[#ddd] lg:col-lg-8"
              maxLength="50"
            />
          </div>
          <div className="my-4 flex items-center flex-wrap">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-base lg:col-lg-4">
              Beds
            </label>
            <input
              type="text"
              name="beds"
              value={editedValue.beds}
              onChange={editChange}
              className="p-2 border w-full block border-[#ddd] lg:col-lg-8"
              maxLength="10"
            />
          </div>
          <div className="my-4 flex items-center flex-wrap">
            <label
              htmlFor="Title"
              className="block mb-2 font-semibold text-base lg:col-lg-4">
              Patients per year
            </label>
            <input
              type="text"
              name="patients"
              value={editedValue.patients}
              onChange={editChange}
              className="p-2 border w-full block border-[#ddd] lg:col-lg-8"
              maxLength="10"
            />
          </div>

          <div className="w-full mt-4 my-2 flex flex-wrap-reverse md:flex-nowrap gap-y-3 items-center justify-center">
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

export default FoundationModal;
