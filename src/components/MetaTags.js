import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const profileImage = require('../images/sibin-profile.jpg');

const MetaTags = ({ title, description, path, tags, noIndex, siteUrl }) =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: tags },
      ]}
    >
      {noIndex && <meta name="robots" content="noindex" />}
      <meta itemprop="name" content={title}/>
      <meta itemprop="desription" content={description}/>
      <meta itemprop="image" content={profileImage}/>

      <meta property="og:site_name" content="Sibin Xavier" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:image" content={profileImage}/>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={`${siteUrl}${path}`} />
      <meta
        name="twitter:image"
        content={profileImage}
      />
    </Helmet>
  </div>;

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  tags: PropTypes.string,
  noIndex: PropTypes.bool,
  siteUrl: PropTypes.string
};

export default MetaTags;
