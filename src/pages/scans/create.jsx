import { useRouter } from 'next/router';
import AdminLayoutHoc from 'components/Layout/AdminLayoutHoc';
import ScanForm from 'components/Forms/Scan/ScanForm';

const CreateScanPage = () => {
  const router = useRouter();
  const onFormSubmit = (values) => {
    console.log(values);
    // ADD API CALL FOR ADDING SCANS
    router.push('/scans');
  };
  return (
    <AdminLayoutHoc contentTitle="New Scan" contentTitleButton={<i className="fa fa-2x fa-home" />}>
      <div className="row justify-content-center">
        <div className="col-md-6 col-xs-12">
          <div className="card">
            <div className="card-body">
              <ScanForm onSubmit={onFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </AdminLayoutHoc>
  );
};

export default CreateScanPage;
