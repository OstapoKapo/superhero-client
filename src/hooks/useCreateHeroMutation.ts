import { createHeroAPI } from "@/api/superheroAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const HEROES_QUERY_KEY = ['heroes', 1, 5];

const useCreateHeroMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createHeroAPI,

    onMutate: async (newHeroData) => {
      toast.loading("Creating hero...", { id: 'create-hero' });

      await queryClient.cancelQueries({ queryKey: HEROES_QUERY_KEY });
      const previousData: any = queryClient.getQueryData(HEROES_QUERY_KEY);

      queryClient.setQueryData(HEROES_QUERY_KEY, (oldData: any) => {
        if (!oldData?.data) return oldData;
        return { ...oldData, newHeroData };
      });

      return { previousData };
    },

    onSuccess: (createdHero) => {
      toast.success("Hero created successfully!", { id: 'create-hero' });

      router.push(`/heroes/${createdHero.id}`);
    },

    onError: (_err, _newHero, context) => {
      toast.error("Failed to create hero", { id: 'create-hero' });
      if (context?.previousData) {
        queryClient.setQueryData(HEROES_QUERY_KEY, context.previousData);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['heroes'] });
    },
  });
};

export default useCreateHeroMutation;
