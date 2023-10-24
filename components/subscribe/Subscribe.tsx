import axios from "axios";
import { ButtonColor, ButtonPrimary } from "../Buttons";
import { useState } from "react";

const Subscribe = () => {
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const data = { email: target.email.value };
    target.email.value = "";
    try {
      const result = await axios.post("/api/subscribe", data);
      if (result.status === 201) {
        setHasSubscribed(true);
        setTimeout(() => setHasSubscribed(false), 1000);
        const data = {
          id: result.data.id,
          email: result.data.email,
        };
        await axios.post("/api/confirm-email", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative bg-white flex flex-col mx-2 sm:mx-auto my-12 p-8 justify-center items-start max-w-3xl rounded-xl border">
      <span className="rounded-br-xl rounded-bl-xl absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      <span className="uppercase font-semibold text-slate-500 tracking-widest">
        Subscribe
      </span>
      <span className="mb-4 font-bold text-slate-800 text-2xl">
        Get email updates when there are free games available.
      </span>
      <form className="w-full sm:flex" onSubmit={submitData}>
        <input
          className="w-full mr-2 px-5 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600"
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
        />
        <ButtonPrimary isSubmit={true} color={ButtonColor.TEAL}>
          Subscribe
        </ButtonPrimary>
      </form>
      {hasSubscribed && (
        <div className="my-2 px-4 py-1 uppercase font-medium tracking-widest rounded-lg bg-teal-600 text-white text-sm transition ease-in-out">
          Subscribed!
        </div>
      )}
    </div>
  );
};

export default Subscribe;
