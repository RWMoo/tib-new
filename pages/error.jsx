import Head from "next/head";
import Layout from "../components/layout";

const Success = () => {
  return (
    <div>
      <Head>
        <title>Territory Insurance Brokers - Form Error</title>
        <meta name="description" content="There has been an error submitting your request." />
      </Head>
      <Layout>
        <main>
          <div
            className={
              "text-center mx-auto h-80 flex justify-center flex-col items-center"
            }
          >
            <h1
              className={
                "text-2xl xs:text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-700 my-8"
              }
            >
              Error
            </h1>
            <p>
              There has been an error submitting your request. Please contact
              enquiries@territoryinsurancebrokers.com.au and we will assist you.
            </p>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Success;
