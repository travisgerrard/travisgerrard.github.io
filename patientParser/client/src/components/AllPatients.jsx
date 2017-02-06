import React, { PropTypes } from 'react';

const AllPatients = ({
  patientsExist,
  updateTheState,
  secretCode,
  webSiteConnect,
  patients,
  handleSubmit,
  resetLabsAndTodos
}) => (
  {patientsExist ? (
    <div>
      <ul>
        {patients.map(element => <li key={element._id}><PatientViewControllerPage patientData={element} updateTheState={updateTheState} secretCode={secretCode} url={webSiteConnect}/><br /><hr /></li>)}
      </ul>
      <button id="addPatientButton" onClick={handleSubmit} className="btn btn-primary center-block">Add Patient</button>
      <button onClick={resetLabsAndTodos} className="btn btn-primary center-block">ResetLabsAndTodos</button>
    </div>
  ) : (
    <button id="addPatientButton" onClick={handleSubmit} className="btn btn-primary center-block">Add Patient</button>
  )}
);

AllPatients.propTypes = {
  patientsExist: PropTypes.bool.isRequired,
  updateTheState: PropTypes.func.isRequired,
  secretCode: PropTypes.string.isRequired,
  webSiteConnect: PropTypes.string.isRequired,
  patients: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetLabsAndTodos: PropTypes.func.isRequired,
};

export default AllPatients;
