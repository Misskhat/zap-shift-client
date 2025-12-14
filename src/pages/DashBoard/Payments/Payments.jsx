import {useParams} from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {useQuery} from "@tanstack/react-query";


const Payments = () => {
    const {parcelId} = useParams();
    // console.log(parcelId);
    const axiosSecure = useAxiosSecure();
    const {
        data: parcel,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["parcel", parcelId],
        queryFn: async () => {
            const response = await axiosSecure.get(`parcels/${parcelId}`);
            return response.data;
        },
    });

    const handlePayment = async() => {
        console.log("payment button click");
        const paymentInfo={
            cost: parcel?.cost,
            parcelName: parcel?. parcelName,
            parcelId: parcel?._id,
            senderEmail: parcel?.senderEmail
        }
        console.log(paymentInfo);
        const response = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(response.data);
        window.location.assign(response?.data?.url);
    };

    if (isLoading) {
        <span className="loading loading-spinner loading-xl"></span>;
    }

    if (error) {
        console.log(error);
    }

    if (!parcel) {
        console.log("data not loading properly");
    }

    return (
        <div>
            <h1>
                Payment amount ${parcel?.cost} for {parcel?.parcelName}
            </h1>
            <button onClick={handlePayment} className="btn btn-primary text-black">
                Pay
            </button>
        </div>
    );
};

export default Payments;
