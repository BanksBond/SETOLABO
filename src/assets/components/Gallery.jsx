const colors = [
  { color: "bg-red-500", size: "row-span-1 col-span-1" },
  { color: "bg-blue-500", size: "row-span-2 col-span-3" },
  { color: "bg-green-500", size: "row-span-1 col-span-1" },
  { color: "bg-yellow-500", size: "row-span-1 col-span-2" },
  { color: "bg-purple-500", size: "row-span-1 col-span-2" },
  { color: "bg-pink-500", size: "row-span-2 col-span-1" },
  { color: "bg-indigo-500", size: "row-span-2 col-span-1" },
  { color: "bg-gray-500", size: "row-span-1 col-span-1" },
  { color: "bg-teal-500", size: "row-span-1 col-span-1" },
  { color: "bg-orange-500", size: "row-span-1 col-span-1" },
];

const Gallery = () => {
  return (
    <div
      className="grid grid-cols-4 gap-4 p-4"
      style={{ gridTemplateColumns: "repeat(4, 322px)", gridAutoRows: "335px" }}
    >
      {colors.map((item, index) => (
        <div
          key={index}
          className={`${item.size} ${item.color} rounded-lg`}
        ></div>
      ))}
    </div>
  );
};

export default Gallery;
