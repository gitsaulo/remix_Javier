import { createCookieSessionStorage } from "@remix-run/node";
import { sessionCookie } from "./cookies";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: sessionCookie,
  });
