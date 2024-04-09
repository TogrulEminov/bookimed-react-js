// BeforeCard.jsx
import Icons from '../assets/Icons/icons';
import BeforeModal2 from '../Modal/BeforeModal/BeforeModal2';
import useToggle from '../Hooks/useToggle';

const BeforeCard = ({ img, handleAdd, deleteItemByIndex,add, index }) => {
  const [open, handleOpen, closeModal] = useToggle();

  return (
    <>
      <figure className="relative h-[200px] overflow-hidden w-full rounded-md">
        <img src={img} alt="my before" className="w-full object-cover h-full" />
        <div className="w-full h-full absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        <button
          onClick={() => {
            handleOpen();
            handleAdd();
          }}
          className="absolute top-3 right-3">
          <Icons.Edit className="fill-greenown w-6 h-6" />
        </button>
      </figure>
      <BeforeModal2
        modal={open}
        add={add}
        index={index}
        closeModal={closeModal}
        deleteItemByIndex={deleteItemByIndex}
      />
    </>
  );
};

export default BeforeCard;
