import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";
import { authFormAtom, authFormValuesAtom } from "../../atoms";

type FormValues = {
  name: string;
  password: string;
};

const CreateUserForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const [authFormValues, setAuthFormValues] = useAtom(authFormValuesAtom);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const { name, password } = values;
    try {
      await fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: authFormValues.email,
          password,
          name,
        }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Full name</label>
        <input
          className="bg-primary-light p-2 rounded"
          type="text"
          id="name"
          placeholder="Your full name"
          {...register("name", {
            required: "Name cannot be empty",
          })}
        />
      </div>
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

export default CreateUserForm;
