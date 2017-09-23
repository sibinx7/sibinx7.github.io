module.exports = {
  pathPrefix: '/',
	siteMetadata: {
		author: 'Sibin Xavier',
		title: `Sibin Xavier's Blog`,
		siteUrl: `blog.7chip.com`,
		description: `I'm Sibin Xavier, a fullstack web developer, a proud wanderer and a passionate doer.
		I like to write about my learnings, mistakes, tips and tricks in Web development. During each project,
    i go through many difficult situations, i like to write about these situations, so it may help some other people
    and help to improve my skills.`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-sass`,		
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `tomato`,
				showSpinner: true
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (eg <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (eg for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-',
						},
					},
					{
						resolve: `gatsby-remark-responsive-image`,
						options: {
							// It's important to specify the maxWidth (in pixels) of 
							// the content container as this plugin uses this as the 
							// base for generating different widths of each image. 
							maxWidth: 590,
						},
					}
				]	
			}
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
       {
         site {
           siteMetadata {
             title
             description
             siteUrl
           }
         }
       }
     `,
				feeds: [{
					serialize: ({
						query: {
							site,
							allMarkdownRemark
						}
					}) => {
						return allMarkdownRemark.edges
							.filter(post => !post.node.frontmatter.draft)
							.map(edge => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
									guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
									custom_elements: [{
										'content:encoded': edge.node.html
									}],
								});
							});
					},
					query: `
           {
             allMarkdownRemark(
               limit: 1000,
               sort: { order: DESC, fields: [frontmatter___date] }
             ) {
               edges {
                 node {
                   excerpt
                   html
                   frontmatter {
                     title
                     date
                     path
										 draft										
                   }
                 }
               }
						 }
           }
         `,
					output: '/rss.xml'
				}]
			}
		}
	],
}
