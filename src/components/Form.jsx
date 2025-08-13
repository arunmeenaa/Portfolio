import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Form() {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bqoeokrb", userInfo);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="contact" className="font-montserrat pl-16 pt-20">
          <div className="font-bold text-2xl font-montserrat pb-5">
            Contact Me
          </div>
          <div className="">Fill out this form bellow to contact me</div>
          <div className="flex justify-center">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-80">
              <h2 className="text-lg font-bold ">Send Your Message</h2>

              <label className="block mb-1 font-semibold text-sm">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your full name"
                className="w-full mb-3 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <span>This field is required</span>}

              <label className="block mb-1 font-semibold text-sm">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email address"
                className="w-full mb-3 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <span>This field is required</span>}

              <label className="block mb-1 font-semibold text-sm">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Type your message here"
                rows="3"
                className="w-full mb-4 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              {errors.message && <span>This field is required</span>}

              <button
                type="submit"
                disabled={isSending}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
