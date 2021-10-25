export type Markdown = {
    id: string;
    frontmatter: {
        title: string;
        date: string;
    }
    excerpt: string;
    html: string;
    htmlAst: string;
    fields: {
        slug: string;
    };
};
