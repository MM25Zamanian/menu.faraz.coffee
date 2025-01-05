"use client";

import db from "~/db/index.json";

import { useEffect, useState } from "react";
import IItem from "@/types/item";
import ItemCard from "@/components/item-card";

export async function getItems(category: string) {
  if (category in db.data) return db.data[category as keyof typeof db.data];

  return null;
}

export default function Menu() {
  const [category, setCategory] =
    useState<keyof typeof db.data>("coffee-based-hot");
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => setItems(db.data[category].items), [category]);

  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      <div
        role="tablist"
        className="flex tabs tabs-boxed rounded-t-none z-10 inset-x-0 top-16 p-2 bg-base-300 overflow-x-auto *:shrink-0"
      >
        {(Object.keys(db.data) as Array<keyof typeof db.data>).map(
          (__category) => (
            <button
              key={__category}
              role="tab"
              className={`tab transition-colors duration-300${
                category === __category ? " tab-active" : ""
              }`}
              onClick={() => setCategory(__category)}
            >
              {db.data[__category].name}
            </button>
          )
        )}
      </div>

      {items.map((item, index) => (
        <ItemCard item={item} key={index} />
      ))}
    </div>
  );
}
