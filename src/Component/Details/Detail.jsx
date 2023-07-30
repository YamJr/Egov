import React from "react";
import './Detail.css'
import president from "../../images/president.jpg"
import prime from "../../images/prime.jpg"
import chief from "../../images/chief.jpg"
import humla from "../../images/humla.jpg"
import bangla from "../../images/bangla.jpg"
import covid from "../../images/covid.jpg"
import rules from "../../images/rules.jpg"

function Detail(){
    return(
        <>
        <div className="section">
            <div className="Govern">
                <div className="gov-info">
                <h4>government representatives</h4>
                    <div className="card">  
                <div className="card-1">
                            <img src={president} alt="president" className="my-images"/>
                            <p>President</p>
                            <p>Ram Chandra Poudel</p>
                        </div>
                        <div className="card-1">
                        <img src={prime} alt="prime" className="my-images"/>
                            <p>Prime Minister</p>
                            <p>Pushpa Kamal Dahal</p>
                        </div>
                        <div className="card-1">
                        <img src={chief} alt="chief" className="my-images"/>
                            <p>Chief Secretary</p>
                            <p>Dr. Baikuntha Aryal</p>
                        </div>
                        </div>
                </div>

            </div>

            <div className="contact-info">
                <p>Emergency Numbers:</p>
                <table className="Info">
                    <thead>
                        <tr>
                            <th>Organization</th>
                            <th>Contact</th>
                            </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>Police</td>
                        <td>100</td>
                       </tr>
                       <tr>
                        <td>Ambulance</td>
                        <td>102</td>
                       </tr>
                       <tr>
                        <td>Fire</td>
                        <td>101</td>
                       </tr>
                    </tbody>
                    </table>
            </div>
                
             </div>   
                <div className="aside">

                <div className="aside-left">
                            <div className="blog-article">
                            <h3>Floods, landslide damage properties worth millions in Humla</h3>
                                <img src={humla} alt="humla" className="blog-images"/>
                                <div className="blog-content">
                                <p>Personnel from all three security forces have reached the incident site but continuous rainfall has been causing difficulty, police say.</p>
                            </div>
                            </div>
                            <div className="blog-article">
                            <h3>Prime Minister Hasina offers Nepal the use of Bangladesh’s Payra port</h3>
                                <img src={bangla} alt="bangla" className="blog-images"/>
                                <div className="blog-content">
                                <p>Bangladeshi leader made the offer to PM Dahal during their visit to Italy to attend the UN Food Summit.</p>
                            </div>
                            </div>
                            <div className="blog-article">
                            <h3>Nepal receives 702,720 doses of Covid vaccine</h3>
                                <img src={covid} alt="covid" className="blog-images"/>
                                <div className="blog-content">
                                <p>The shots come from France. Select hospitals in Kathmandu and districts administer the vaccine.</p>
                            </div>
                            </div>
                </div>

                <div className="aside-center">
                            <div className="blog-rules">
                                <img src={rules} alt="rule" className="rules-img" />
                                <h3>Govt unveils 188-point policies and programs for FY 2023/24</h3>
                                
                            </div>
                    </div>
                <div className="aside-right">
    
                </div>

                </div>
                </>
    )
}
export default Detail
