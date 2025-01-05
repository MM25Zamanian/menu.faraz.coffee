import React from "react";
import Image from "next/image";
import DefaultImage from "~/IconKitchen-Output (2)/play-store/play_store_feature_graphic.png";
import IItem from "@/types/item";

function ItemCard({ item }: { item: IItem }) {
  return (
    <div className="p-4 rounded-box bg-secondary text-secondary-content overflow-clip">
      <div className="flex gap-4">
        <div className="relative rounded-box size-16 overflow-clip *:object-cover">
          <Image
            src={item.image || DefaultImage}
            alt="alt"
            fill
          />
        </div>
        <h3>{item.name}</h3>
      </div>

      <div className="card-body">
        <div className="carousel carousel-center p-4">
          {Object.keys(item.variants).map((variantKey) => (
            <div
              className="carousel-item flex flex-col shrink-0 me-4"
              key={variantKey}
            >
              <span className="text-sm font-light">
                {item.variants[variantKey].name}
              </span>
              <span className="text-xs font-bold">
                {item.variants[variantKey].price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
