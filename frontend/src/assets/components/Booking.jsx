import { useFormik } from "formik";
import MyCalender from "./MyCalender";

function Booking() {
  const formik = useFormik({
    initialValues: {
      date: "",
    },
  });

  const style = "border-2 w-[272px] h-[42px] p-2 ";
  return (
    <div className="top-[11%] relative  ml-12 ">
      <h3 className="nunito-prof !font-[600] pb-4">Book Model</h3>
      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-48" htmlFor="date">
            Select Date*
          </label>
          <MyCalender />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="time">
            Select Time*
          </label>
          <input
            className={`${style} ${formik.errors.time ? "input-error" : ""}`}
            type="time"
            name=""
            id="time"
            value={formik.values.time}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="pname">
            Photorapher Name
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            name=""
            id="pname"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="email">
            Email Address
          </label>
          <input
            className={`${style} ${formik.errors.email ? "input-error" : ""}`}
            type="email"
            id="email"
            value={formik.values.email}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="phone">
            Phone Number
          </label>
          <input
            className={`${style} ${formik.errors.number ? "input-error" : ""}`}
            type="number"
            id="phone"
            value={formik.values.number}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="place">
            Shooting Place*
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="place"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="location">
            Shooting Location*
          </label>
          <input
            className={`${style} ${
              formik.errors.location ? "input-error" : ""
            }`}
            type="location"
            id="location"
            value={formik.values.location}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="meet">
            Meeting Point*
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="meet"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="shoot">
            Shooting Concept
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="shoot"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="cloth">
            Clothing Type
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="cloth"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="shoes">
            Shoes Type
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="shoes"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="items">
            Items Type
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="items"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="makeup">
            Makeup Type
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="makeup"
            value={formik.values.text}
          />
        </div>
        <div className="flex gap-4">
          <label className="w-48" htmlFor="other">
            Others
          </label>
          <input
            className={`${style} ${formik.errors.text ? "input-error" : ""}`}
            type="text"
            id="other"
            value={formik.values.text}
          />
        </div>
      </form>
    </div>
  );
}

export default Booking;
