import { heroService } from "@/services/hero.service";
import { useHeroList } from "@/store/heroListContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


const useChangeHeroMutation = () => {
    const HEROES_QUERY_KEY = ['heroes', 1, 5];
    const queryClient = useQueryClient();
    const {setUpdateOpen} = useHeroList();
    return useMutation({
        mutationKey: ['change-hero'],
        mutationFn: ({id, heroData}: {id: number, heroData: FormData}) => heroService.update({id, heroData}),
        onSuccess: () => {
            toast.success("Hero changed successfully!", { id: 'change-hero' });
            setUpdateOpen(false);
        },
        onError: (error) => {
            console.error("Error changing hero:", error);
        },
        onMutate: () => {
            toast.loading("Changing hero...", { id: 'change-hero' });
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: HEROES_QUERY_KEY });
        }
    });
};

export default useChangeHeroMutation;