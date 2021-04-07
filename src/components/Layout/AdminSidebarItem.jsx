import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

const AdminSidebarItem = ({ router, name, to, icon }) => (
  <li className="nav-item">
    <Link href={to}>
      <a
        className={['nav-link', router.pathname === to ? 'active' : ''].join(
          ' ',
        )}
      >
        <i className={`nav-icon fa ${icon}`} />
        <p>{name}</p>
      </a>
    </Link>
  </li>
);

AdminSidebarItem.propTypes = {
  name: PropTypes.string,
  router: PropTypes.objectOf(PropTypes.any),
  to: PropTypes.string,
  icon: PropTypes.string,
};

AdminSidebarItem.defaultProps = {
  name: 'Home',
  router: {},
  to: '/',
  icon: 'fa-home',
};

export default withRouter(AdminSidebarItem);
