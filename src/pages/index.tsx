import React from 'react';
import { graphql, Link } from 'gatsby';
import { IndexQuery } from '@/../types/graphql-types';
import { Base } from '@layouts/Base';
import { Seo } from '@/components/utils/Seo';
import { PostItem } from '@components/molecules/PostItem';
import { Mdi } from '@/components/molecules/Mdi';
import { Btn } from '@/components/molecules/Btn';
type Props = {
    data: IndexQuery;
}
const Index: React.FC<Props> = ( { data } ) => {
    const { references, bugs, parts } = data;
    return (
        <>
            <Seo title='Top' />
            <Base>
                { {
                    mv: (
                        <section className='py-36 max-w-inner mx-auto'>
                            <h2 className='uppercase font-bold text-primary text-5xl tracking-wider mb-10'>hello&ensp;world</h2>
                            <p className='text-primary tracking-wider mb-20 font-bold'>プログラマチーム&ensp;ナレッジベースへようこそ</p>
                            <label className='w-full inline-block flex h-14'>
                                <div className='w-1/2 border-2 border-primary h-full'>
                                    <input type='search' className='w-full h-full' />
                                </div>
                                <Btn className='block font-bold text-2xl w-14 bg-primary text-white'><Mdi icon='magnify' /></Btn>
                            </label>
                        </section>
                    ),
                    main: [
                        { heading: 'references', subheading: 'リファレンス', nodes: references.edges, to: `/references`, },
                        { heading: 'bugs', subheading: 'バグ', nodes: bugs.edges, to: `/gugs` },
                        { heading: 'parts', subheading: 'パーツ', nodes: parts.edges, to: `/parts` },
                    ].map( ( section, index ) => (
                        <section key={ index } className={ `py-14 ${ index % 2 === 0 ? 'bg-secondary' : '' }` }>
                            <div className='max-w-inner mx-auto text-center'>
                                <h2 className='uppercase font-bold text-primary text-3xl tracking-wider mb-4'>{ section.heading }</h2>
                                <p className='tracking-wider text-primary mb-8'>{ section.subheading }</p>
                                <div className='inline-block grid grid-cols-3 mb-12 w-full text-left'>
                                    { section.nodes.map( md => md.node ).map( node => <PostItem key={ node.id } { ...{ node, } } /> ) }
                                </div>
                                <Btn to={ section.to } className='inline-block uppercase rounded-full bg-primary text-white font-bold py-3 px-12 mx-auto'>view more</Btn>
                            </div>
                        </section>
                    ) ),
                } }
            </Base>
        </>
    );
};
export const pageQuery = graphql`
    query Index {
        references: allMarkdownRemark(
            filter: { frontmatter: { category: { eq: "リファレンス" } } }
            limit: 3
        ) {
            totalCount
            edges {
                node {
                    id
                    excerpt( format: PLAIN, pruneLength: 120 )
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date( formatString: "MM DD, YYYY" )
                        category
                    }
                    html
                }
            }
        }
        parts: allMarkdownRemark(
            filter: { frontmatter: { category: { eq: "パーツ" } } }
            limit: 3
        ) {
            totalCount
            edges {
                node {
                    id
                    excerpt( format: PLAIN, pruneLength: 120 )
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date( formatString: "MM DD, YYYY" )
                        category
                    }
                    html
                }
            }
        }
        bugs: allMarkdownRemark(
            filter: { frontmatter: { category: { eq: "バグ" } } }
            limit: 3
        ) {
            totalCount
            edges {
                node {
                    id
                    excerpt( format: PLAIN, pruneLength: 120 )
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date( formatString: "MM DD, YYYY" )
                        category
                    }
                    html
                }
            }
        }
    }
`;
export default Index;
