import {useQuery} from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {FiEdit} from "react-icons/fi";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {FaTrashAlt} from "react-icons/fa";
import Swal from "sweetalert2";
import {Link} from "react-router";

const MyParcels = () => {
    const {user} = useAuth();
    const axiousSecure = useAxiosSecure();

    const {data: parcels = [], refetch} = useQuery({
        queryKey: ["my-parcels", user?.email],
        queryFn: async () => {
            const res = await axiousSecure.get(`/parcels?email=${user.email}`);
            return res.data;
        },
    });

    const handleParcelDelete = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiousSecure.delete(`/parcels/${id}`).then((res) => {
                    console.log(res.data);
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    }).catch((error) => console.log(error));
                });
            }
        });
    };
    return (
        <div>
            <p className="my-5">hi, this is myparcel: {parcels.length}</p>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {parcels.map((parcel, index) => (
                            <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel?.parcelName}</td>
                                <td>{parcel?.cost}</td>
                                <td>
                                    {parcel.paymentStatus === "paid" ? (
                                        <span>Paid</span>
                                    ) : (
                                        <Link
                                            to={`/dashboard/payment/${parcel._id}`}
                                            className="btn btn-primary text-black"
                                        >
                                            Pay
                                        </Link>
                                    )}
                                </td>
                                <td>{parcel.paymentStatus || "not yet update"}</td>
                                <td>
                                    <button className="btn btn-square">
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button className="btn btn-square mx-5">
                                        <FiEdit />
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleParcelDelete(parcel._id);
                                        }}
                                        className="btn btn-square"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParcels;
