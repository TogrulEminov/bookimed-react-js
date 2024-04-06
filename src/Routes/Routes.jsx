import Clinic from '../Pages/Clinic';
import Lead from '../Pages/Lead';
import MainRoot from '../Router/MainRoot';

export const ROUTES = [
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: 'available-leads',
        element: <Lead />,
      },
      {
        path: 'clinic',
        element: <Clinic />,
      },
    ],
  },
];
