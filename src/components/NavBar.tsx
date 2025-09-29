"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthProvider";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import { usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Image from "next/image";

const NavBar = () => {
  const path = usePathname();
  
  const {token,setToken,user,setUser} = useAuth();
  const shortEmail = user?.email.slice(0,2).toUpperCase();
  console.log(shortEmail);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Contact Us", href: "/contactUs" },
  ];

  const handleLogout = () => {
    Cookies.remove("token");
    setToken(null);
    localStorage.removeItem("user");
    setUser(null);
    toast.success("User logged out successfully");
  }

  return (
    <header className="w-full fixed top-0 z-50">
      <div className='flex justify-around items-center bg-teal-600 text-white h-14'>
         <p className='text-xl'>Adventure Trails</p>
          <Button className='bg-teal-800 hover:bg-teal-900 w-28 h-full cursor-pointer'>Start Now</Button>
      </div>
         <nav className="bg-gray-200   shadow-lg">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Image src={"/images/logo.png"} alt="" width={80} height={80}/>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          {navLinks.map((link, index) => (
            <li key={index} className={`${path === link.href && "text-teal-600"} hover:text-teal-500 transition`}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        {user && <p className="">Hello, {user?.username}</p>}
        {/* Login Button */}
        <div className="hidden md:block">
         { token ?
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-teal-800 hover:bg-teal-900">{shortEmail}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{user?.email}</DropdownMenuItem>
              <DropdownMenuItem asChild>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button 
                      className="bg-red-600 hover:bg-red-700 cursor-pointer">
                        Logout
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                            Are you sure you want to logout ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. You will be logged out and will have to login again.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogout} className="bg-teal-600 hover:bg-teal-700" >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          : <Button className=" bg-teal-600 font-semibold hover:bg-teal-700 transition">
            <Link href="/auth/login">Login</Link>
          </Button>}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden  text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-6 transition-all duration-300 bg-gray-100">
          <ul className="flex flex-col gap-4 font-semibold">
            {navLinks.map((link, index) => (
              <li key={index} className={`${path === link.href && "text-teal-500"} transition`}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              { token ? 
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                    className="bg-red-600 hover:bg-red-700 cursor-pointer">
                      Logout
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                          Are you sure you want to logout ?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                          This action cannot be undone. You will be logged out and will have to login again.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>
                          Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={handleLogout} className="bg-teal-600 hover:bg-teal-700" >
                          Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              : <Button className="w-full bg-teal-600  font-semibold hover:bg-teal-700 transition cursor-pointer">
                <Link href="/auth/login">Login</Link>
              </Button>}
            </li>
          </ul>
        </div>
      )}
    </nav>
    </header>
   
  );
};

export default NavBar;
