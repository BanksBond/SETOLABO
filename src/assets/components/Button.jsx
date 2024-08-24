// eslint-disable-next-line react/prop-types
function Button({ children, style }) {
  const defaultStyle =
    "bg-[#FFA465] hover:bg-orange-200 nunito-but my-4 py-2 px-6 text-white";
  return <button className={style ? style : defaultStyle}>{children}</button>;
}

export default Button;
