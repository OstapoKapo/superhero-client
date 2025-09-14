import { deleteHeroAPI } from "@/api/superheroAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const useDeleteHeroMutation = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const HEROES_QUERY_KEY = ['heroes', 1, 5];

    return useMutation({
        mutationKey: ['delete-hero'],
        mutationFn: deleteHeroAPI,
        onSuccess: () => {
            toast.success("Hero deleted successfully!");
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: HEROES_QUERY_KEY });
        },
    });
}

export default useDeleteHeroMutation;