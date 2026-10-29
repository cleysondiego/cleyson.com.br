import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description?: string;
  image?: string | null;
}

const DEFAULT_DESCRIPTION =
  'Site pessoal do Cleyson Diego, Senior Android Developer. Posts sobre Android, Kotlin e carreira.';

export function Head({ title, description = DEFAULT_DESCRIPTION, image }: HeadProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={`https://cleyson.com.br${image}`} />}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </NextHead>
  );
}
