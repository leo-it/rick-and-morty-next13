import ContentLoader from "react-content-loader";
import React from "react";

const GridSkeleton = (props: any) => (
  <ContentLoader
    style={{ width: "100%" }}
    speed={2}
    height={444}
    viewBox="0 0 1100 444"
    {...props}
  >
    <rect x="50" y="23" rx="2" ry="2" style={{ width: "45%", height: "70%" }} />
    <rect
      x="564"
      y="23"
      rx="0"
      ry="0"
      style={{ width: "45%", height: "70%" }}
    />
    <rect x="487" y="350" rx="27" ry="27" width="38" height="30" />
    <rect x="582" y="350" rx="27" ry="27" width="38" height="30" />
    <rect x="537" y="350" rx="0" ry="0" width="38" height="30" />
  </ContentLoader>
);

export default GridSkeleton;
