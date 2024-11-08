import { MdOutlinePets } from "react-icons/md";
import { GrWifi } from "react-icons/gr";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdPool } from "react-icons/md";
import { Link } from "react-router-dom";
import Divider from "../../components/shared/divider/Divider";
import { CiMoneyBill } from "react-icons/ci";
import { BsCashCoin } from "react-icons/bs";
import { RiArrowDownWideLine } from "react-icons/ri";
import CustomInput from "../../components/shared/cutomInputs/CustomInput";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import paypal from "../../assets/payment_method/paypal.png";
import applePay from "../../assets/payment_method/apple-pay.png";
import googlePay from "../../assets/payment_method/google-pay.png";
import card from "../../assets/payment_method/pay_wiith_card.png";
import { FaRegCopy } from "react-icons/fa6";

const HotelPayment = () => {
  const [guestDetails, setGuestDetails] = useState(false);
  const [isPaymentMethodOpen, setIsPaymentMethodOpen] = useState(false);

  return (
    <main className="px-5">
      {/* step progress */}
      <section className="text-center"> here comes step progress </section>
      {/* content section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
        {/* booking details */}
        <div className="col-span-1">
          {/* Hotel Details */}
          <div className="bg-customPrimary text-gray-400 px-5 py-10 rounded-lg">
            {/* title */}
            <p className="text-xs">Hotel</p>
            {/* hotel name */}
            <h4 className="text-lg font-bold text-white my-2">
              art&#39;otel London Hoxton
            </h4>
            {/* hotel address */}
            <p className="text-gray-300 text-sm">
              1-3 Rivington st, Hackney, London, EC2A 3DT, United Kingdom
            </p>

            {/* benefits */}
            <div className="flex flex-wrap gap-2 mt-5">
              {/* single benefit1 */}
              <div className="flex items-center gap-2">
                <MdOutlinePets className="text-xl" size={15} />
                <p className="text-xs">Pet friendly</p>
              </div>
              {/* single benefit2 */}
              <div className="flex items-center gap-2">
                <GrWifi className="text-xl" size={15} />
                <p className="text-xs">Free WiFi</p>
              </div>
              {/* single benefit3 */}
              <div className="flex items-center gap-2">
                <FaPlaneDeparture className="text-xl" size={15} />
                <p className="text-xs">Airport shuttle</p>
              </div>
              {/* single benefit4 */}
              <div className="flex items-center gap-2">
                <MdOutlineRestaurant className="text-xl" size={15} />
                <p className="text-xs">Restaurant</p>
              </div>
              {/* single benefit5 */}
              <div className="flex items-center gap-2">
                <MdPool className="text-xl" size={15} />
                <p className="text-xs">Pool</p>
              </div>
            </div>
          </div>
          {/* booking information */}
          <div className="mt-5 shadow-lg p-5 rounded-lg border border-gray-300">
            <h5 className="text-lg font-bold">Your booking details</h5>
            {/* check in and check out info */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex flex-col">
                <h2 className=" ">Check-in</h2>
                <p className="text-lg font-bold">Thu, Jun 20, 2024</p>
                <p className="text-[#5C5C5C]  text-sm">From 3:00 PM</p>
              </div>
              <div className="h-16 w-[1px] bg-gray-300"></div>
              <div className="flex flex-col">
                <h2 className="">Check-out</h2>
                <p className="text-lg font-bold">Sun, Jun 23, 2024</p>
                <p className="text-[#5C5C5C]  text-sm">Until 12:00 PM</p>
              </div>
            </div>
            {/* duration of stay */}
            <div className="mt-5">
              <p>Total length of stay: </p>
              <p className="font-bold">3 nights</p>
            </div>
            {/* divider */}
            <Divider className="my-5" />

            {/* room details */}
            <div className="">
              <p>You selected </p>
              <p className="font-bold">1 room for 2 adults</p>
              <Link
                className="mt-5 inline-block underline hover:text-customPrimary transition-all duration-300"
                to="#"
              >
                Change Your Selection
              </Link>
            </div>
          </div>
          {/* price summary */}
          <div className="mt-5 shadow-lg  rounded-lg border border-gray-300">
            <div className="p-5">
              <h5 className="text-lg font-bold">Your price summary</h5>
              {/* price list */}
              <div className="mt-5">
                {/* original price */}
                <div className="flex my-3 items-center justify-between">
                  <p>Original price</p>
                  <p className="font-bold">$1,200</p>
                </div>
                {/* discounted from point added */}
                <div className="flex my-3 items-center justify-between">
                  <p>Discounted from point added</p>
                  <p className="font-bold">- $200</p>
                </div>
              </div>
              {/* divider */}
              <Divider className="my-5" />
              {/* reward points earn message */}
              <div className="mt-5">
                <p>
                  You will earn <span className="font-bold">1000</span> points
                  for this booking
                </p>
              </div>
            </div>
            {/* grand total */}
            <div className="bg-customGray p-5">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold">Total</h1>
                <div className="text-end">
                  {/* original price */}
                  <h6 className="text-xl font-bold line-through text-red-600">
                    $1,200
                  </h6>
                  {/* discounted from point added */}
                  <h4 className="text-4xl font-bold"> $1,000</h4>
                  {/* message of taxes and fees */}
                  <p className="text-sm text-gray-500 font-semibold">
                    Includes taxes and fees
                  </p>
                  <p className="text-sm text-gray-500 font-semibold">
                    In property currency: €1,200
                  </p>
                </div>
              </div>
            </div>

            {/* price information */}
            <div className="p-5">
              <h5 className="text-lg font-bold">Price information</h5>
              {/* instruction wrapper */}
              <div className="mt-5">
                <div className="flex items-center gap-2 my-2">
                  <CiMoneyBill className="text-xl" size={15} />
                  <p className="text-sm">Includes $1,200 in taxes and fees</p>
                </div>
                <div className="flex items-center gap-2 my-2">
                  <BsCashCoin className="text-xl" size={15} />
                  <p className="text-sm">
                    Keep in mind that your card issuer may charge you a foreign
                    transaction fee.
                  </p>
                </div>
                {/* hide details button */}
                <button className=" underline mt-2 rounded-md">
                  Hide details
                </button>
              </div>
              {/* divider */}
              <Divider className="mt-5" />
            </div>
            {/* promo code accordion */}
            <div className="px-5 pb-5">
              <button className="flex items-center justify-between w-full">
                <h5 className="text-primary font-bold">
                  Add promo/referral code
                </h5>
                <RiArrowDownWideLine className="text-xl" size={15} />
              </button>
            </div>
          </div>
        </div>
        {/* payment info form*/}
        <div className="col-span-1 lg:col-span-2">
          <form>
            {/* personal infowrapper */}
            <div>
              <h5 className="text-lg font-bold">Enter your details</h5>
              {/* input wrapper */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
                {/* first name */}
                <CustomInput
                  label="First Name"
                  placeholder="John"
                  type="text"
                  required={true}
                />
                {/* last name */}
                <CustomInput
                  label="Last Name"
                  placeholder="Doe"
                  type="text"
                  required={true}
                />
                {/* email */}
                <CustomInput
                  label="Email"
                  placeholder="john@doe.com"
                  type="email"
                  required={true}
                  instruction={"Confirmation email sent to this address"}
                />
              </div>
            </div>
            {/* divider */}
            <Divider className="my-5" />
            {/* address wrapper */}
            <div>
              <h5 className="font-bold">Enter your details</h5>
              {/* input wrapper */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-3">
                {/* address */}
                <CustomInput
                  label="Address"
                  placeholder="1234 Main St"
                  type="text"
                  required={true}
                  cols={2}
                />
                {/* city */}
                <CustomInput
                  label="City"
                  placeholder="Anytown"
                  type="text"
                  required={true}
                  cols={2}
                />
                {/* zip code */}
                <CustomInput
                  label="Zip Code"
                  placeholder="EC2A 3DT"
                  type="text"
                  cols={1}
                />
                {/* country */}
                <CustomInput
                  label="Country/Region"
                  placeholder="United Kingdom"
                  type="text"
                  required={true}
                  cols={2}
                />
                {/* phone number */}
                <CustomInput
                  label="Phone Number"
                  placeholder="+44 7497 809219"
                  type="text"
                  required={true}
                  cols={2}
                  instruction={
                    "Needed by the property to validate your booking "
                  }
                />
              </div>
            </div>
            {/* divider */}
            <Divider className="mt-5" />
            {/* guest details button */}
            <button
              type="button"
              onClick={() => setGuestDetails(!guestDetails)}
              className="mt-5 gap-2 bg-customPrimary text-white px-5 py-2  flex items-center justify-between"
            >
              Enter Other Guest&#39;s Name <RiArrowDownSLine />
            </button>
            {/* guest details wrapper */}
            <div
              className={`mt-5 transition-all duration-500 ease-in-out ${
                guestDetails ? "max-h-screen" : "max-h-0"
              } overflow-hidden`}
            >
              <h5 className="font-bold">Enter guest details</h5>
              {/* input wrapper */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-3">
                {/* first name */}
                <CustomInput
                  label="First Name"
                  placeholder="John"
                  type="text"
                  cols={2}
                />
                {/* last name */}
                <CustomInput
                  label="Last Name"
                  placeholder="Doe"
                  type="text"
                  cols={2}
                />
              </div>
            </div>
            {/* cancelation policy */}
            <div className="mt-5 bg-customPrimary text-white px-5 py-5 rounded-lg">
              <h5 className="font-bold">Cancelation policy:</h5>
              <p className="text-xs flex items-center gap-2 text-gray-300 mt-3">
                <IoCheckmarkDoneCircleOutline className="text-xl" size={15} />
                Stay flexible: You can cancel for free before June 19, 2024-lock
                in this great price today
              </p>
              <div className="ml-2 mt-5">
                <p className="text-xs text-gray-300">
                  Free cancellation before Jun 19
                </p>
                <p className="text-xs text-gray-300">
                  After 12:00 AM on Jun 19 $289
                </p>
              </div>
            </div>
            {/* payment method */}
            <div className="mt-5">
              <div className="flex items-center justify-start gap-5">
                <div className="font-bold flex items-center gap-2">
                  <FaLock />
                  <h1>Payment method</h1>
                </div>
                <p className="text-sm text-gray-500">
                  Your booking is safe and secure.
                </p>
              </div>
              {/* divider */}
              <Divider className="my-5" />
              {/* payment method dropdown */}
              <div className="mt-5 p-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div
                    onClick={() => setIsPaymentMethodOpen(!isPaymentMethodOpen)}
                    className="flex items-center justify-between cursor-pointer rounded-lg"
                  >
                    <p className="text-lg font-bold">Payment method</p>
                    {isPaymentMethodOpen ? (
                      <IoMdArrowDropup className="text-xl" size={15} />
                    ) : (
                      <IoMdArrowDropdown className="text-xl" size={15} />
                    )}
                  </div>
                </div>
                {/* payment method dropdown content */}
                <div
                  className={`mt-5 transition-all duration-500 ease-in-out ${
                    isPaymentMethodOpen ? "max-h-screen" : "max-h-0"
                  } overflow-hidden`}
                >
                  {/* payment method radio buttons wrapper */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="space-y-3">
                      <label
                        htmlFor="paypal"
                        className="hover:text-blue-500 transition-all duration-300 cursor-pointer flex items-center gap-2 border border-gray-300 p-2 rounded-md"
                      >
                        <input type="radio" name="payment-method" id="paypal" />
                        <p className="text-sm  flex items-center gap-2">
                          Pay with
                          <img src={paypal} alt="paypal" className="w-[50px]" />
                        </p>
                      </label>

                      <label
                        htmlFor="google-pay"
                        className="hover:text-blue-500 transition-all duration-300 cursor-pointer flex items-center gap-2 border border-gray-300 p-2 rounded-md"
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          id="google-pay"
                        />
                        <p className="text-sm  flex items-center gap-2">
                          Pay with
                          <img
                            src={googlePay}
                            alt="google-pay"
                            className="w-[50px]"
                          />
                        </p>
                      </label>
                      <label
                        htmlFor="apple-pay"
                        className="hover:text-blue-500 transition-all duration-300 cursor-pointer flex items-center gap-2 border border-gray-300 p-2 rounded-md"
                      >
                        <input
                          type="radio"
                          name="payment-method"
                          id="apple-pay"
                        />
                        <p className="text-sm  flex items-center gap-2">
                          Pay with
                          <img
                            src={applePay}
                            alt="apple-pay"
                            className="w-[50px]"
                          />
                        </p>
                      </label>
                      <label
                        htmlFor="card"
                        className="hover:text-blue-500 transition-all duration-300 cursor-pointer flex items-center gap-2 border border-gray-300 p-2 rounded-md"
                      >
                        <input type="radio" name="payment-method" id="card" />
                        <p className="text-sm  flex items-center gap-2">
                          Pay with Credit Card
                          <img src={card} alt="card" className="w-[80px]" />
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* spacial request */}
              <div className="mt-5 p-5 shadow-md border border-gray-300 rounded-lg">
                <h5 className="font-bold text-xl">Special request</h5>
                <p className="my-3">
                  Special requests can&#39;t be guaranteed, but the property
                  will do its best to meet your needs. You can always make a
                  special request after your booking is complete.
                </p>
                <textarea
                  name=""
                  id=""
                  placeholder="Add a special request"
                  className="w-full h-20 border border-gray-300 rounded-md p-2 mt-5"
                ></textarea>
              </div>

              {/* terms of bookings */}
              <div className="mt-5 p-5 ">
                <h5 className="font-bold text-xl">Terms of bookings</h5>
                <p className="my-3 text-sm">
                  By clicking &quot;Complete booking&quot;, you agree you have
                  read and accept our{" "}
                  <span className="inline-flex items-center gap-2">
                    <Link
                      className="text-blue-500 hover:text-customPrimary transition-all duration-300"
                      to="#"
                    >
                      Terms and Conditions{" "}
                      <FaRegCopy size={10} className="inline" />
                    </Link>
                    
                    <Link
                      className="text-blue-500 hover:text-customPrimary transition-all duration-300"
                      to="#"
                    >
                      Privacy Policy <FaRegCopy size={10} className="inline" />
                    </Link>
                  </span>
                  .
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default HotelPayment;
