import Head from "next/head";
import Layout from "../components/layout";

const Success = () => {
  return (
    <div>
      <Head>
        <title>Territory Insurance Brokers - Success</title>
        <meta name="description" content="Thank you for getting in touch, we will respond to your query as soon as possible." />
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
              Success
            </h1>
            <p>
              Thank you for getting in touch, we will respond to your query as
              soon as possible.
            </p>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Success;
