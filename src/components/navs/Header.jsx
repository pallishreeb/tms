import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useOutsideClick } from "../../utils/hooks";

const Header = () => {
  const menuItem = [
    {
      id: 1,
      lable: "Shipments",
      children: [
        {
          type: "LTL",
          lable: "LTL Search",
        },
      ],
    },
    {
      id: 2,
      lable: "Accounting1",
    },
  ];

  const [menuDropdownShow,setMenuDropDownShon]=useState(false)

  const onMenuClickHandler=()=>{
    setMenuDropDownShon(true)
  }

  const menuClickOutside=()=>{
    setMenuDropDownShon(false)
  }  

  
  const ref = useOutsideClick(menuClickOutside);

  return (
    <nav className="bg-[#343a40] p-3" >
      <div className="grid grid-cols-9 items-center gap-4">
        <div className="col-span-1 text-white text-3xl not-italic font-medium">
          TMS
        </div>
        <div className="col-span-5 ">
          <ul className="flex gap-2.5">
            {menuItem.map((item, index) => {
              return (
                <li className={item.children ? "relative group" : ""}>
                  <div className="text-[rgba(255,255,255,.5)] hover:text-white" onClick={()=>onMenuClickHandler()} ref={ref}>
                    {item.lable} {item.children && <ArrowDropDownIcon />}
                  </div>
                  {item.children &&
                    item.children.map((childItem) => {
                      return (
                        <ul className={`absolute bg-gray-800 text-white p-2 space-y-2 ${menuDropdownShow ? 'block':'hidden'}`}>
                          <div>{childItem.type}</div>
                          <li>{childItem.label}</li>
                        </ul>
                      );
                    })}
                </li>
              );
            })}
            {/* <li className='relative group'>
              <div>
              Shipments <ArrowDropDownIcon />
              </div>
              <ul className='absolute hidden group-hover:block bg-gray-800 text-white p-2 space-y-2 '>
                <div>LTL</div>
                <li>LTL Search</li>
              </ul>
            </li>
            <li>Accounting</li>
            <li>Accounting</li>
            <li>Accounting</li>
            <li>Accounting</li>
            <li>Accounting</li> */}
          </ul>
        </div>
        <div className="col-span-3">second menu</div>
      </div>
    </nav>
    //   <nav className="bg-stone-700 p-4">
    //   <div className="max-w-full  mx-auto flex items-center bg-stone-300">
    //     <div className="text-white font-bold text-xl">My Navbar</div>
    //     <ul className="flex space-x-4 w-7/12">
    //       <li className="text-white">Home</li>
    //       <li className="text-white">About</li>
    //       <li className="text-white relative group">
    //         Services
    //         <ul className="absolute hidden bg-gray-800 text-white p-2 space-y-2 group-hover:block">
    //           <li>Service 1</li>
    //           <li>Service 2</li>
    //           <li>Service 3</li>
    //         </ul>
    //       </li>
    //       <li className="text-3xl font-bold underline">Contact</li>
    //     </ul>
    //     <div className=' w-6/12'>hello</div>
    //   </div>
    // </nav>
  );
};

export default Header;
