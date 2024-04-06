import { useState } from 'react';
import Icons from '../../assets/Icons/icons';
import FoundationModal from '../../Modal/FoundationModal';

const EditFoundation = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const values = JSON.parse(
    localStorage.getItem('editedValueFoundation') || '{}'
  );
  return (
    <>
      <section className="my-3">
        <div className="row gap-y-2 lg:gap-x-1">
          <div className="col-12  md:col-md-6 lg:col-lg-3 lg:p-0">
            <div className="w-full border py-1 border-[#ddd] rounded-xl flex flex-col justify-center items-center">
              <h6 className="font-semibold text-base mb-1">
                {values?.foundationYear || 0}
              </h6>
              <span className="text-[gray] text-sm">Year of foundation</span>
            </div>
          </div>
          <div className="col-12 md:col-md-6 lg:col-lg-3 lg:p-0">
            <div className="w-full border py-1 border-[#ddd] rounded-xl flex flex-col justify-center items-center">
              <h6 className="font-semibold text-base mb-1">
                {values?.departments || 0}
              </h6>
              <span className="text-[gray] text-sm">Departments</span>
            </div>
          </div>
          <div className="col-12 md:col-md-6 lg:col-lg-2 lg:p-0">
            <div className="w-full border py-1 border-[#ddd] rounded-xl flex flex-col justify-center items-center">
              <h6 className="font-semibold text-base mb-1">
                {values?.doctors || 0}
              </h6>
              <span className="text-[gray] text-sm">Doctors</span>
            </div>
          </div>
          <div className="col-12 md:col-md-6 lg:col-lg-1 lg:p-0">
            <div className="w-full border py-1 border-[#ddd] rounded-xl flex flex-col justify-center items-center">
              <h6 className="font-semibold text-base mb-1">{values?.beds || 0}</h6>
              <span className="text-[gray] text-sm">Beds</span>
            </div>
          </div>
          <div className="col-12 md:col-md-6 lg:col-lg-2 lg:p-0">
            <div className="w-full border py-1 border-[#ddd] rounded-xl flex flex-col justify-center items-center">
              <h6 className="font-semibold text-base mb-1">
                {values?.patients || 0}
              </h6>
              <span className="text-[gray] text-[13px]">
                Patient for a year
              </span>
            </div>
          </div>
          <div className="col-12 md:col-md-6 lg:col-lg-12">
            <button
              onClick={handleOpen}
              className="border max-w-full lg:max-w-[100px] w-full font-semibold md:ml-4  md:py-3 p-2 px-5 flex items-center justify-center text-[#a3cc0e] border-[#a3cc0e] rounded-xl  md:rounded-2xl">
              <Icons.edit className="w-3 h-3 mr-3 fill-[#a3cc0e]" />
              Edit
            </button>
          </div>
        </div>
      </section>
      <FoundationModal closeModal={closeModal} modal={open} />
    </>
  );
};

export default EditFoundation;
