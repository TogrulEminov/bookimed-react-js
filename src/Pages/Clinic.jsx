import { Link, NavLink } from 'react-router-dom';
import Progress_bar from '../Components/ProgressBar';
import UploadImage from '../Modal/UploadImage';
import { useEffect, useState } from 'react';
import ClinicsPhoto from '../Section/Clinic/ClinicsPhoto';
import WarningSection from '../Section/Clinic/WarningSection';
import EditName from '../Section/Clinic/EditName';
import EditFoundation from '../Section/Clinic/EditFoundation';
import Icons from '../assets/Icons/icons';
import Doctors from '../Section/Clinic/Doctors/Doctors';

const Clinic = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const array = JSON.parse(localStorage.getItem('imageArray'));
  const edit =
    localStorage.getItem('editedValue') ||
    localStorage.getItem('editedValueFoundation');
  return (
    <>
      <div className="row gap-y-6 w-full">
        <div className="col-12 md:col-md-12 lg:col-lg-4 xl:col-xl-3">
          <h3 className="font-semibold text-2xl mb-6">What’s next?</h3>
          <div className="rounded-xl shadow-own1 px-6 py-8 mt-4">
            <span className="bg-[#dcfce7] rounded-full mb-3 text-base leading-4 text-[#15803d] w-8 h-8  flex items-center justify-center">
              1
            </span>
            <h6 className="text-xl mb-1 font-semibold">
              Sign the partnership agreement
            </h6>
            <p className="text-[#737373] font-normal text-[14px] mb-8">
              Click the button below to review and e-sign it
            </p>
            <Link
              to="/"
              target="_blank"
              className="flex justify-center items-center py-2.5  text-white px-4 font-semibold text-[14px] rounded-3xl bg-[#15803d]">
              Check the agreement
            </Link>
          </div>
          <div className="rounded-xl shadow-own1 px-6 py-8 mt-4 lg:sticky top-[80px]">
            <h3 className="flex items-center justify-between font-bold text-[#171717] text-xl">
              Your profile's rate
              <span className="text-[#f85e43]  text-2xl">40%</span>
            </h3>
            <p className="text-[#737373] mt-1 font-normal text-[14px]">
              Get more from Bookimed by setting up the basic data of your
              clinic’s page.
            </p>
            <div className="my-5">
              <Progress_bar />
            </div>
            <ul>
              <li>
                <NavLink
                  to="#clinics-photo"
                  className={`py-3.5 hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm  ${
                    array?.length >= 1 ? 'text-[#15803d]' : 'text-[#171717]'
                  }`}>
                  <span
                    className={`border flex items-center justify-center rounded-full w-[14px] h-[14px] ${
                      array?.length >= 1 ? 'text-[#15803d]' : 'border-[#737373]'
                    } `}>
                    {array?.length >= 1 ? (
                      <Icons.check className="border-none" />
                    ) : (
                      ''
                    )}
                  </span>
                  <span className="ml-4"> Clinic's photo</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#clinics-photo"
                  className={`py-3.5 hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm  ${
                    edit ? 'text-[#15803d]' : 'text-[#171717]'
                  }`}>
                  <span
                    className={`border flex items-center justify-center rounded-full w-[14px] h-[14px] ${
                      edit ? 'text-[#15803d]' : 'border-[#737373]'
                    } `}>
                    {edit ? <Icons.check className="border-none" /> : ''}
                  </span>
                  <span className="ml-4">Basic information</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5 hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4">Basic information</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5 hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4"> Packages</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5 hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4"> Specialties</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5  hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4">Descriptions</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5 hover:bg-[#f0fdf4]  px-4 font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4">Accreditations</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5 px-4 hover:bg-[#f0fdf4]  font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4"> Doctors</span>
                </NavLink>
              </li>
              <li>
                <NavLink className="py-3.5 hover:bg-[#f0fdf4] px-4 font-medium flex items-center text-sm text-[#171717]">
                  <span className="border rounded-full w-[14px] h-[14px] border-[#737373] block"></span>
                  <span className="ml-4"> License</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 md:col-md-12 lg:col-lg-8 xl:col-xl-9">
          <div className="bg-white rounded-3xl md:shadow-own1 p-3 md:p-8">
            <ClinicsPhoto handleOpen={handleOpen} />
            <WarningSection />
            <EditName />
            <EditFoundation />
          </div>
          <Doctors />
        </div>
      </div>

      <UploadImage modal={open} closeModal={closeModal} />
    </>
  );
};

export default Clinic;
