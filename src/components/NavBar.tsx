"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthProvider";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const NavBar = () => {
  const path = usePathname();

  const { token, setToken, user, setUser } = useAuth();
  const shortEmail = user?.email.slice(0, 2).toUpperCase();

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
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="flex justify-around items-center bg-gradient-to-l from-yellow-500 to-teal-600 text-white h-14">
        <p className="text-xl">Adventure Trails</p>
        <Button className="bg-teal-800 hover:bg-teal-900 w-28 h-full cursor-pointer">
          <Link href={`/destinations`}>Start Now</Link>
        </Button>
      </div>
      <nav className="bg-gray-200   shadow-lg">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
          {/* Logo */}
          <Image src={"/images/logo.png"} alt="" width={80} height={80} />
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${
                  path === link.href && "text-teal-600"
                } hover:text-teal-500 transition`}
              >
                <Link href={link.href}>{link.name}</Link>
                {path === link.href && (
                  <p className="mt-1 w-8 border-2 border-teal-600"></p>
                )}
              </li>
            ))}
          </ul>
          {user && token && <p className="">Hello, {user?.username}</p>}
          {/* Login Button */}
          <div className="">
            {token ? (
              <div className="flex items-center">
                <div className="flex justify-center w-12 bg-teal-600  text-white p-1.5 rounded-l-lg">
                  {shortEmail}
                </div>
                <div className="bg-teal-500 cursor-pointer p-2 text-white rounded-r-lg">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <FaUserCircle className="text-xl" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="bg-red-600 hover:bg-red-700 cursor-pointer">
                              Logout
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Are you sure you want to logout ?
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. You will be logged
                                out and will have to login again.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={handleLogout}
                                className="bg-teal-600 hover:bg-teal-700"
                              >
                                Continue
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ) : (
              <Button className=" bg-teal-600 font-semibold hover:bg-teal-700 transition">
                <Link href="/auth/login">Login</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-teal-500 md:hidden">
                <HiMenu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetHeader>
                <SheetTitle>Adventure Trails</SheetTitle>
                <SheetDescription>
                    Click on links below to visit the page.
                </SheetDescription>
              </SheetHeader>
              <div className="md:hidden px-6 py-6 transition-all duration-300">
                <ul className="flex flex-col gap-4 font-semibold">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className={`${
                        path === link.href && "text-teal-500"
                      } transition border-b-2  py-2`}
                    >
                      <Link href={link.href}>
                        {link.name}
                      </Link>
                      {path === link.href && (
                        <p className="mt-1 w-8 border-2 border-teal-600"></p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
