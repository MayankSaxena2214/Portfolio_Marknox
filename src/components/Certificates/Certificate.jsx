import React from 'react';
import './Certificate.css';

import c from '../../assets/c.png';
import cloud from '../../assets/cloud.png';
import cpp from '../../assets/cpp.png';
import cyber from '../../assets/cyber.png';
import datascience from '../../assets/datascience.png';
import html from '../../assets/html.png';
import java from '../../assets/java.png';
import javascript from '../../assets/javascript.png';
import mysql from '../../assets/mysql.png';
import octanet from '../../assets/octanet.png';
import python from '../../assets/python.png';
import react from '../../assets/react.png';
import CertificateCard from './CertificateCard';

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h1>Certifications</h1>
      <div className="certificaterow1">
        <CertificateCard image={c} subject="C Language" provider="Great Learning" link="https://drive.google.com/open?id=13abjSc1xKxo3NPwgE7w4wttOP5YDJ86d&usp=drive_copy" />
        <CertificateCard image={cloud} subject="Cloud Basics" provider="Great Learning" link="https://drive.google.com/open?id=1i_TDPbWK9FiOfIo5dOHk3BMS5n15je_g&usp=drive_copy" />
        <CertificateCard image={cpp} subject="C++ Language" provider="Udemy" link="https://drive.google.com/open?id=1oo_MhG9KtR3QcDtK_aUqliWpe_iNHeZv&usp=drive_copy" />
      </div>
      <div className="certificaterow2">
        <CertificateCard image={cyber} subject="Cyber Security" provider="Great Learning" link="https://drive.google.com/open?id=13OBQDm52lvPCWpQeHUvcpyJDTZi2Ugad&usp=drive_copy" />
        <CertificateCard image={datascience} subject="Data Science" provider="Great Learning" link="https://drive.google.com/open?id=1NJDfgaXV13TzjtHCEWE37R-tPTDfCvIx&usp=drive_copy" />
        <CertificateCard image={html} subject="HTML" provider="Udemy" link="https://drive.google.com/open?id=1u5UenYhce6MZPzbZQmoLY3pxgjidP7ie&usp=drive_copy" />
      </div>
      <div className="certificaterow3">
        <CertificateCard image={java} subject="Java" provider="Udemy" link="https://drive.google.com/open?id=1oo_MhG9KtR3QcDtK_aUqliWpe_iNHeZv&usp=drive_copy" />
        <CertificateCard image={javascript} subject="JavaScript" provider="Udemy" link="https://drive.google.com/open?id=1VXkRCYFI_OQY0rB2B8R3e_vRi0t8x97e&usp=drive_copy" />
        <CertificateCard image={mysql} subject="MySQL" provider="Udemy" link="https://drive.google.com/open?id=1olqQefy0dQP4is_HirHZT68iNDfcHWm_&usp=drive_copy" />
      </div>
      <div className="certificaterow4">
        <CertificateCard image={octanet} subject="Web Development Training" provider="Octanet" link="https://drive.google.com/open?id=1CO3qGVFoQ6y6A89CWNBTYeaTuuT3NOYT&usp=drive_copy" />
        <CertificateCard image={react} subject="React" provider="Udemy" link="https://drive.google.com/open?id=1rL1lWj5HSIooLRCDBXzIiWuUaNpsexaR&usp=drive_copy" />
        <CertificateCard image={python} subject="Python" provider="Red Hat" link="https://drive.google.com/open?id=1iaO4mUG8uLBbedHVbiKxLjDvowLKemJm&usp=drive_copy" />
      </div>
    </div>
  );
}

export default Certificate;
