import React from "react";
import './Detail.css'

function Detail(){
    return(
        <>
        <div className="section">
            <div className="Govern">
                <div className="gov-info">
                <h4>government representatives</h4>
                    <div className="card">  
                <div className="card-1">
                            <p>Hellp</p>
                            <p>President</p>
                            <p>AppleDog</p>
                        </div>
                        <div className="card-1">
                            <p>Hellp</p>
                            <p>President</p>
                            <p>AppleDog</p>
                        </div>
                        <div className="card-1">
                            <p>Hellp</p>
                            <p>President</p>
                            <p>AppleDog</p>
                        </div>
                        </div>
                </div>

            </div>


            <div className="contact-info">
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
        </>
    )
}
export default Detail
