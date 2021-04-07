import AdminLayoutHoc from 'components/Layout/AdminLayoutHoc';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // ADD API FOR FETCHING SCANS
  }, []);
  return (
    <AdminLayoutHoc contentTitle="Scans" contentTitleButton={null}>
      <div className="card">
        <div className="card-body"></div>
      </div>
    </AdminLayoutHoc>
  );
};

export default Index;
