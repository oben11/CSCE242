import "../css/ColorDot.css";


const COLOR_MAP = {
  white: "#f5f5f5",
  black: "#1a1a1a",
  brown: "#7c5c3e",
  silver: "#c0c0c0",
  "rose-gold": "#b76e79",
  natural: "#d4b896",
  navy: "#1b2a4a",
  cream: "#fffdd0",
};

/**
 * Style selection for product
 * @param color: Color of dot
 */

export default function ColorDot({ color }) {
  const bg = COLOR_MAP[color] ?? color;
  return (
    <div
      className="color-dot"
      title={color}
      style={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: bg,
        border: "1.5px solid rgba(0,0,0,0.15)",
        display: "inline-block",
      }}
    />
  );
}