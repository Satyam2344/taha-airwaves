export default async function Page({ searchParams }) {
  // ✅ unwrap searchParams (important)
  const params = await searchParams;
  const url = params?.url;

  if (!url) {
    return <div>Please provide ?url=https://example.com</div>;
  }

  const res = await fetch(url, {
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