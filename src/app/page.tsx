"use client";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
    return (
        <div className="bg-slate-900 w-[1500px] h-[800px] top-[100px]">
            <Navbar />             
            <Hero />                   
        </div>
    );
}   