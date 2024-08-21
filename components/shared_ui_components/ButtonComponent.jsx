export default function Button({btnText}) {
  return (
    <div className="hover:bg-gray-100 cursor-pointer hover:text-black w-[310px] h-[48px] md:w-[158px] md:h-[40px] flex items-center justify-center text-white font-bold  tracking-[2.5px] bg-black">
      {btnText}
    </div>
  );
}
