import { heroService } from "@/services/hero.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const useDeleteHeroMutation = (currentPage: number, setCurrentPage: (p: number) => void, heroesPerPage: number) => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const HEROES_QUERY_KEY = ['heroes', 1, 5];

    return useMutation({
        mutationKey: ['delete-hero'],
        mutationFn: (id: number) => heroService.delete(id),
        onSuccess: () => {
            const data: any = queryClient.getQueryData(['heroes', currentPage, heroesPerPage]);

            if (data && data.heroes.length === 1 && currentPage > 1) {
                setCurrentPage(currentPage - 1); // перекинути на попередню
            }

            toast.success("Hero deleted successfully!");
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['heroes'] });
        },
    });
}

export default useDeleteHeroMutation;