import Link from 'next/link';
import PropTypes from 'prop-types';
import AdminSidebarItem from 'components/Layout/AdminSidebarItem';

const AdminSidebar = ({ projectName }) => (
  <aside
    className="main-sidebar sidebar-dark-primary elevation-4"
    style={{ height: '100vh', position: 'fixed' }}
  >
    <Link href="/">
      <a className="brand-link mx-2">
        <span className="brand-text font-weight-light">{projectName}</span>
      </a>
    </Link>

    <div className="sidebar">
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <AdminSidebarItem
            to="/scans/create"
            name="New Scan"
            icon="fa fa-plus"
          />
          <AdminSidebarItem to="/scans" name="Scans" />
        </ul>
      </nav>
    </div>
  </aside>
);

AdminSidebar.propTypes = {
  projectName: PropTypes.string,
};

AdminSidebar.defaultProps = {
  projectName: 'Scan Engine UI',
};

export default AdminSidebar;
