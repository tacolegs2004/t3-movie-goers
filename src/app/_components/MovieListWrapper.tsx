import React from "react";

const MovieListWrapper = (props: { children: React.ReactNode }) => {
  return (
    <main className="lg:scrollbar-hide grid grid-cols-3 gap-64 sm:gap-3 lg:mx-auto lg:my-4 lg:flex lg:flex-row lg:overflow-scroll">
      {props.children}
    </main>
  );
};

export default MovieListWrapper;
