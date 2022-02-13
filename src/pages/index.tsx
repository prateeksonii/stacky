import Link from "next/link";

const IndexPage = () => {
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
          <Link href="/signin" passHref>
            <a className="text-lg font-bold px-8 py-4 bg-primary rounded">
              Get started
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
