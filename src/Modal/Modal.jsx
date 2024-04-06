import error from '../assets/download.png';
import { useNavigate } from 'react-router-dom';
const Modal = ({ modal, closeModal }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`fixed inset-0 z-[1000] px-3 justify-center items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl  custom-animation inline-block  align-middle	shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-1 md:p-3 py-5 w-full  max-w-[635px]">
        <img src={error} className="w-14 h-14 mb-4" alt="" />
        <h3 className="text-[##171717] pr-14 font-medium text-3xl mb-4">
          Insufficiant balance. Please top up to access paid leads
        </h3>
        <div className="mb-10">
          <p>
            Your balance is <b>0</b>
          </p>
          <p>
            {' '}
            Please top up your balance. You will access this lead automatically.{' '}
          </p>
        </div>
        <div className="w-full flex items-center justify-end gap-x-4">
          <button
            onClick={() => closeModal()}
            className="cursor-pointer py-5 px-8  bg-transparent text-[#15803d] border-2 font-bold rounded-[28px] border-[#15803d] outline-none flex items-center justify-center">
            No thanks
          </button>
          <button
            onClick={() => navigate('/clinic')}
            className="cursor-pointer py-5 px-8  bg-[#15803d] text-[white] border-2 font-bold rounded-[28px] border-[#15803d] outline-none flex items-center justify-center">
            Top up balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
