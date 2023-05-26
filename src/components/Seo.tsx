import React, { ReactNode } from "react";
import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          siteLanguage
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

type SeoProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
};

const SEO: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
    siteLanguage,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    siteLanguage,
  };

  return (
    <>
      <html lang={seo.siteLanguage} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content="personal website,portfolio,fullstack developer,mobile app developer,freelancer"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta
        name="twitter:image:alt"
        content="Portrait Of Martin Meneghetti"
      ></meta>

      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />

      {children}
    </>
  );
};

export default SEO;
