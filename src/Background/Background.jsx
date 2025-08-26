import DotGrid from "./DotGrid";

export default function Background() {
  return (
    <div
      style={{
        position: "fixed",   // stays in place even when scrolling
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,          // behind all other content
      }}
    >
      <DotGrid
        dotSize={1}
        gap={15}
        baseColor="gray"
        activeColor="orange"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
