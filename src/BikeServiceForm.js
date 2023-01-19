import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Image.css'



export let Register=()=>
{
    const[process,setProcess]=useState({
        "cusId":"",
        "cusName":"",
        "cusContact":0,
        "cusEmail":"",
        "cusDate":""
    })

    return(
        <>
             <div className="container bg-dark">
             <img src="./Image/bike" id="center1"></img> 
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 " id="center">
                <h4 className="text-center mt-5 mb-5" id='center2'><i class="bi bi-bicycle"></i> Bike Details Form</h4>
                    <div className="row justify-content-center " >
                        <div className="row">
                            <div className="col">
                                <label className="form-label" >RegisterNumber</label>
                                <input type="text" 
                                name="cusId"
                                className="form-control" />
                            </div>
                            <div className="col">
                                <label className="form-label" >CustomerName</label>
                                <input type="text" 
                                name="cusName"
                                className="form-control" />
                            </div>
                        </div>
                    </div>  
                    <div className="mt-3">
                                <label className="form-label" >CustomerContact</label>
                                <input type="tel" 
                                name="cusContact"
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >CustomerEmail</label>
                                <input type="email" 
                                name="cusEmail"
                                className="form-control" />
                    </div>
                    <div className="mt-3">
                                <label className="form-label" >DateofPurchase</label>
                                <input type="date"
                                name="cusDate"
                                 className="form-control" />
                    </div>
                    <div className="row justify-content-around mt-4">
                        <button className="btn btn-outline-success col-3 ms-3"  >Register</button>
                        <button className="btn btn-outline-danger col-3 me-3"  type="reset" value="Reset" >Reset</button>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}
