import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";
import { authFormAtom, authFormValuesAtom } from "../../atoms";

type FormValues = {
  email: string;
};

const EmailForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
    },
  });

  const [authForm, setAuthForm] = useAtom(authFormAtom);
  const [authFormValues, setAuthFormValues] = useAtom(authFormValuesAtom);

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    const { email } = values;
    try {
      const data = await fetch(`/api/users/${email}`).then((res) => res.json());
      setAuthFormValues({ ...authFormValues, email });
      if (data.user) {
        setAuthForm("password");
      } else {
        setAuthForm("create");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email address</label>
        <input
          className="bg-primary-light p-2 rounded"
          type="email"
          id="email"
          placeholder="Your real email address"
          {...register("email", {
            required: "Email address cannot be empty",
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

export default EmailForm;
