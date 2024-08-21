// eslint-disable-next-line react/prop-types
function Navbar({ nav, setNav }) {
  function handleNav(i) {
    setNav(i);
  }
  return (
    <div className=" text-[#333333] mr-12 ml-12 flex justify-between items-center h-24  mx-auto">
      <h1 className="kalam-regular cursor-pointer" onClick={() => handleNav(0)}>
        M/M
      </h1>
      <ul className="flex">
        <li
          className={`m-4 cursor-pointer ${nav === 1 ? "active" : ""}`}
          onClick={() => handleNav(1)}
        >
          Profile
        </li>
        <li className="m-4 cursor-pointer">Gallery</li>
        <li
          className={`m-4 cursor-pointer ${nav === 3 ? "active" : ""}`}
          onClick={() => handleNav(3)}
        >
          Booking
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
