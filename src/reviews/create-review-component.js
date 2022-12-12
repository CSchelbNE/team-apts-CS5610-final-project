import React, {useState} from "react";
import "./index.css";

const CreateReviewComponent = () => {
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(1);
    

    return(
        <>

            <div className="border p-2 text-start">
                <div className="row ">
                        <div className="ms-0 col-2 col-md-2 col-sm-3">
                            <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                            className="wd-profile-avatar-format rounded-circle my-auto"/>
                        </div>
                        <div className="col-10 col-lg-10 col-md-10 col-sm-9">
                            <div className="float-end">
                                {/*5 stars*/}
                                <img src={require(rating >= 1 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(1)}/>
                                <img src={require(rating >= 2 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(2)}/>
                                <img src={require(rating >= 3 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(3)}/>
                                <img src={require(rating >= 4 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format me-1" onClick={() => setRating(4)}/>
                                <img src={require(rating >= 5 ? "../images/gold-star-icon.png" : "../images/gray-star-icon.jpg")}
                                     className="wd-gold-star-format " onClick={() => setRating(5)}/>
                            </div>
                            <div className="float-start mt-2">
                                <textarea value={body} placeholder="Write a review...."
                                          className="form-control border-0 wd-min-width-100" cols={200}
                                          onChange={(event) => setBody(event.target.value)}>
                                </textarea>
                                <img src={require("../images/profile-icon.jpg")} className="wd-profile-icon-format rounded-circle mt-2"/>
                                <img src={require("../images/review-check.png")} className="wd-review-check-format mt-2"/>
                                <img src={require("../images/thumbs-up-five-star.png")} className="wd-thumbs-up-five-star-format ms-2 mt-2"/>
                                <div className="float-end mt-2">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>

                        </div>
                </div>

            </div>
        </>
    );
}
export default CreateReviewComponent;