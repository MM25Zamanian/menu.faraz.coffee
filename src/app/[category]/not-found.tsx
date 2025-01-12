import Link from "next/link";

export default function Page() {
  return (
    <div className="hero my-auto">
      <div className="hero-content flex-col text-center">
        <h1 className="text-5xl font-bold">۴۰۴</h1>
        <p className="py-3">دسته بندی مورد نظر شما یافت نشد</p>
        <Link href="/" className="btn btn-primary">
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
