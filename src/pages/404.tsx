import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-4">
        Page not found
      </h1>
      <Link to="/" className="btn px-8 text-xl py-2">
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
