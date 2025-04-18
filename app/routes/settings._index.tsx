// redirect to app/pantry

import { redirect } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return redirect("/settings/app", 302);
};
