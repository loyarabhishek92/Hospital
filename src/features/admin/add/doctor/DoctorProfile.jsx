import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import { useGetDoctorsQuery } from "./doctorApi.js"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { base } from "@/app/mainApi.js";
import { Button } from "@/components/ui/button.jsx";
import { EditIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RemoveDoctor from "./RemoveDoctor.jsx";


export default function DoctorProfile() {
  const {isLoading, error, data} = useGetDoctorsQuery();
  const nav = useNavigate();

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>{error.data}</h1>



  return (
    <div className="pt-10 px-50">
            <div className="flex justify-end">
                <Button onClick={() => nav('/form/addDoctor')} className= 'bg-blue-700'>Add Doctor</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Specialist</TableHead>
                        <TableHead>LinkedinId</TableHead>
                        <TableHead>FacebookId</TableHead>
                        <TableHead>InstagramId</TableHead>
                        <TableHead className="text-right">Edit</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>


                    {data.doctors?.map(item => (
                        <TableRow key={item._id}>
                            <TableCell>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage
                                        src={`${base}/${item.image}`}
                                        alt={item.fallback}
                                    />
                                    <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                                </Avatar>
                                <div className="font-medium">{item.name}</div>
                            </div>
                            </TableCell>
                            
                            <TableCell>{item.specialist}</TableCell>
                            <TableCell>{item.linkedinId}</TableCell>
                            <TableCell>{item.facebookId}</TableCell>
                            <TableCell>{item.instagramId}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" onClick={() => nav(`/form/editDoctor/${item._id}`)}>
                                    <EditIcon className="text-blue-800"/>
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <RemoveDoctor id={item._id}/>
                            </TableCell>
                        </TableRow>
                    ))}







                </TableBody>
            </Table>
        </div>
  )
}
