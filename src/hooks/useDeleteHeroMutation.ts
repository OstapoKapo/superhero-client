import { deleteHeroAPI } from "@/api/superheroAPI";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const useDeleteHeroMutation = () => {
    const router = useRouter();

    return useMutation({
        mutationKey: ['delete-hero'],
        mutationFn: deleteHeroAPI,
        onSuccess: () => {
            router.push('/heroes');
            toast.success("Hero deleted successfully!");
        },
        onError: (error) => {
            console.error("Error deleting hero:", error);
        }
    });
}

export default useDeleteHeroMutation;