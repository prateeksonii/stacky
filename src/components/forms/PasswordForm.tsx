import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";
import { authFormAtom, authFormValuesAtom } from "../../atoms";

type FormValues = {
  password: string;
};

const PasswordForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormValues>({
    defaultValues: {
      password: "",
    },
  });

  const [authFormValues, setAuthFormValues] = useAtom(authFormValuesAtom);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const { password } = values;
    // try {
    //   const res = await fetch(`/api/users/${email}`).then((res) => res.json());
    //   if (res.data.user) {
    //     setAuthForm("password");
    //   } else {
    //     setAuthForm("create");
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          className="bg-primary-light p-2 rounded"
          type="password"
          id="password"
          placeholder="Your password"
          {...register("password", {
            required: "Password cannot be empty",
          })}
        />
      </div>
      <button
        type="submit"
        className="w-full text-center p-2 bg-primary mt-8 rounded"
      >
        Continue
      </button>
    </form>
  );
};

export default PasswordForm;
