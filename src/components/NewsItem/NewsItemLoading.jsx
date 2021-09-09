import React from "react";
import ContentLoader from "react-content-loader";

const NewsItemLoading = (props) => (
  <div className="content__item">
    <ContentLoader
      speed={2}
      width={1140}
      height={26}
      viewBox="0 0 1140 26"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="42" y="0" rx="3" ry="3" width="500" height="24" />
      <circle cx="12" cy="13" r="12" />
      <rect x="900" y="0" rx="3" ry="3" width="100" height="24" />
      <rect x="1040" y="0" rx="3" ry="3" width="100" height="24" />
    </ContentLoader>
  </div>
)

export default NewsItemLoading;
