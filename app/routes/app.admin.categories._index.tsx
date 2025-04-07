import { useLoaderData } from "@remix-run/react";
import { DiscoverGrid, DiscoverListItem } from "~/components/discover";
import db from "~/db.server";

export async function loader() {
  const categories = await db.category.findMany({
    take: 25,
    orderBy: {
      updatedAt: "desc",
    }
  });
  return { categories };
}

type DiscoverRecipeHeaderProps = {
  category: {
    name: string;
    thumb: string;
    description: string;
  }
};

export default function AdminCategories() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="h-[calc(100vh-1rem)] p-4 m-[-1rem] overflow-auto">
      <h1 className="text-2xl font-bold mb-4">CATEGORIES</h1>
      <DiscoverGrid>
        {data.categories.map((category) => (
          <div>
          <a href={"/app/admin/categories/"+category.name}>
            <div>
              <img alt="Beef" src={`/images/categories/${category.thumb}`} />
              <div>
                <h2>{category.name}</h2>
              </div>
            </div>
          </a>
        </div>
        ))}
      </DiscoverGrid>
    </div>
  );  
}