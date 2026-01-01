export async function GET() {
    const robotstxt = `
User-agent: *
Disallow:
Sitemap: https://srkfinserv.com/sitemap.xml
`.trim();

    return new Response(robotstxt, {
        status: 200,
        headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "s-maxage=31556952, stale-while-revalidate",
        },
    });
}
