import { useEffect, useState } from 'react';
import Icons from '../../assets/Icons/icons';

const ClinicsPhoto = ({ handleOpen }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem('imageArray'));
    if (storedArray) {
      setArray(storedArray);
    }
  }, []);
  return (
    <section className="relative" id="#clinics-photo">
      <div className="flex flex-wrap min-h-[300px] lg:min-h-full lg:h-[500px] border border-[#dfe1e5]">
        <div className="border border-[#dfe1e5] h-[250px] lg:h-full col-12 lg:col-lg-5 xl:col-xl-6">
          {array[0] ? (
            <img src={array[0]} className="w-full h-full object-cover" alt="" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col gap-y-3">
                <Icons.NoData className="mx-auto" />
                <span className="font-semibold">No data</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-12 lg:col-lg-7 xl:col-xl-6 h-full">
          <div className="flex flex-wrap h-full">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index + 2}
                className="border border-[#dfe1e5] col-12 sm:col-md-6 lg:col-lg-6 xl:col-xl-6 flex items-center justify-center h-[150px] lg:h-1/2 relative">
                {array.length >= index + 2 ? (
                  array[index + 1] ? (
                    <img
                      src={array[index + 1]}
                      className="w-full h-full object-cover"
                      alt={`Image ${index + 2}`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="flex flex-col gap-y-3">
                        <Icons.NoData className="mx-auto" />
                        <span className="font-semibold">No data</span>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="flex flex-col gap-y-3">
                      <Icons.NoData className="mx-auto" />
                      <span className="font-semibold">No data</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleOpen} className="absolute bottom-5 right-5">
        <Icons.camera />
      </button>
    </section>
  );
};

export default ClinicsPhoto;
