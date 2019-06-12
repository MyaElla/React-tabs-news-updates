import React from "react";

const Article = ({articleData}) => {

return (
    <li><a href={articleData.webUrl}>{articleData.webTitle} </a></li>
)
}

export default Article