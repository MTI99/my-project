import React from "react";
import style from "./Home.module.css";
import RecentProducts from "../RecentProducts/RecentProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";

export default function Home() {
  return (
    <>

      <div className="container">
        <MainSlider />
        <CategorySlider />
      </div>
      <RecentProducts />
    </>
  );
}
