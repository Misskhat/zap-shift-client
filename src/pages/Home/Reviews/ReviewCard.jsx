import {Quote} from "lucide-react";
import React from "react";

const ReviewCard = ({review}) => {
    const {username, user_photoURL, review: testimonial, date} = review;
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="card bg-base-100 shadow-xl border border-gray-200">
                <div className="card-body p-8">
                    {/* Quote Icon */}
                    <div className="flex justify-start mb-4">
                        <Quote className="w-10 h-10 text-primary opacity-20" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">{testimonial}</p>

                    <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user_photoURL} alt="" />
                            </div>
                        </div>

                        {/* Name & Title */}
                        <div>
                            <h3 className="font-semibold text-lg">{username} </h3>
                            <p className="text-sm text-gray-500"> {date} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
