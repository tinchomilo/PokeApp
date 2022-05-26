import { Route, Routes } from "react-router-dom"
import { DetailPage } from "../components/detailPage/DetailPage"
import { HomePage } from "../components/homePage/HomePage"

import { Navbar } from "../components/ui/Navbar"

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/detail" element={ <DetailPage /> } />
        <Route path="/main" element={ <HomePage /> } />
      </Routes>
    </>
  )
}