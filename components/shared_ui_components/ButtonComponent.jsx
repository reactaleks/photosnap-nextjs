export default function Button({btnText, darkMode}) {
  return (
    <div className={` uppercase ${darkMode ? ' bg-white  text-black ' :  'text-white bg-black hover:text-black'} hover:bg-[#DFDFDF] hover:animate-pulse cursor-pointer h-full w-full flex items-center shadow justify-center  font-bold  tracking-[2.5px] `}>
      {btnText}
    </div>
  );
}
