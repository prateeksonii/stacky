import { useAtom } from "jotai";
import { authFormAtom } from "../atoms";
import CreateUserForm from "../components/forms/CreateUserForm";
import EmailForm from "../components/forms/EmailForm";
import PasswordForm from "../components/forms/PasswordForm";

const SignInPage = () => {
  const [authForm, setAuthForm] = useAtom(authFormAtom);

  return (
    <div className="h-screen w-screen flex flex-col">
      <header>
        <nav className="pt-12 px-12 text-2xl">
          <div className="font-head">STACKY</div>
        </nav>
      </header>
      <main className="rounded shadow w-1/4 mx-auto flex-1 flex flex-col items-center justify-center gap-16">
        <h1 className="text-4xl text-center">Let's get you started</h1>
        {authForm === "email" ? (
          <EmailForm />
        ) : authForm === "password" ? (
          <PasswordForm />
        ) : (
          <CreateUserForm />
        )}
      </main>
    </div>
  );
};

export default SignInPage;
