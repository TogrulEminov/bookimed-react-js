import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';
import BreadCrumb from '../Components/BreadCrumb';

const MainRoot = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="relative max-w-full lg:fixed lg:max-w-[150px] w-full">
        <Header />
      </div>
      <div className="lg:max-w-[calc(100%-150px)] lg:ml-[150px]   w-full h-full">
        <div className="bg-[#a3cc0e] h-[50px] hidden lg:block lg:fixed top-0 w-full z-[999]"></div>
        <div className="py-5 lg:pt-14 px-5 ">
          <BreadCrumb />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainRoot;
