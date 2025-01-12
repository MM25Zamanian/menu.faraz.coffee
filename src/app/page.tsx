import { projectConfig } from "#/next.config";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero my-auto">
      <div className="hero-content flex-col text-center">
        <h1 className="text-5xl font-bold">{projectConfig.name}</h1>
        <p className="py-3 text-balance text-center">
          {projectConfig.description}
        </p>
        <div className="flex w-full gap-2">
          <Link href="/coffee-based-hot/" className="btn btn-primary flex-1">
            مشاهده منوی ما
            <Icon icon="solar:documents-bold-duotone" className="size-6" />
          </Link>
          <Link href="/" className="btn btn-secondary btn-disabled">
            ما کجاییم؟
            <Icon icon="solar:point-on-map-bold-duotone" className="size-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
