import { useSelector } from "react-redux";
import { useRemoveContactMutation } from "./contactApi.js"
import { toast } from "@/components/ui/toast.jsx";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Spinner } from "@/components/ui/spinner.jsx";
import { TrashIcon } from "lucide-react";


export default function RemoveContact({id}) {
    const { user } = useSelector(state => state.userSlice);
    const [deleteContact, {isLoading}]= useRemoveContactMutation();

    const handleRemove = async () => {
                try {
                    await deleteContact({ id, token: user.token }).unwrap();
                    toast.add({
                        type: 'success',
                        title: 'Deleted Successfully',
                        description: 'contact has been deleted'
                    });
                } catch (err) {
                    toast.add({
                        type: 'error',
                        title: 'failed to delete',
                        description: 'check your code'
                    });
                }
            }

  return (
    <div>
        <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">
                        {isLoading ? <Spinner /> : <TrashIcon className="text-red-800" />}
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your
                            account from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleRemove}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
    </div>
  )
}
