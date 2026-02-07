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
      <div className="cards">
        <Cards
          heading="Generate Bonafide Certificate"
          value=""
          photo={certificate}
          colour="#38abb869"
          onClick={() => handleCardClick('Bonafide Certificate')}
        />
        <Cards
          heading="Generate Leaving Certificate"
          value=""
          photo={certificate}
          colour="#38abb869"
          onClick={() => handleCardClick('Leaving Certificate')}
        />
        <Cards
          heading="Generate Character Certificate"
          value=""
          photo={certificate}
          colour="#38abb869"
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
