import test, { expect } from "@playwright/test";

test("User without root role can't access to categories route", async ({
  page,
}) => {
  await page.goto(
    "/__tests/login?email=me@test.com&firstName=Test&lastName=Remix"
  );

  //TODO
});

test("User with root role can access to categories route", async ({ page }) => {
  await page.goto(
    "/__tests/login?email=root@test.com&firstName=Test&lastName=Remix"
  );

  //TODO
});
