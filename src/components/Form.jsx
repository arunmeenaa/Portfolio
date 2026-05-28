import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Mail, User, MessageSquare, Send } from "lucide-react";

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

      toast.success("Message sent successfully 🚀");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-4 md:px-10 lg:px-20 font-montserrat"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-green-500 uppercase tracking-widest font-semibold mb-3">
            Contact
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Let's <span className="text-green-500">Connect</span>
          </h1>

          <p className="text-zinc-400 max-w-2xl leading-8 text-lg">
            Have a project idea, collaboration opportunity, or just want to say
            hello? Feel free to send me a message.
          </p>

          <div className="w-24 h-1 bg-green-500 rounded-full mt-6"></div>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-green-500/10">
                  <Mail className="text-green-500" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-zinc-400 text-sm">
                    arunmeena0312@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-green-500/10">
                  <MessageSquare className="text-green-500" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Quick Response</h3>
                  <p className="text-zinc-400 text-sm">
                    Usually replies within a few hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl hover:border-green-500/40 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-8">
                Send Me a Message
              </h2>

              {/* Name */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-zinc-300">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-black border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                  />
                </div>

                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">
                    Name is required
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-zinc-300">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />

                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black border border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500 transition-all duration-300"
                  />
                </div>

                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    Email is required
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-zinc-300">
                  Message
                </label>

                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-black border border-zinc-800 rounded-2xl px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:border-green-500 transition-all duration-300 resize-none"
                ></textarea>

                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block">
                    Message is required
                  </span>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;