import Router from 'next/router';
import AdminLayoutHoc from 'components/Layout/AdminLayoutHoc';

const Index = () => (
  <AdminLayoutHoc
    contentTitle="Dashboards"
    contentTitleButton={<i className="fa fa-2x fa-home" />}
  >
    HOME
  </AdminLayoutHoc>
);

Index.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/scans',
    });
    res.end();
  } else {
    Router.push('/scans');
  }
  return {};
};

export default Index;
