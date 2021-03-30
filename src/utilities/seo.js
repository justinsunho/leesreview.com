import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ article, description, image, title }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const { defaultDescription, defaultImage, defaultTitle, siteUrl } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title}>
            <meta content={seo.description} name="description" />
            <meta content={seo.image} name="image" />
            <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />

            {seo.url && <meta content={seo.url} property="og:url" />}

            {(article ? true : null) && <meta content="article" property="og:type" />}

            {seo.title && <meta content={seo.title} property="og:title" />}

            {seo.description && <meta content={seo.description} property="og:description" />}

            {seo.image && <meta content={seo.image} property="og:image" />}
        </Helmet>
    );
};

export default SEO;

SEO.propTypes = {
    article: PropTypes.bool,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
};

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
};

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl
                defaultImage: image
            }
        }
    }
`;
