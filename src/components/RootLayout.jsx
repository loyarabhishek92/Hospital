import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import SearchBar from "@/pages/search/SearchBar.jsx";


export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
