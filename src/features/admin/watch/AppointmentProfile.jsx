import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";


import { useGetAppointmentsQuery } from "./appointmentApi.js";
import RemoveAppointment from "./RemoveAppointment.jsx";



export default function AppointmentProfile() {
     const {isLoading, error, data} = useGetAppointmentsQuery();
  

     if(isLoading) return <h1>Loading...</h1>
     if(error) return <h1>{error.data}</h1>
       console.log(data)
  return (
   
     <div className="pt-10 px-50">
            
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone number</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Doctor</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>


                    {data.appointments?.map(item => (
                        <TableRow key={item._id}>
                           
                            
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.phone}</TableCell>
                            <TableCell>{item.gender}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{item.time}</TableCell>
                            <TableCell>{item.doctor}</TableCell>
                            <TableCell>{item.department}</TableCell>
                            <TableCell>{item.message}</TableCell>
                            
                            <TableCell className="text-right">
                                <RemoveAppointment id={item._id}/>
                            </TableCell>
                        </TableRow>
                    ))}







                </TableBody>
            </Table>
        </div>
  )
}
