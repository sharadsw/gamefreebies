import { ButtonColor, ButtonPrimary } from "../Buttons";

export const Subscribe = () => {
  return (
    <div className="relative flex flex-col mx-2 sm:mx-auto my-24 p-8 justify-center items-start max-w-3xl rounded-xl border">
      <span className="rounded-br-xl rounded-bl-xl absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <span className="uppercase font-semibold text-slate-500 tracking-widest">
        Subscribe
      </span>
      <span className="mb-4 font-bold text-slate-800 text-2xl">
        Get daily emails when there are free games available.
      </span>
      <form className="w-full sm:flex">
        <input
          className="w-full mr-2 px-5 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
        />
        <ButtonPrimary isSubmit={true} color={ButtonColor.TEAL} onClick={() => console.log("test")}>
          Subscribe
        </ButtonPrimary>
      </form>
    </div>
  );
};
