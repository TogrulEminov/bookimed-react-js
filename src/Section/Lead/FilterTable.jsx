import { useState } from 'react';
import Icons from '../../assets/Icons/icons';
import { PiSpinnerGapBold } from 'react-icons/pi';
import Modal from '../../Modal/Modal';

const FilterTable = ({ data, loading }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <table className="w-full my-3">
        <thead>
          <tr className="bg-[#fafafa] w-full">
            <th scope="col">Created</th>
            <th scope="col">Country</th>
            <th scope="col">Language</th>
            <th scope="col">Prefered country</th>
            <th scope="col">Departments</th>
            <th scope="col">Diagnosis</th>
            <th scope="col " className="flex items-center">
              Attach <Icons.ArrowDown />
            </th>
            <th scope="col">Cost</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="w-full border-collapse">
          {loading ? (
            <tr className="my-5">
              <td colSpan="9" className="text-center">
                <div className="flex items-center justify-center w-full my-4">
                  <PiSpinnerGapBold className="animate-spin w-4 h-4" />
                </div>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr className="bg-red-900">
              <td colSpan="9" className="text-center text-white py-4">
                Data not found
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b border-b-[#ddd] last:border-b-0">
                <td data-label="createdAt" className="px-4 py-3.5">
                  {item?.createdAt}
                </td>
                <td data-label="country">
                  <span className='flex items-center justify-end gap-x-2 xl:justify-normal'>
                    <img
                      src={item?.flag}
                      className="w-4 h-4"
                      alt={item?.country}
                    />
                    {item?.country}
                  </span>
                </td>
                <td data-label="language">{item?.language}</td>
                <td data-label="prefered">{item?.prefered || 'N/A'}</td>
                <td data-label="departments">{item?.departments}</td>
                <td data-label="diognostic">{item?.diognostic}</td>
                <td data-label="attach">{item?.attach}</td>
                <td data-label="cost">{item?.cost}</td>
                <td data-label="Lead">
                  <button
                    onClick={handleOpen}
                    className="bg-[#15803d] px-4 py-1.5 text-base text-white rounded-xl">
                    Get Lead
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Modal modal={open} closeModal={closeModal} />
    </>
  );
};

export default FilterTable;
