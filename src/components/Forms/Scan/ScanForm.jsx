/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  target: yup.string().required('You must enter a target'),
  module: yup.string().required('You must enter a module'),
});

const CompanyForm = ({ onSubmit }) => {
  const {
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12 form-group">
          <input {...register('target')} className="form-control" />
          {errors.target && errors.target.message}
        </div>
        <div className="col-12 form-group">
          <input {...register('module')} className="form-control" />
          {errors.module && errors.module.message}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <button
            disabled={!isDirty || !isValid}
            type="submit"
            className="btn btn-primary pull-left"
          >
            {isSubmitting ? 'Loading' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  );
};

CompanyForm.propTypes = {
  onSubmit: PropTypes.func,
};

CompanyForm.defaultProps = {
  onSubmit: () => {},
};

export default CompanyForm;
