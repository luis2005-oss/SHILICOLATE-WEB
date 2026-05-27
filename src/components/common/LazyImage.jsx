function LazyImage({
  src,
  alt,
  className = "",
  width,
  height,
  fetchPriority = "auto",
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={fetchPriority === "high" ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={fetchPriority}
      width={width}
      height={height}
      className={className}
    />
  );
}

export { LazyImage };