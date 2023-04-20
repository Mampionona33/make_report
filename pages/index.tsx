import Calendar from "@/components/Calendar";
import React from "react";

export default function Home() {
  return (
    <main className="container mx-auto box-border h-screen flex items-center">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full h-80vh p-5">
          <Calendar />
        </div>
      </div>
    </main>
  );
}
