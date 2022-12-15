import React, {useEffect, useState} from "react";

const NoListingsFoundScreen = ({details}) => {
    
    return (
        <>
            {
            !details ? 
            <></> 
            :
             <div className="container p-3">
                 <div className="d-flex flex-row align-items-center">
                     <div className="col-6 col-lg-2">
                             <div className="p-2">
                                 <img src={details.record_image}/>
                             </div>
                         </div>
                     <div className="d-flex d-none d-lg-block ms-4 flex-column col-md-6 col-lg-4 justify-content-start">
                         <div className="p-2">
                         <h2 className="text-dark">{details.record_name}</h2>
                     </div>
                     <div className="p-2">
                         <h3 className="text-dark">By: {details.record_artist.replace("*","")}</h3>
                     </div>
                     <div className="p-2">
                         <h5 className="text-dark">Genre: {details.record_genre}</h5>
                     </div>
                     <div className="p-2">
                         <h5 className="text-dark">Year recorded: {details.record_year}</h5>
                     </div>
                     </div>
                     <div className=" col-md-4 col-lg-6 m-2">
                         <div className="h-100 d-flex align-items-center p-2">
                             <h2 className="text-danger">This record is currently out of stock!</h2>
                         </div>
                     </div>
                 </div>
            </div>
            }
        </>

    );
}
export default NoListingsFoundScreen;

