module.exports = {
  siteMetadata: {
    title: `Hasna Hena Mow`,
    name: `CipherGirl`,
    siteUrl: `https://ciphergirl.github.io./blog`,
    description: `Web Developer from Bangladesh writes about her jouney in tech industry. Here you can find her story becoming Mozilla intern by Outreachy, a remote paid intership program`,
    hero: {
      heading: `Hi! I'm Hasna Hena Mow, a Tech Enthusiast from Bangladesh. Welcome to my Outreachy journey blog :)`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/@_CipherGirl_`,
      },
      {
        name: `github`,
        url: `https://github.com/CipherGirl`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/hasna-hena-mow`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-them",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hasna Hena Mow`,
        short_name: `CipherGirl`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
  pathPrefix: "/blog",
};
