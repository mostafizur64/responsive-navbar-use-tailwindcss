import { useState } from "react";
import { FaFeatherPointed, FaBars, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Blogs", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* logo here  */}
        <div className="flex text-2xl gap-2 items-center cursor-pointer">
          <FaFeatherPointed className="w-8 h-8 text-blue-600" />
          <span className="font-bold ">Feel</span>
        </div>
        {/* menu icon  */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <FaXmark className=" w-6 h-6 " />
          ) : (
            <FaBars className=" w-6 h-6 " />
          )}
        </div>
        {/* nav links are here  */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {links.map((link, index) => (
            <li className="font-bold my-7 md:my-0 md:ml-10 " key={index}>
              <a href={"/"}>{link.name}</a>
            </li>
          ))}
          <button className="btn bg-blue-600 py-1 px-3 md:ml-10 rounded md:static">
            Get Start
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

// const Navbar = () => {
//     let Links =[
//         {name:"HOME",link:"/"},
//         {name:"SERVICE",link:"/"},
//         {name:"ABOUT",link:"/"},
//         {name:"CONTACT",link:"/"},
//       ];
//       let [open, setOpen] =useState(false);

//     return (
//         <div className='shadow-md w-full fixed top-0 left-0'>
//            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//             {/* logo section */}
//             <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
//                 <FaFeatherPointed className='w-7 h-7 text-blue-600'/>
//                 <span>Inscribe</span>
//             </div>
//             {/* Menu icon */}
//             <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
//                 {
//                     open ? <FaXmark/> : <FaBars />
//                 }
//             </div>
//             {/* linke items */}
//             <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
//                 {
//                     Links.map((link, index) => (
//                     <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
//                         <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
//                     </li>))
//                 }
//                 <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
//             </ul>
//             {/* button */}
//            </div>
//         </div>
//     );
// };

// export default Navbar;
