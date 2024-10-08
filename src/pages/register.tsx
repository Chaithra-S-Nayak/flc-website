import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { type NextPage } from "next";
import React from "react";

import RegisterForm from "~/components/forms/register";

const Register: NextPage = () => {
  return (
    <div className="flex min-h-screen gap-10 bg-gradient-to-bl from-[#1e1333] via-[#0a001c] to-[#0e0a2a] ">
      <div className="sm:my-15 my-10 flex w-full flex-col items-center justify-center gap-8 sm:gap-16 lg:mx-24 lg:flex-row">
        <div className="order-2 w-full flex-col md:w-4/5 lg:order-1 lg:w-1/2">
          <div className="my-20 px-6 sm:px-10">
            <h1 className="flex justify-start text-2xl text-white sm:text-4xl">
              Finite Loop Club
            </h1>

            <div className="mt-6 lg:mt-12">
              <SiGithub className="size-10" />
              <h1 className="pt-2 text-lg font-bold text-cyan-50">Github</h1>
              <p className="text-gray-300">
                Join Finiteloop Club on GitHub for collaborative coding and
                innovative projects. Explore repositories, contribute to open
                source, and enhance your programming skills with our community.
              </p>
            </div>
            <div className="mt-6 lg:mt-12">
              <SiDiscord className="size-10" />
              <h1 className="pt-1 text-lg font-bold text-cyan-50">Discord</h1>
              <p className="text-gray-300">
                Connect with Finiteloop Club on Discord to engage in lively tech
                discussions, receive coding support, and participate in
                exclusive events. Join our community to grow and network with
                fellow developers.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 mx-8 w-4/5 flex-col items-center justify-center rounded-lg  p-4 sm:mt-16 sm:w-2/3 lg:order-2 lg:w-1/2">
          <div className="m-3">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
