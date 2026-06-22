import { withBase } from "../lib/paths";

type Props = {
  /** Base path without extension, e.g. "/art/01-village". webp + jpg expected. */
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/** <picture> with webp + jpg fallback. Paths are base-aware. */
export default function Art({ src, alt, className, loading = "lazy" }: Props) {
  return (
    <picture>
      <source srcSet={withBase(`${src}.webp`)} type="image/webp" />
      <img
        src={withBase(`${src}.jpg`)}
        alt={alt}
        loading={loading}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
