'use client'
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const Client = ({children}:{children:React.ReactNode}) => {
      const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
        {children}
      <Footer />
    </QueryClientProvider>
  );
};

export default Client;
