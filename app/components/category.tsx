import { Link } from "@remix-run/react";
import classNames from "classnames";

export function CategoryGrid({ children }: { children: React.ReactNode }) {
    return (
      <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </ul>
    );
}