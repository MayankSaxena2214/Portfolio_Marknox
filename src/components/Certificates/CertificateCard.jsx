import React from 'react'

const CertificateCard = ({image,subject,provider,link}) => {
    
  return (
    <div className="certificate-card">
        
        <div className="certificate-image">
            <img src={image} alt="Loading" />
        </div>
        <div className="certificate-content">
            <div className="certificate-subject">{subject}</div>
            <div className="certificate-provider">{provider}</div>
            <div className="certificate-link">
                <a href={link}>View</a>
            </div>
        </div>
    </div>
  )
}

export default CertificateCard