import PropTypes from 'prop-types';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminControlSidebar from './AdminControlSidebar';
import AdminContent from './AdminContent';

const AdminLayoutHoc = ({ children, contentTitle }) => (
  <div className="wrapper">
    <AdminHeader />
    <AdminSidebar />
    <AdminContent title={contentTitle} titleButton={null}>
      {children}
    </AdminContent>
    <AdminControlSidebar />
  </div>
);

AdminLayoutHoc.propTypes = {
  children: PropTypes.node,
  contentTitle: PropTypes.string,
};

AdminLayoutHoc.defaultProps = {
  children: null,
  contentTitle: '',
};

export default AdminLayoutHoc;
