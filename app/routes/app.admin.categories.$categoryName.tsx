import { HeadersArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/db.server";
/*
model Category {
  id String @id @default(cuid())
  name String
  thumb String 
  description String
  recipes Recipe[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
*/


export async function loader({ params }:LoaderFunctionArgs) { //se que la solucion es cambiar type de string a uno que sea de tipo category
  const category = await db.category.findFirst({
    where: { name: params.categoryName }    
  });
  return json(
    { category }
  );
}


export default function AdminCategory() {
  const data = useLoaderData<typeof loader>();
  return (
    <form>
      <h2>{data.category?.name}</h2>
      <div>
      <img src={data.category?.thumb} alt={data.category?.name} />
      </div>
      <div>
        <h3>Description:</h3>
        <p>
          {data.category?.description}
        </p>
      </div>
      <div>
        <h2>Recipes:</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h2>Other Recipes:</h2>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>Apam balik</span>
            </label>
          </li>
        </ul>
      </div>
    </form>
  );
}
