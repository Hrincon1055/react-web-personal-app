import React from "react";

// Mis Componentes
import HomeCourses from "../components/web/homeCourses/HomeCourses";
import HowMyCoursesWork from "../components/web/howMyCpoursesWork/HowMyCoursesWork";
import ReviewsCourses from "../components/web/reviewsCourses";
import MainBanner from "../components/web/mainBanner/MainBanner";

//* Inicio
export default function Home() {
  return (
    <>
      <MainBanner />
      <HomeCourses />
      <HowMyCoursesWork />
      <ReviewsCourses />
    </>
  );
}
