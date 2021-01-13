module.exports = {
  siteMetadata: {
    title: `hw0k.me`,
    author: {
      name: `남현욱`,
      summary: `세상이 아름다워지는 것을 지향하는 프론트엔드 개발자`,
    },
    description: `기술로 하여금 온 세상을 이롭게`,
    siteUrl: `https://hw0k.me`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-186198985-1`,
      },
    },
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: (edge.node.frontmatter && edge.node.frontmatter.description) || edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMdx(
                  sort: { fields: [frontmatter___date], order: DESC },
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 100, truncate: true)
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date(formatString: "YYYY.MM.DD.")
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'hw0k.me RSS Feed',
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hw0k.me`,
        short_name: `hw0k.me`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#177AB0`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
