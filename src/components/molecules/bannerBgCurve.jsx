function BannerBgCurve({
  design = 1,
  color = "#ffffff",
  height = "h-24",
  position = "bottom", //  ⬅ nueva variante: top | bottom
  className = ""
}) {

  const paths = {
    1: "M0,180L75,196C190,210,200,300,100,200.3C640,331,800,117,960,60.8C1100,0,1200,0,1320,80L1440,165V320H0Z",
    2: "M0,100C390,0 500,80 750,150C1000,220 1250,260 1440,100V600H0Z",
    3: "M0,200L100,180C200,160,400,140,600,180C800,220,1000,280,1200,240C1400,200,1440,220,1440,220V0H0Z",
    4: "M0,220C300,140 600,60 900,140C1200,220 1350,260 1440,250V600H0Z"
  };

  return (
    <div
      className={`
        absolute w-full left-0 overflow-hidden leading-none
        ${position === "top" ? "top-0" : "bottom-0"}
        ${className}
      `}
    >
      <svg
        className={`block w-full ${height} sm:h-28 md:h-32 lg:h-40 xl:h-48`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill={color}
      >
        <path d={paths[design] || paths[1]} />
      </svg>
    </div>
  );
}

export { BannerBgCurve };
