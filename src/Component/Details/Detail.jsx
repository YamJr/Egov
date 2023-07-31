import React from "react";
import './Detail.css'
import president from "../../images/president.jpg"
import prime from "../../images/prime.jpg"
import chief from "../../images/chief.jpg"
import humla from "../../images/humla.jpg"
import bangla from "../../images/bangla.jpg"
import covid from "../../images/covid.jpg"
import rules from "../../images/rules.jpg"
import chitra from "../../images/chitra.jpg"
import birgunj from "../../images/birgunj.jpg"
import assembly from "../../images/assembly.jpg"

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
                                <ul className="list">
                                    <li>The government has decided to either cancel or merge the development committees and funds that have duplication of work, are not working according to the purpose, and are irrelevant.</li>
                                    <li>The government has also revealed that a national identity card number is required for opening a bank account, getting a vehicle license, issuing house design approval and getting a permanent account number.</li>
                                    <li>the government is going to make arrangements to allow Nepalese citizens abroad to vote in periodic elections. The security agencies will be empowered by using modern technology to control all types of criminal activities including terrorism and organized crime, money laundering, violence, cyber-crime, illegal drug trafficking</li>
                                    <li>In the policy and program, the matters related to health include implementation of one doctor and one health institution, to operate OPD services from 8 AM to 8 PM, and building a state-of-the-art hospital that can treat heart and cancer diseases at the provincial level.</li>

                                </ul>
                            </div>
                    </div>


                <div className="aside-right">
                <div className="blog-article">
                            <h3>Politics have been turned into a business: Chitra Bahadur</h3>
                                <img src={chitra} alt="chitra" className="blog-images"/>
                                <div className="blog-content">
                                <p>Rashtriya Janamorcha Chairman Chitra Bahadur KC pinned blamed on the big political parties of the country…</p>
                            </div>
                            </div>
                            <div className="blog-article">
                            <h3>Birgunj Collects NPR 40 Billion in Customs Revenue!</h3>
                                <img src={birgunj} alt="birgunj" className="blog-images"/>
                                <div className="blog-content">
                                <p>Nepal’s biggest Birgunj Customs Office has collected significant revenues in the fiscal year so far.</p>
                            </div>
                            </div>
                            <div className="blog-article">
                            <h3>Nepal’s Central Assembly Endorses Two Key Ordinances</h3>
                                <img src={assembly} alt="assembly" className="blog-images"/>
                                <div className="blog-content">
                                <p>The National Assembly of Nepal endorsed two ordinances on Monday. Both these ordinances are finance-related.</p>
                            </div>
                            </div>

                </div>

                </div>
                </>
    )
}
export default Detail
