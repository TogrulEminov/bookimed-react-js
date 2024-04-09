import SelectOne from '../../Components/SelectOne';
import { useBeforeStore } from '../../zustand/ZustandOne';
import Icons from '../../assets/Icons/icons';
import noImage from '../../assets/noImage.jpg';
const BeforeModal2 = ({ modal, closeModal, add, deleteItemByIndex }) => {
  const { beforeState, uptadeBeforeState, resetBeforeState } = useBeforeStore();
  const setDoctors = (newDoctors) => {
    uptadeBeforeState({
      value: { ...beforeState.value, doctors: newDoctors },
    });
  };

  const doctors = JSON.parse(localStorage.getItem('formState'));

  const handleYearChange = (e) => {
    const newName = e.target.value;
    uptadeBeforeState({ value: { ...beforeState.value, year: newName } });
  };

  const handleAgeChange = (e) => {
    const newName = e.target.value;
    uptadeBeforeState({ value: { ...beforeState.value, age: newName } });
  };

  const handleSubmit = () => {
    const storedArray = JSON.parse(localStorage.getItem('beforeAfter')) || [];
    const indexToEdit = storedArray.findIndex(
      (item) => item.procedure === add.procedure
    );
    if (indexToEdit !== -1) {
      storedArray[indexToEdit] = {
        procedure: add.procedure,
        doctors: beforeState.value.doctors,
        images: add.images,
        year: beforeState.value.year,
        age: beforeState.value.age,
      };
      localStorage.setItem('beforeAfter', JSON.stringify(storedArray));
    }
    resetBeforeState();
    closeModal();
  };
  return (
    <div
      className={`fixed min-h-screen inset-0  z-[1000] px-3 justify-center overflow-y-auto items-center ${
        modal ? 'flex' : 'hidden'
      }`}>
      <div
        className="fixed inset-0 -z-[1] bg-opacity bg-[rgba(0,0,0,0.5)]"
        onClick={() => closeModal()}></div>
      <div className="bg-white rounded-xl custom-animation inline-block max-h-[600px] h-full align-middle shadow-[0 12px 15px 0 rgba(0, 0, 0, 0.25)] overflow-y-auto relative p-3 md:p-6 py-5 w-full max-w-[1000px]">
        <div className="flex items-center justify-between my-3">
          <h3 className="font-semibold text-lg lg:text-3xl">
            Add Before & After Photo
          </h3>
          <button className="text-[gray] " onClick={closeModal}>
            <Icons.Close className="w-8 h-8" />
          </button>
        </div>
        <div className="border flex border-[#ddd]  rounded-xl p-4 flex-wrap gap-y-2 lg:flex-nowrap items-center mb-4">
          <Icons.Warning className="w-6 h-6" />
          <span className="text-base ml-3 w-[calc(100%-40px)]">
            Give as much information about the doctor as possible to build
            patient confidence.
          </span>
        </div>

        <div className="row">
          <div className="lg:col-lg-6">
            <div>
              <figure className="w-full relative  h-[250px] border rounded-sm bg-[#e7e7e7] border-[#ababab]">
                <img
                  src={add?.images || noImage}
                  alt="my preview"
                  className="w-full object-cover h-full"
                />
              </figure>
            </div>
          </div>
          <div className="lg:col-lg-6">
            <label htmlFor="" className="block my-2">
              <span className="mb-2 block">Procedure</span>
              <SelectOne disabled={true} title={add?.procedure} />
            </label>
            <label htmlFor="" className="block my-2">
              <span className="mb-2 block">Doctors</span>
              <SelectOne
                title="Select doctors"
                data={doctors}
                selected={beforeState.value.doctors}
                setSelected={setDoctors}
              />
            </label>
            <label htmlFor="" className="block my-2">
              <span className="mb-2 block">
                Year of performing (if you do not specify the year, you will not
                participate in the Bookimed Best Plastic Surgeon Contest 2020)
              </span>
              <input
                value={beforeState.value.year}
                onChange={handleYearChange}
                type="number"
                placeholder="Year"
                className="block w-full border border-[#ddd] p-2 text-[#171717]"
              />
            </label>
            <label htmlFor="" className="block my-2">
              <span className="mb-2 block">Patient’s age (optional)</span>
              <input
                type="number"
                value={beforeState.value.age}
                onChange={handleAgeChange}
                placeholder="Patient’s age"
                className="block w-full border border-[#ddd] p-2 text-[#171717]"
              />
            </label>
          </div>
          <div className="col-12">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  deleteItemByIndex();
                  closeModal();
                }}
                className="max-w-[300px] w-full border rounded-3xl flex items-center justify-center bg-red-400 p-2 mx-auto my-4 text-white text-lg">
                Delete
              </button>
              <button
                onClick={handleSubmit}
                className="max-w-[300px] w-full border rounded-3xl flex items-center justify-center bg-green-600 p-2 mx-auto my-4 text-white text-lg">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeModal2;
