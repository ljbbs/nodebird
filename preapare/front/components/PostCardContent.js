import React from 'react';
import PropTypes from "prop-types";
import Link from "next/link";

const PostCardContent = ({postData}) => {
    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((v, index) => {
                if(v.match(/(#[^\s#]+)/g)) {
                    return <Link key={index} href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
                }

                return v;
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
}

export default PostCardContent;