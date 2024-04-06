import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { FaAngleRight } from 'react-icons/fa';
import { ROUTES } from '../Routes/Routes';
const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs(ROUTES);
  const { pathname } = useLocation();
  return (
    <div className="py-5">
      <ul className="flex items-center">
        {breadcrumbs.map(({ match, breadcrumb }, index) => {
          return (
            <li key={index} className="flex items-center gap-x-2">
              {index === breadcrumbs.length - 1 ? (
                <span
                  className={
                    match.pathname === pathname
                      ? 'text-[#a3cc0e] font-bold'
                      : ''
                  }>
                  {match.pathname === '/'
                    ? "Partner's cabinet"
                    : breadcrumb.props.children}
                </span>
              ) : (
                <Link
                  to={match.pathname}
                  className="flex items-center gap-x-2 transition-all hover:opacity-50">
                  {match.pathname === '/'
                    ? "Partner's cabinet"
                    : breadcrumb.props.children}
                  <FaAngleRight />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadCrumb;
