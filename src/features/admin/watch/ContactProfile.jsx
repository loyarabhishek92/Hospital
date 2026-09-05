import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.jsx";
import { useGetContactsQuery } from "./contactApi.js";
import RemoveContact from "./RemoveContact.jsx";


export default function ContactProfile() {
    const {isLoading, error, data} = useGetContactsQuery();
  
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
                        <TableHead>Subject</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead className="text-right">Remove</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>


                    {data.contacts?.map(item => (
                        <TableRow key={item._id}>
                      
                            
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.subject}</TableCell>
                            <TableCell>{item.message}</TableCell>
    
                            <TableCell className="text-right">
                                <RemoveContact id={item._id}/>
                            </TableCell>
                        </TableRow>
                    ))}







                </TableBody>
            </Table>
        </div>
  )
}
