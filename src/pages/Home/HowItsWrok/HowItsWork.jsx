import bookingIcon from "../../../assets/bookingIcon.png";

const works = [
    {
        img: bookingIcon,
        bookingType: "Booking Pick & Drop",
        description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        img: bookingIcon,
        bookingType: "Cash On Delivery",
        description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        img: bookingIcon,
        bookingType: "Delivery Hub",
        description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
        img: bookingIcon,
        bookingType: "Booking SME & Corporate",
        description: "From personal packages to business shipments — we deliver on time, every time.",
    },
];

const HowItsWork = () => {
    return (
        <div className="my-10">
            <h2 className="md:text-4xl font-bold">How It Works</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4">
                {works.map((work) => (
                    <div className="md:py-8 py-4 px-4 shadow-xl my-5 rounded-2xl">
                        <img src={work.img} alt="" />
                        <h4 className="text-2xl font-bold py-3">{work.bookingType}</h4>
                        <p>{work.description} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItsWork;
