import { createPageRenderer } from 'vite-plugin-ssr';

export { render };

const renderPage = createPageRenderer({ isProduction: true });

async function render(url: string) {
  const pageContext = await renderPage({ urlOriginal: url });
  const { httpResponse } = pageContext;
  if (!httpResponse) {
    return null;
  }
  return httpResponse;
}
