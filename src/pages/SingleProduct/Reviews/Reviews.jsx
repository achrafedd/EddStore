import React from "react";
// Icons
import { AiFillStar } from "react-icons/ai";

const Reviews = ({ reviews }) => {
    return (
        <div className="reviews">
            <h2 className="title">Reviews</h2>
            <div className="content">
                <div className="head">
                    <div className="top">Customers Reviews</div>
                    <div className="bottom">
                        <div className="stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <span>Based on {reviews.length} Reveiws</span>
                    </div>
                </div>
                {reviews.map(({ id, stars, user, date, content }) => (
                    <div className="review" key={id}>
                        <div className="stars">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div className="user">
                            <span>{user}</span>
                            on
                            <span>{new Date(date).toDateString()}</span>
                        </div>
                        <div className="text">{content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
