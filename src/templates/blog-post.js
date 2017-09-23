import React from 'react';
import Helmet from 'react-helmet';
import dateformat from 'dateformat';
import GatsbyLink from 'gatsby-link';

import uuidv5 from 'uuid/v5';

import Menu from '../components/Menu';
import BulletListTags from '../components/BulletListTags';
import NavigateLink from '../components/NavigateLink';
import Separator from '../components/Separator';
import MetaTags from '../components/MetaTags';

// import avatarImg from './../../static/images/avatar.jpg';



export default function Template({ data, pathContext }) {
	console.log(data)
  const { markdownRemark: post } = data;
  const { title, siteUrl } = data.site.siteMetadata;
  const { next, prev } = pathContext;

  const isProduction = process.env.NODE_ENV === 'production';
	const fullUrl = `${siteUrl}${post.frontmatter.path}`;
	let coverImage = null;
	if(post.frontmatter.image!=='' || post.frontmatter.image !== false){
		console.log(post.frontmatter.image)
		coverImage = require(`../${post.frontmatter.image}`)
	}
	

  return (	
    <div>
      <MetaTags
        title={`${post.frontmatter.title} - ${title}`}
        description={post.excerpt}
        tags={post.frontmatter.tags}
        path={post.frontmatter.path}
        siteUrl={siteUrl}
        noIndex={post.frontmatter.draft}
				image={coverImage}
      />

      <main className="blog" role="main">
        <div className="medium-8 medium-offset-2 post">
          <header className="post-head">
            <h1 className="post-title mb-3 text-w-700">
              {post.frontmatter.title}
            </h1>
          </header>
          <section className="post-meta">
            <div className="row">
              <div className="col-12 col-md-4">
                <ul className="list-inline">
                  <li>
                    <GatsbyLink
                      to="/"
                      className="author-avatar"
                      itemProp="name"
                    >
                      {/* <img src={avatarImg} alt="Kostas Bariotis" /> */}
                    </GatsbyLink>
                  </li>
                  <li>
                    <div className="author-name">Sibin Xavier</div>
                    <time
                      className="post-date"
                      dateTime={dateformat(
                        post.frontmatter.date,
                        'isoDateTime'
                      )}
                    >
                      {dateformat(post.frontmatter.date, 'd mmmm yyyy')}
                    </time>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-8">
                <BulletListTags
                  tags={post.frontmatter.tags}
                  draft={post.frontmatter.draft}
                />
              </div>
            </div>
          </section>
          <Separator />
          <article className="main-post {{post_class}}">
            <section
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <Separator />
          </article>
        </div>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($refPath: String!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
		}
    markdownRemark(frontmatter: { path: { eq: $refPath } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
				draft		
				image 	
      }
    }
  }
`;
