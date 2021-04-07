const AdminHeader = () => (
  <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#">
          <i className="fa fa-bars" />
        </a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <span>User</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <button type="button" className="dropdown-item dropdown">
            My Account
          </button>
        </div>
      </li>
    </ul>
  </nav>
);

export default AdminHeader;
