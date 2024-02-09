import { useMutation } from "@tanstack/react-query";
import { signup as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success(
        "Account is successfullt created please verify the new account from the user's email address"
      );
    },
  });

  return { signup, isLoading };
}
