import React from "react";

export default function MovieListWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-3 gap-48 sm:gap-3 lg:flex lg:flex-row lg:overflow-scroll">
      {children}
    </main>
  );
}
