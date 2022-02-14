import { NextPage } from "next";
import { ImCircleRight } from "react-icons/im";

const AppPage: NextPage = () => {
  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-3">
      <div></div>
      <div className="flex flex-col relative">
        <label htmlFor="message">What's on your mind today?</label>
        <textarea
          id="message"
          className="mt-2 bg-primary-light rounded-lg resize-none p-4 text-lg relative"
          rows={8}
          placeholder="I like programming"
        ></textarea>
        <button
          type="submit"
          className="z-10 bg-primary absolute bottom-4 right-4 py-2 px-4 rounded flex items-center gap-2"
        >
          Send <ImCircleRight />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default AppPage;
