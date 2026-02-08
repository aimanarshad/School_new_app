
import React, { useState } from 'react';
import certificate from '../../assets/Certificate.png';
import Cards from '../../componenets/Cards/Cards';
import Modal from '../../componenets/Modal(Popup_Window)/Modal';
import CertificateForm from '../../componenets/Certificate_Form/Cerificate_form';

const Certificate = () => {
  const [showModal, setShowModal] = useState(false);
  const [certificateType, setCertificateType] = useState(''); // store current certificate type

  // function to handle card click
  const handleCardClick = (type) => {
    setCertificateType(type);
    setShowModal(true);
  };

  return (
    <div>
      <h2 className='text-center mt-4 mb-3' style={{ fontSize: '32px', color: '#161179' }}>
        Digital Certificate Issuance
      </h2>
      <h6 className='text-center mb-4' style={{color:'grey'}}>Generate and manage official student certificates easily.</h6>

      <p className='text-center mb-5 px-5 mx-lg-3' style={{color:'gray'}}>This platform enables the school administration to issue official certificates such as leaving certificates, character certificates, and academic certificates. It helps maintain organized records, reduces manual work, and ensures that certificates are generated using accurate and verified student information.</p>
      <div className="cards text-center d-flex justify-content-center gap-4 flex-wrap">
        <Cards
          heading="Generate Bonafide Certificate"
          value=""
          photo={certificate}
          colour="#254F22"
          onClick={() => handleCardClick('Bonafide Certificate')}
        />
        <Cards
          heading="Generate Leaving Certificate"
          value=""
          photo={certificate}
          colour="#0B2D72"
          onClick={() => handleCardClick('Leaving Certificate')}
        />
        <Cards
          heading="Generate Character Certificate"
          value=""
          photo={certificate}
          colour="#A03A13"
          onClick={() => handleCardClick('Character Certificate')}
        />
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={`Generate ${certificateType}`} 
      >
        <CertificateForm certificateType={certificateType} />

      </Modal>
    </div>
  );
};



export default Certificate;
