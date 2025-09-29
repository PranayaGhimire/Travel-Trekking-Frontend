'use client'
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import AuthProvider from "@/context/AuthProvider";

const Client = ({children}:{children:React.ReactNode}) => {
      const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <NavBar />
            {children}
          <Footer />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Client;
