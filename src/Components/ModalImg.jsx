import Icons from '../assets/Icons/icons';

const ModalImg = ({ onClick, img, count }) => {
  return (
    <div className="w-20 h-20 group relative md:mr-3">
      <span className=" w-4 h-4 flex items-center z-30 justify-center rounded-full absolute left-1  top-1 bg-white text-black text-[10px]">
        {count}
      </span>
      <button
        onClick={onClick}
        className="text-white hidden group-hover:block absolute top-1 right-1 z-20">
        <Icons.Close className="text-white w-5 h-5" />
      </button>
      <div className="w-full h-full bg-[rgb(0,0,0)] absolute z-10 inset-0 hidden group-hover:block"></div>
      <img
        src={img}
        alt="img"
        className="w-full rounded-sm h-full object-cover"
      />
    </div>
  );
};

export default ModalImg;
