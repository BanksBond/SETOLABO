function Navbar() {
  return (
    <div className=" text-[#333333] mr-12 ml-12 flex justify-between items-center h-24  mx-auto">
      <h1 className="kalam-regular">M/M</h1>
      <ul className="flex">
        <li className="m-4 cursor-pointer">Profile</li>
        <li className="m-4 cursor-pointer">Gallery</li>
        <li className="m-4 cursor-pointer">Booking</li>
      </ul>
    </div>
  );
}

export default Navbar;
// max-w-[1240px]
