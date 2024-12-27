"use client";
import { ADMIN_MENU } from "@/const/admin-menu";
import { Menu } from "@/entities/Menu.interface";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
    const [menuList, setMenuList] = useState(ADMIN_MENU);
    
    const router = useRouter();

    function handleHide(menu: Menu){
        setMenuList(prevMenuList => 
            prevMenuList.map(item => 
                item === menu ? { ...item, menu_expanded: !item.menu_expanded } : item
            )
        );
    }

    return (
      <>
        <aside id="default-sidebar" className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-5 overflow-y-auto bg-l-text">
                {menuList.map((menu, index) => (
                    <ul key={index} className="space-y-2 font-medium">
                        <div onClick={() => handleHide(menu)} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group">
                            <svg className="w-5 h-5 text-d-text transition duration-75 group-hover:text-l-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">{menu.menu_name}</span>
                        </div>
                        {menu.child_menu?.map((childMenu, childIndex) => (
                            <li key={childIndex} className={menu.menu_expanded ? 'block' : 'hidden'}>
                                <a onClick={() => router.push(childMenu.menu_path? childMenu.menu_path : "/")} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                                    <span className="text-sm flex-1 ms-3 whitespace-nowrap">{childMenu.menu_name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}

            </div>
        </aside>
      </>
    );
}