import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function PostCardContent({ postData }) {
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, index) => {
        if (v.match(/(#[^\s#]+)/g)) {
          // eslint-disable-next-line react/no-array-index-key
          return <Link key={index} href={`/hashtag/${v.slice(1)}`}><a href="#!">{v}</a></Link>;
        }

        return v;
      })}
    </div>
  );
}

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
