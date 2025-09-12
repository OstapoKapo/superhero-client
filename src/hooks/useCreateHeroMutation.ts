import { createHeroAPI } from "@/api/superheroAPI"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"

const useCreateHeroMutation = () => {

    const router = useRouter();

    return useMutation({
        mutationKey: ['add-hero'],
        mutationFn: createHeroAPI,
        onSuccess: (hero) => {
            toast.success("Hero created successfully!");
            router.push(`/hero/${hero.id}`);
        },
        onError: (error) => {
            console.error("Error creating hero:", error);
        }
    });
};

export default useCreateHeroMutation;