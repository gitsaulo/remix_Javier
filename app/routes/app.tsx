import { PageLayout } from "~/components/layout";

export default function App() {
  const links = [
    { to: "recipes", label: "Recipes" },
    { to: "pantry", label: "Pantry" },
    { to: "grocery-list", label: "Grocery List" },
    { to: "admin/categories", label: "Categories" },
  ];

  return <PageLayout title="App" links={[...links]} />;
}
