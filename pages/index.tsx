import Calendar from "@/components/Calendar/Calendar";
import Modal from "@/components/Modal/Modal";
import SideBarRight from "@/components/SideBarRight/SideBarRight";
import React from "react";

export default function Home() {
  return (
    <main className="main">
      <div className="home_container">
        <Modal />
        <div className="home_container__items w-3/4 p-10">
          <Calendar />
        </div>
        <div className="home_container__items--right">
          <SideBarRight />
        </div>
      </div>
    </main>
  );
}
