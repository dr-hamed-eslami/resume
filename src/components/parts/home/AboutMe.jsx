import React from "react";

export default function AboutMe({ aboutme }) {
  return (
    <div>
      <p>{aboutme?.description}</p>
    </div>
  );
}
