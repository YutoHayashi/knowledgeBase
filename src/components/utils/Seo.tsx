/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
type Props = {
    title: string;
    description: string;
    lang: string;
    meta: ConcatArray<{
        property: string;
        content: string | undefined;
        name?: undefined;
    } | {
        name: string;
        content: any;
        property?: undefined;
    }>;
}
const DefaultProps: Pick<Props, 'description' | 'lang' | 'meta'> = {
    description: '',
    lang: 'ja',
    meta: [  ],
};
export const Seo: React.FC<Partial<Props> & Pick<Props, 'title'>> = ( _props ) => {
    const props: Props = { ...DefaultProps, ..._props };
    const { site } = useStaticQuery( graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    ` );
    const name = site.siteMetadata.title;
    const author = site.siteMetadata.author;
    const title = props.title;
    const lang = props.lang;
    const meta = props.meta;
    const description: string | undefined = props.description || site.siteMetadata?.description;
    return (
        <Helmet htmlAttributes={ {
                lang,
            } }
            title={ title }
            titleTemplate={ title ? `%s | ${ name }` : undefined }
            meta={ [
                { name: `author`, content: author, },
                { name: `description`, content: description, },
                { property: `og:title`, content: title, },
                { property: `og:description`, content: description, },
                { property: `og:type`, content: `website`, },
                { name: `twitter:card`, content: `summary`, },
                { name: `twitter:creator`, content: author, },
                { name: `twitter:title`, content: title, },
                { name: `twitter:description`, content: description, },
            ].concat( meta ) }
        />
    );
};
 