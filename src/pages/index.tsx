import type { NextPage } from "next";
import Head from "next/head";
import React from 'react';
import { TechnologyCard } from "../components/";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Apsim classic to NextGen Variables</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href={`${process.env.BACKEND_URL}/favicon.ico`} />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="md:text-[2rem] leading-normal font-bold text-gray-700">
          Apsim Classic to NextGen Variables
        </h1>
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard name="Parse Classic Variables" documentation="/parse"></TechnologyCard>
          <TechnologyCard name="Edit NextGen Variables" documentation="/nextgen-edit"></TechnologyCard>
          <TechnologyCard name="View Variables" documentation="/view-variable"></TechnologyCard>
        </div>

      </main>
    </>
  );
};

export default Home;
