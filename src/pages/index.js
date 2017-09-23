import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'dateformat';


import Separator from './../components/Separator';
import Menu from './../components/Menu';
import Posts from './../components/Posts';
import MetaTags from './../components/MetaTags';

class IndexPage extends React.Component {
  render(){
    const {data} = this.props;
    let { edges: posts } = data.allMarkdownRemark;
    let { description, title, siteUrl } = data.site.siteMetadata;
    posts = posts.map(post => post.node);
    return(<div>
      <Posts posts={posts} />
    </div>)
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
						draft					
				
          }
        }
      }
    }
  }
`;

