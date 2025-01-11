"use client";

import { useState } from "react";
import Image from "next/image";
import DefaultImage from "~/thumbnail.png";
import IItem from "@/types/item";
import SvgToman from "~/toman.svg";
import { Icon } from "@iconify/react";

function ItemCard({ item }: { item: IItem }) {
  const defaultVariant = Object.values(item.variants).find(
    (variant) => variant.default === true
  );
  const [variant, setVariant] = useState(defaultVariant ?? null);
  const hasVariantList = Object.keys(item.variants).length > 1;

  return (
    <div
      tabIndex={0}
      className="p-4 pb-2 rounded-box relative bg-base-300 text-base-content overflow-clip group *:duration-500"
    >
      <div className="flex gap-4">
        <div className="relative rounded-box size-16 overflow-clip *:object-cover">
          {item.image.trim().length > 0 ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              loading="lazy"
              placeholder="blur"
            />
          ) : (
            <Image src={DefaultImage} alt={item.name} fill priority />
          )}
        </div>

        <div className="flex flex-col grow gap-1 justify-center items-start">
          <h3 className="text-base font-black flex flex-wrap gap-1">
            {item.name}

            {variant && (
              <span className="text-sm font-light self-end flex gap-1 items-center justify-center">
                ({variant.name})
              </span>
            )}
          </h3>
          {variant && (
            <div className="text-base font-medium flex gap-1 justify-center">
              {(variant.price * 1000).toLocaleString("fa-IR")}

              <SvgToman className="text-base my-auto" />
            </div>
          )}
        </div>

        {hasVariantList && (
          <Icon
            icon="solar:alt-arrow-down-bold"
            className="size-6 opacity-50 my-auto group-hover:opacity-100 transition-[opacity,transform] group-focus-within:rotate-180 duration-[150ms, 500ms]"
          />
        )}
      </div>

      {hasVariantList && (
        <div className="w-full flex flex-wrap mt-2 gap-2 max-h-0 overflow-y-hidden group-focus-within:max-h-36 transition-[max-height]">
          <hr className="w-full border-x-0 border-base-content opacity-60" />

          {Object.keys(item.variants).map((__key) => {
            const __variant = item.variants[__key];

            return (
              <button
                data-active={
                  variant &&
                  variant.name + variant.price ===
                    __variant.name + __variant.price
                }
                className="flex flex-1 min-w-max justify-between btn btn-sm btn-primary data-[active='false']:btn-outline"
                key={__key}
                onClick={() => setVariant(__variant)}
              >
                <span className="text-sm font-medium">{__variant.name}</span>
                <div className=" flex gap-1">
                  <span className="text-xs font-bold">
                    {__variant.price.toLocaleString("fa-IR")}
                  </span>
                  <SvgToman className="text-xs font-light my-auto" />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ItemCard;
