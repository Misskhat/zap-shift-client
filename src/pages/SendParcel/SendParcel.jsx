import React from "react";
import {useForm} from "react-hook-form";
import {useLoaderData} from "react-router";

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm();

    const servicesAreaData = useLoaderData();
    const regionDuplicate = servicesAreaData.map((r) => r.region);
    const region = [...new Set(regionDuplicate)];
    console.log(region);
    const senderRegions = watch("senderRegion");

    const districtByRegion = (region) => {
        const regionDistrict = servicesAreaData.filter((s) => s.region === region);
        const district = regionDistrict.map((d) => d.district);
        console.log(district);
        return district;
    };

    const handleSendParcelSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2 className="text-5xl font-bold">Send A Parcel</h2>
            <p className="text-2xl font-bold">Enter your parcel details</p>
            <form onSubmit={handleSubmit(handleSendParcelSubmit)} className="mt-12 p-4 ">
                <div>
                    {/* document */}
                    <div className="">
                        <label className="label mr-4 text-xl text-black">
                            <input
                                type="radio"
                                {...register("parcelType")}
                                value="document"
                                className="radio"
                                defaultChecked
                            />
                            Document
                        </label>
                        <label className="label mr-4 text-xl text-black">
                            <input
                                type="radio"
                                {...register("parcelType")}
                                value="non-document"
                                className="radio"
                                defaultChecked
                            />
                            Non-Document
                        </label>
                    </div>

                    {/* parcel section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
                        <fieldset className="fieldset">
                            <label className="label text-xl text-black">Parcel Name</label>
                            <input
                                type="text"
                                {...register("parcelName")}
                                className="input w-full"
                                placeholder="Parcel Name"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label text-xl text-black">Parcel Weight (KG)</label>
                            <input
                                type="number"
                                {...register("parcelWeight")}
                                className="input w-full"
                                placeholder="Parcel Weight (KG)"
                            />
                        </fieldset>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Sender and Receiver Information */}
                    <fieldset className="fieldset flex flex-col space-y-3">
                        <h2 className="text-2xl font-semibold text-black">Sender Details</h2>

                        {/* sender name */}
                        <label className="label text-xl text-black">Sender Name</label>
                        <input
                            type="text"
                            {...register("senderName")}
                            className="input w-full"
                            placeholder="Sender Name"
                        />

                        {/* sender email */}
                        <label className="label text-xl text-black">Sender Email</label>
                        <input
                            type="email"
                            {...register("senderEmail")}
                            className="input w-full"
                            placeholder="Sender Email"
                        />

                        {/* sender address */}
                        <label className="label text-xl text-black">Sender Address</label>
                        <input
                            type="text"
                            {...register("senderAddress")}
                            className="input w-full"
                            placeholder="Sender Address"
                        />

                        {/* sender phone number */}
                        <label className="label text-xl text-black">Sender Phone Number</label>
                        <input
                            type="number"
                            {...register("senderPhoneNumber")}
                            className="input w-full"
                            placeholder="Sender Phone number"
                        />

                        {/* sender region */}
                        <fieldset className="fieldset">
                            <label className="abel text-xl text-black">Sender Region</label>
                            <select
                                {...register("senderRegion")}
                                defaultValue="Pick a Region"
                                className="select w-full"
                            >
                                <option disabled={true}>Pick a Region</option>
                                {region.map((r, i) => (
                                    <option value={r} key={i}>
                                        {r}
                                    </option>
                                ))}
                            </select>
                        </fieldset>
                        {/* sender district */}
                        <fieldset className="fieldset">
                            <label className="abel text-xl text-black">Sender District</label>
                            <select
                                {...register("senderDistrict")}
                                defaultValue="Pick a District"
                                className="select w-full"
                            >
                                <option disabled={true}>Pick a District</option>
                                {districtByRegion(senderRegions).map((d, i) => (
                                    <option value={d} key={i}>
                                        {d}
                                    </option>
                                ))}
                            </select>
                        </fieldset>

                        {/* sender district */}
                        <label className="label text-xl text-black">Sender District</label>
                        <input
                            type="text"
                            {...register("senderDistrict")}
                            className="input w-full"
                            placeholder="Sender District"
                        />

                        {/* pickup instruction */}
                        <label className="label text-xl text-black">Pickup Instruction</label>
                        <textarea
                            {...register("pickupInstruction")}
                            className="textarea h-24 w-full"
                            placeholder="Pickup Instruction"
                        ></textarea>
                    </fieldset>
                    <fieldset className="fieldset flex flex-col space-y-3">
                        <h2 className="text-2xl font-semibold text-black">Receiver Details</h2>

                        {/* receiver name */}
                        <label className="label text-xl text-black">Receiver Name</label>
                        <input
                            type="text"
                            {...register("receiverName")}
                            className="input w-full"
                            placeholder="Receiver Name"
                        />

                        {/* receiver email */}
                        <label className="label text-xl text-black">Receiver Email</label>
                        <input
                            type="text"
                            {...register("receiverEmail")}
                            className="input w-full"
                            placeholder="Receiver Email"
                        />

                        {/* receiver address */}
                        <label className="label text-xl text-black">Receiver Address</label>
                        <input
                            type="text"
                            {...register("receiverAddress")}
                            className="input w-full"
                            placeholder="Receiver Address"
                        />

                        {/* receiver phone number */}
                        <label className="label text-xl text-black">Receiver Phone Number</label>
                        <input
                            type="number"
                            {...register("receiverPhoneNumber")}
                            className="input w-full"
                            placeholder="Receiver Phone number"
                        />

                        {/* receiver district */}
                        <label className="label text-xl text-black">Receiver District</label>
                        <input
                            type="text"
                            {...register("receiverDistrict")}
                            className="input w-full"
                            placeholder="Receiver District"
                        />

                        {/* delivery instruction */}
                        <label className="label text-xl text-black">Delivery Instruction</label>
                        <textarea
                            {...register("deliveryInstruction")}
                            className="textarea h-24 w-full"
                            placeholder="Pickup Instruction"
                        ></textarea>
                    </fieldset>
                </div>
                <input type="submit" className="btn btn-primary text-black my-5" value="Send A Parcel" />
            </form>
        </div>
    );
};

export default SendParcel;
