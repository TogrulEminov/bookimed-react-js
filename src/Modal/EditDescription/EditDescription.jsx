// import error from '../assets/download.png';
import { CiCircleInfo } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const EditDescription = ({
  modal,
  closeModal,
  handleFullChange,
  handleBriefChange,
  briefDescription,
  handleSaveAsDraft,
  handlePublish,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-0 z-[1000] px-3 justify-center items-center ${
        modal ? "flex" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}
      ></div>
      <div
        className="bg-white p-[40px] custom-animation inline-block  align-middle
      	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative   w-full  max-w-[1000px]"
      >
        <h3 className="text-[##171717] pr-14 font-medium text-3xl mb-4">
          Edit clinic's Brief and Full description
        </h3>
        <div>
          <div className="font-bold mb-4">Brief сlinic's description</div>
          <div
            class="border border-[#dfe1e5] items-center gap-2  rounded-md p-3 text-base font-normal
           text-gray-700 mb-5 flex"
          >
            <CiCircleInfo className="shrink-0" size={20} />

            <span>
              Start with a brief overview that describes your clinic in the best
              way. This description will appear on the first screen, when client
              will open the clinic's page. Maximum 700 characters. Make the
              content original and show the clinic's competitive advantages
              (clinic's awards, achievements, success rates, exceptional
              doctors, etc), has no mistakes, loud adjectives as "the best, the
              top, the leading, etc" with no evidence, links to other websites
            </span>
          </div>
          <div>
            <textarea
              placeholder="Text"
              value={briefDescription}
              onChange={handleBriefChange}
              className="w-full border resize-none rounded-md p-2 outline-none border-[#dee1e6]"
              name=""
              id=""
              cols="30"
              rows="6"
            ></textarea>
          </div>
        </div>
        <div>
          <div className="font-bold mb-4">Full сlinic's description</div>
          <div
            class="border border-[#dfe1e5] items-center gap-2  rounded-md p-3 text-base font-normal
           text-gray-700 mb-5 flex"
          >
            <CiCircleInfo className="shrink-0" size={20} />

            <span>
              Add more details about your clinic in the full description — 3,000
              characters max. Your achievements, statistics will help a patient
              to make a choice in your favor.
            </span>
          </div>
          <div className="mb-4">
            <textarea
              onChange={handleFullChange}
              placeholder="Text"
              className="w-full border resize-none rounded-md p-2 outline-none border-[#dee1e6]"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div
            class="border border-[#dfe1e5] items-center gap-2  rounded-md p-3 text-base font-normal
           text-gray-700 mb-5 flex"
          >
            <CiCircleInfo className="shrink-0" size={20} />

            <span>
              By clicking the Publish button, you agree to Bookimed's Terms &
              Editorial Policy and send your content to moderation. You'll get
              an email notification when a moderated content is approved or
              rejected.
            </span>
          </div>
        </div>
        <div className="w-full flex items-center justify-end gap-x-4">
          <button
            onClick={() => closeModal()}
            className="font-medium text-base leading-5 h-12 min-w-[200px] flex items-center cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveAsDraft}
            className="font-medium text-base leading-5 flex items-center h-12 min-w-[200px] cursor-pointer bg-transparent
         border border-[#fb765f] text-center rounded-[30px] justify-center text-[#fb765f] mr-4"
          >
            Save as draft
          </button>
          <button
            onClick={handlePublish}
            className="font-medium text-base leading-5 flex items-center h-12 min-w-[200px] cursor-pointer 
         border border-[#fb765f] text-white text-center rounded-[30px] justify-center bg-[#fb765f] mr-4"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDescription;
