export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
  const url = searchParams?.url;

  if (!url) {
    return <div>Please provide ?url=https://www.tahaairwaves.com</div>;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/clone?url=${encodeURIComponent(url)}`,
    { cache: "no-store" }
  );

  const html = await res.text();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ width: "100%", minHeight: "100vh" }}
    />
  );
}