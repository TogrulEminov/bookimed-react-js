import React, { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';
import EditNameModal from '../../Modal/EditNameModal';

const EditName = () => {
  const [details, setDetails] = useState(null);
  const getUserGeolocationDetails = () => {
    fetch(
      'https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572'
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  useEffect(() => {
    getUserGeolocationDetails();
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const edit = localStorage.getItem('editedValue') || 'Your name';

  return (
    <>
      <section className="my-3">
        <span className="w-full block">
          Location : {details?.country_name}({details?.country_code})
        </span>
        <div className="w-full my-4 flex flex-wrap gap-y-2 items-center">
          <span className="text-base font-bold">{edit}</span>
          <button
            onClick={handleOpen}
            className="border font-semibold md:ml-4 p-2 px-5 w-full max-w-full md:max-w-[100px] flex items-center justify-center text-[#a3cc0e] border-[#a3cc0e]  rounded-xl md:rounded-3xl">
            <Icons.edit className="w-3 h-3 mr-3 fill-[#a3cc0e]" />
            Edit
          </button>
        </div>
      </section>
      <EditNameModal closeModal={closeModal} modal={open} />
    </>
  );
};

export default EditName;
