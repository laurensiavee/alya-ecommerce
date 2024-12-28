'use client'

import { selectIsSidebarOpen } from "@/store/baseSlice";
import { useSelector } from "react-redux";

export default function ContentContainer({children}) {
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  
  return (
    <div className={
        isSidebarOpen? "p-4 sm:ml-64" : "p-4 sm:ml-10" 
      }>
        <div className="m-5 p-5">
          {children}
        </div>
    </div>
  )
}
