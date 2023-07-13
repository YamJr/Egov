import React from "react";
import './Footer.css';
 
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="Useful-link">
                <p>Useful link</p>
                <ul>
                <li><a href="https://mail.nepal.gov.np/" target="_blank">E-Mail</a></li>
                   <li><a href="https://psc.gov.np/" target="_blank">Public Service Commision</a></li>
                   <li><a href="https://www.nepal.gov.np/" target="_blank">Portal of Nepal Government</a></li>
                   <li><a href="https://nepal.gov.np:8443/NationalPortal/view-page?id=34" target="_blank">Nepal Business License e-Portal</a></li>
                </ul>
            </div>
            <div className="infos">
                <p>Contact Us</p>
                <ul>
                <li>National Information Technology Center</li>
                <li>Singhadurbar, Kathmandu</li>
                <li>Phone: +977-1-4211917, 4211710, 4211527</li>
                <li>Fax: +977-1-4243362</li>
                <li>Email: nationalportal@nitc.gov.np</li>
                </ul>
            </div>
        </div>
        <div className="bottom">
                <p>© Copyright 2020. OPMCM All Right Reserved.</p>
            </div>
        </>
    )
}
export default Footer