import { useNavigate } from "react-router-dom";
import { useGetServicesQuery } from "./serviceApi.js";
import { Button } from "@/components/ui/button.jsx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";
import { base } from "@/app/mainApi.js";
import { EditIcon } from "lucide-react";
import RemoveService from "./RemoveService.jsx";


export default function ServiceProfile() {
    const { isLoading, error, data } = useGetServicesQuery();
    const nav = useNavigate();

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.data}</h1>
    return (
        <div className="pt-10 px-50">
            <div className="flex justify-end">
                <Button onClick={() => nav('/form/addService')} className='bg-blue-700'>Add Service</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Edit</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>


                    {data.services?.map(item => (
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

                            <TableCell>{item.description}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" onClick={() => nav(`/form/editService/${item._id}`)}>
                                    <EditIcon className="text-blue-800" />
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <RemoveService id={item._id} />
                            </TableCell>
                        </TableRow>
                    ))}







                </TableBody>
            </Table>
        </div>
    )
}
