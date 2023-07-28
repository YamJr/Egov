import React from "react";
import './Educ.css';
import education1 from "../../images/education1.jpg";
import education2 from "../../images/education2.jpg";
import education3 from "../../images/education3.jpg"
  
function Education(){
    return(
        <>
        <div className="info-title">
            <p>Education Related</p>
        </div>
        <div className="education-info">         
        <div className="articles">
            <img src={education1} alt="education" className="edu-images" />
            <div className="article-content">
                <h5>Nepalis In Australia launch ‘Studyinfocentre’ to Help Students in Abroad Studies</h5>
                <p>Nepalis living in Australia took the initiative and launched a new portal to help students research…</p>
                </div>
            </div>

            <div className="articles">
            <img src={education2} alt="education2" className="edu-images" />
            <div className="article-content">
                <h5>Nepal to Start Issuing NOCs for Foreign Studies!</h5>
                <p>In a huge relief to thousands of students, the Nepali Government has decided to resume issuing…
                </p>
                </div>
            </div>

            <div className="articles">
            <img src={education3} alt="education3" className="edu-images" />
            <div className="article-content">
                <h5>Tribhuvan University to Conduct Exams Only After Dashain!</h5>
                <p>The Tribhuvan University (TU) has announced its decision to conduct semester and annual examinations after the…</p>
                </div>
                </div>
            </div>
  </>
    )
}
export default Education