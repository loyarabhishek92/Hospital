import { NavLink, useNavigate } from "react-router-dom";


export default function AdminPage() {
    const nav = useNavigate();
  return (
    <div className="cursor-pointer">
      this is admin pages
      <div onClick={() => nav('/doctorprofile')}>Doctor</div>
      <div>Service</div>
      <div>News</div>
      <div>Appointment</div>
      <div>Contact</div>
    </div>
  )
}
