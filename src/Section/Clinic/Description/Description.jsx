import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import EditDescription from "../../../Modal/EditDescription/EditDescription";

const Description = () => {
  const [open, setOpen] = useState(false);
  const [briefDescription, setBriefDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  useEffect(() => {
    const storedBriefDescription = localStorage.getItem("briefDescription");
    const storedFullDescription = localStorage.getItem("fullDescription");

    if (storedBriefDescription) {
      setBriefDescription(storedBriefDescription);
    }

    if (storedFullDescription) {
      setFullDescription(storedFullDescription);
    }
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleBriefChange = (e) => {
    const newValue = e.target.value;
    setBriefDescription(newValue);
    localStorage.setItem("briefDescription", newValue);
  };

  const handleFullChange = (event) => {
    const newValue = event.target.value;
    setFullDescription(newValue);
    localStorage.setItem("fullDescription", newValue);
  };

  const handlePublish = () => {
    setIsPublished(true);
    setIsDraft(false);
    closeModal();
  };

  const handleSaveAsDraft = () => {
    setIsDraft(true);
    closeModal();
    closeModal();
  };

  return (
    <>
      <div>
        <div className="font-bold mb-4 text-lg">Brief сlinic's description</div>
        <div className="mb-4">
          <blockquote>
            <p>{briefDescription}</p>
          </blockquote>
        </div>
        {isDraft ? (
          <div className="text-base leading-tight font-bold flex items-center mb-6 text-[rgba(0,0,0,.5)]">
            <span className="bg-[rgba(0,0,0,.5)] w-[18px] h-[18px] rounded-full mr-2 block"></span>{" "}
            Content Saved as a draft
          </div>
        ) : (
          <div className="text-base leading-tight font-bold flex items-center mb-6 text-[#fa765f]">
            <span className="bg-[#fa765f] w-[18px] h-[18px] rounded-full mr-2 block"></span>{" "}
            {isPublished ? "Content Published" : "Content on moderation"}
          </div>
        )}
        <div className="font-bold mb-4 text-lg">Full сlinic's description</div>
        <div className="mb-4">
          <blockquote>
            <p>{fullDescription}</p>
          </blockquote>
        </div>
      </div>
      <button
        onClick={handleOpen}
        className="font-medium text-base leading-5 text-[#a3cc0e] px-4 py-2 border border-[#a3cc0e] rounded-full flex items-center"
      >
        <MdEdit className="me-1" size={20} /> Edit
        <span className="ms-1">clinic's Brief and Full description</span>
      </button>
      {/* <div
        class="border border-[#dfe1e5] items-center gap-2  rounded-md p-3 text-base font-normal my-3
           text-gray-700 mb-5 flex"
      >
        <CiCircleInfo className="shrink-0" size={20} />

        <span>Answer a few questions to tell more about your clinic!</span>
      </div>
      <button
        
        className="font-medium text-base leading-5 text-[#a3cc0e] px-4 py-2 border border-[#a3cc0e] rounded-full flex items-center"
      >
        <span className="ms-1">Take a survey</span>
      </button> */}
      <EditDescription
        briefDescription={briefDescription}
        closeModal={closeModal}
        modal={open}
        handleBriefChange={handleBriefChange}
        handleFullChange={handleFullChange}
        handlePublish={handlePublish}
        handleSaveAsDraft={handleSaveAsDraft}
      />
    </>
  );
};

export default Description;
