"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
    const router = useRouter();

    return (
      <>
        <aside id="default-sidebar" className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-l-text">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group">
                        <svg className="w-5 h-5 text-d-text transition duration-75 group-hover:text-l-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Promotion</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/`} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Add Promotion</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/`} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Promotion List</span>
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group">
                        <svg className="w-5 h-5 text-d-text transition duration-75 group-hover:text-l-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Product</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => router.push('/add-product')} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Add Product</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/`} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Restock</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/`} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Add Product Category</span>
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group">
                        <svg className="w-5 h-5 text-d-text transition duration-75 group-hover:text-l-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Order</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/`} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Order List</span>
                        </a>
                    </li>
                </ul>
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="/" className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group">
                        <svg className="w-5 h-5 text-d-text transition duration-75 group-hover:text-l-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ms-3">Complain</span>
                        </a>
                    </li>
                    <li>
                        <a href={`/`} className="flex items-center p-2 text-d-text rounded-lg hover:bg-l-text-secondary group ">
                            <span className="text-sm flex-1 ms-3 whitespace-nowrap">Complain List</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
      </>
    );
}