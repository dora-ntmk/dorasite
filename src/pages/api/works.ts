import type { APIRoute } from 'astro';
import { createClient } from 'microcms-js-sdk';

export const GET: APIRoute = async () => {
  const client = createClient({
    serviceDomain: 'dorashark',
    apiKey: import.meta.env.SECRET_SHARK_API_KEY ?? "",
  });

  const items = await client.getAllContents({ endpoint: 'works' }).catch(() => []);
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
};
