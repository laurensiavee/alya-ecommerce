import { toast } from "react-toastify";

export function showToast(message: string, type: string) {
    if (type === "success") {
        toast.success(message);
    } else if (type === "error") {
        toast.error(message);
    } 
}
