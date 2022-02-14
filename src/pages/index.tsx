import { signIn } from "next-auth/react";
import { ImGithub } from "react-icons/im";
import { useCallback } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    await signIn("github", {
      callbackUrl: "http://localhost:3000/app",
    });
    // router.replace("/app");
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col">
      <header>
        <nav className="pt-12 px-12 text-2xl">
          <div className="font-head">STACKY</div>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-16">
        <h1 className="text-6xl text-center">
          <span className="text-primary font-bold">True</span> social media
          experience <br />
          for <span className="text-primary font-bold">developers</span>
        </h1>
        <section>
          <button
            className="text-lg font-bold px-8 py-4 bg-primary rounded flex items-center gap-2"
            onClick={handleLogin}
          >
            <ImGithub /> Sign in with github
          </button>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
