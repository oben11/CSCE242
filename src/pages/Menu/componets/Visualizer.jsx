import { useState, useEffect, useRef } from "react";
import CONFIG from "./Config.json";

function Visualizer({ order }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let id, t = 0;
    const loop = () => { t += 0.02; setTick(t); id = requestAnimationFrame(loop); };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, []);

  if (!order) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 260, color: "#3a2518", fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "0.88rem", textAlign: "center", padding: "0 20px" }}>
      Select a drink to see your cup
    </div>
  );

  const p = CONFIG.presets[order.preset];
  const scaleMap = { short: 0.72, tall: 0.82, grande: 0.93, venti: 1.0 };
  const sc = scaleMap[order.size] || 1;
  const isIced = order.temp === "iced";
  const isBlended = order.temp === "blended";
  const hasWhip = order.extras.includes("whip");
  const noFoam = order.extras.includes("no_foam") || order.extras.includes("dry");
  const extraFoam = order.extras.includes("extra_foam") || order.extras.includes("wet");
  const hasCaramel = order.syrups["caramel"];
  const hasRaspberry = order.syrups["raspberry"];
  const hasLavender = order.syrups["lavender"];

  let liqColor = p.liquidBase;
  if (hasRaspberry) liqColor = "#5C1A1A";
  else if (hasLavender) liqColor = "#4A3060";
  else if (hasCaramel) liqColor = "#7A3A0A";

  const foamH = noFoam ? 0 : extraFoam ? 30 : 20;
  const fillRatio = isIced ? 0.70 : isBlended ? 0.84 : 0.78;

  const cx = 100, VH = 300;
  const cupH = 170 * sc;
  const cupTopW = 82 * sc;
  const cupBotW = 56 * sc;
  const cupY = VH - cupH - 32;
  const tl = cx - cupTopW / 2, tr = cx + cupTopW / 2;
  const bl = cx - cupBotW / 2, br = cx + cupBotW / 2;
  const liqTopW = cupBotW + (cupTopW - cupBotW) * fillRatio;
  const liqY = cupY + cupH * (1 - fillRatio);
  const ll = cx - liqTopW / 2, lr = cx + liqTopW / 2;

  const s = (n, a = 6) => cx + (n === 1 ? -16 : n === 2 ? 0 : 16) + Math.sin(tick + n * 1.5) * a;
  const sy = (n) => cupY - 4 - Math.abs(Math.sin(tick * 0.8 + n)) * 3;

  const iceCubes = isIced ? [
    { x: cx - 26, y: liqY + 18 }, { x: cx + 4, y: liqY + 14 }, { x: cx - 10, y: liqY + 34 }
  ] : [];

  const shotCount = Math.min(order.shots, 6);

  return (
    <svg viewBox="0 0 200 300" width="100%" style={{ maxWidth: 220, margin: "0 auto", display: "block" }}>
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={p.cupColor} />
          <stop offset="55%" stopColor={p.cupColor} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0e0600" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={liqColor} />
          <stop offset="100%" stopColor="#080300" />
        </linearGradient>
        <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.foamColor} />
          <stop offset="100%" stopColor={p.milkColor} />
        </linearGradient>
        <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFAF4" />
          <stop offset="100%" stopColor="#EAD9C0" />
        </linearGradient>
        <clipPath id="cc">
          <polygon points={`${tl},${cupY} ${tr},${cupY} ${br},${cupY+cupH} ${bl},${cupY+cupH}`} />
        </clipPath>
      </defs>


      {/* Cup body */}
      <polygon points={`${tl},${cupY} ${tr},${cupY} ${br},${cupY+cupH} ${bl},${cupY+cupH}`} fill="url(#cg)" />

      {/* Inner liquid (clipped) */}
      <g clipPath="url(#cc)">
        <polygon points={`${ll},${liqY} ${lr},${liqY} ${br},${cupY+cupH} ${bl},${cupY+cupH}`} fill="url(#lg)" />

        {/* Caramel drizzle */}
        {hasCaramel && (
          <path d={`M${cx-20},${liqY+14} Q${cx},${liqY+6} ${cx+20},${liqY+14}`}
            fill="none" stroke="#C06010" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        )}

        {/* Ice cubes */}
        {iceCubes.map((ic, i) => (
          <g key={i}>
            <rect x={ic.x} y={ic.y} width={19} height={15} rx={3} fill="#C8EEF8" opacity="0.5" />
            <rect x={ic.x+1} y={ic.y+1} width={17} height={4} rx={2} fill="#EAF8FF" opacity="0.4" />
          </g>
        ))}

        {/* Blended bubbles */}
        {isBlended && Array.from({length:14},(_,i)=>({
          x: tl+9+(i%7)*((cupTopW-16)/6), y: cupY+10+Math.floor(i/7)*13, r: 4+(i%3)
        })).map((b,i)=>(
          <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={p.milkColor} opacity="0.4" />
        ))}
      </g>

      {/* Foam */}
      {!isIced && !isBlended && foamH > 0 && (
        <g>
          <polygon
            points={`${tl},${cupY} ${tr},${cupY} ${tr},${cupY+foamH} ${tl},${cupY+foamH}`}
            fill="url(#fg)"
          />
          {/* Latte art */}
          {order.milk !== "none" && order.preset !== "americano" && (
            <>
              <ellipse cx={cx} cy={cupY+foamH*0.42} rx={cupTopW*0.26} ry={foamH*0.24}
                fill="none" stroke={p.milkColor} strokeWidth="1.5" opacity="0.55" />
              <ellipse cx={cx} cy={cupY+foamH*0.42} rx={cupTopW*0.12} ry={foamH*0.1}
                fill={p.milkColor} opacity="0.4" />
            </>
          )}
          {/* Shot intensity dots */}
          {Array.from({length:shotCount}).map((_,i)=>(
            <circle key={i}
              cx={tl+8+i*((cupTopW-14)/Math.max(shotCount-1,1))}
              cy={cupY+foamH+7}
              r={2.5} fill={p.liquidBase} opacity="0.5"
            />
          ))}
        </g>
      )}

      {/* Whip cream */}
      {hasWhip && !isIced && (
        <>
          {[-12, 0, 12].map((ox, i) => (
            <ellipse key={i} cx={cx+ox} cy={cupY - 12 - Math.abs(ox)*0.4}
              rx={14} ry={8} fill="url(#wg)" opacity="0.93" />
          ))}
          <ellipse cx={cx} cy={cupY-28} rx={10} ry={7} fill="url(#wg)" opacity="0.9" />
          {hasCaramel && (
            <path d={`M${cx-10},${cupY-26} Q${cx+4},${cupY-20} ${cx+10},${cupY-28}`}
              fill="none" stroke="#C06010" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          )}
        </>
      )}

      {/* Cup rim */}
      <line x1={tl} y1={cupY} x2={tr} y2={cupY} stroke="#f0d9b8" strokeWidth="1.5" opacity="0.22" />
      <line x1={tl} y1={cupY+1.5} x2={tr} y2={cupY+1.5} stroke="#f0d9b8" strokeWidth="0.8" opacity="0.1" />


      {/* Steam wisps */}
      {order.temp === "hot" && [1,2,3].map(n => {
        const sx = s(n, 5);
        const baseY = cupY - (hasWhip ? 44 : 5);
        return (
          <path key={n}
            d={`M${sx},${baseY} Q${sx+6},${baseY-14} ${sx},${baseY-26} Q${sx-6},${baseY-38} ${sx},${baseY-50}`}
            fill="none" stroke="#f0d9b8" strokeWidth="1.8" strokeLinecap="round"
            opacity={0.28 - (n-1)*0.06}
          />
        );
      })}


      {/* Labels */}
      <text x={cx} y={286} textAnchor="middle"
        style={{ fontFamily: "Georgia, serif", fontSize: "9.5px", fill: "#7a5c3a", fontStyle: "italic" }}>
        {CONFIG.sizes.find(s=>s.id===order.size)?.label} · {CONFIG.sizes.find(s=>s.id===order.size)?.oz}oz
      </text>
      <text x={cx} y={15} textAnchor="middle"
        style={{ fontFamily: "Georgia, serif", fontSize: "12.5px", fill: "#f0d9b8", fontWeight: "bold" }}>
        {p.name}
      </text>
    </svg>
  );
}
export default Visualizer;