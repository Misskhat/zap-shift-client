import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams]= useSearchParams()
    const searchId = searchParams.get('session_id')
    const [paymentInfo, setPaymentInfo] = useState({})
    const axiosSecure = useAxiosSecure();
    // console.log(searchId);
    useEffect(() => {
        console.log('Payment successful with session ID:', searchId);
        if(searchId){
            axiosSecure.patch(`/payment-success?session_id=${searchId}`)
            .then(res=> {
                setPaymentInfo({
                    transationId: res.data.transationId,
                    trackingId: res.data.trackingId
                })
                console.log(res.data)
            })
        }
    }, [searchId, axiosSecure]);
    return (
        <div>
            <h1>Payment successful</h1>
            <p>Transation id: {paymentInfo?.transationId}</p>
            <p>Tracking id: {paymentInfo?.trackingId}</p>
            <p></p>
        </div>
    );
};

export default PaymentSuccess;