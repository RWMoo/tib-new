import Head from "next/head";
import social_image from "/public/images/tib photos/tib-social-01.png"

const SEO = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={"website"} />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={social_image} />
      <meta property="og:site_name" content="Territory Insurance Brokers" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content="Territory Insurance Brokers" />
      <meta name="twitter:image" content={social_image} />
    </Head>
  );
};

export default SEO;
