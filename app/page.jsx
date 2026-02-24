export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch("https://www.tahaairwaves.com", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    cache: "no-store",
  });

  const html = await res.text();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ width: "100%", minHeight: "100vh" }}
    />
  );
}