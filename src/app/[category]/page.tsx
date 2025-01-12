import ItemCard from "@/components/item-card";
import IDataBase from "@/types/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import _database from "~/db/index.json";

export async function generateStaticParams() {
  return Object.keys((_database as IDataBase).data).map((category) => ({
    category,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const database = _database as IDataBase;
  const category: keyof IDataBase["data"] = (await params).category;
  const items = database.data[category]?.items;

  if (!database.data[category]) return notFound();

  return (
    <div className="flex flex-col overflow-y-auto">
      <div className="flex flex-wrap rounded-b-box z-10 inset-x-0 top-16 p-2 gap-2 bg-base-300">
        {(Object.keys(database.data) as Array<keyof IDataBase["data"]>).map(
          (__category) => (
            <Link
              key={__category}
              href={`/${__category}`}
              className="btn btn-sm flex-1 min-w-max btn-secondary data-[active='false']:btn-outline"
              data-active={category === __category}
              prefetch
              replace
            >
              {database.data[__category].name}
            </Link>
          )
        )}
      </div>

      <div className="flex flex-col gap-4 p-4">
        {items.length > 0 &&
          items.map((item, index) => (
            <ItemCard item={item} key={index + item.name} />
          ))}
      </div>
    </div>
  );
}
