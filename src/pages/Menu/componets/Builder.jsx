import { useState, useEffect, useRef } from "react";
import Visualizer from "./Visualizer";


import CONFIG from "./Config.json";

const defaultOrder = (preset) => ({
  preset, size: "grande",
  milk: CONFIG.presets[preset].defaultMilk,
  temp: CONFIG.presets[preset].defaultTemp,
  shots: CONFIG.presets[preset].baseShots,
  syrups: {}, extras: [], name: "",
});



export default function Builder() {
  const [selected, setSelected] = useState(null);
  const [order, setOrder] = useState(null);
  const [showJSON, setShowJSON] = useState(false);
  const [editingJSON, setEditingJSON] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [jsonError, setJsonError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const acc = selected ? CONFIG.presets[selected].accent : "#C97B4B";

  const selectPreset = (id) => {
    setSelected(id);
    setOrder(defaultOrder(id));
    setShowJSON(false); setEditingJSON(false); setSubmitted(false);
  };

  const upd = (field, value) => setOrder(prev => ({ ...prev, [field]: value }));

  const toggleSyrup = (id) => setOrder(prev => {
    const s = { ...prev.syrups };
    if (s[id]) delete s[id]; else s[id] = 1;
    return { ...prev, syrups: s };
  });
  const setSyrupPumps = (id, val) => setOrder(prev => ({
    ...prev, syrups: { ...prev.syrups, [id]: Math.max(1, Math.min(6, val)) }
  }));
  const toggleExtra = (id) => setOrder(prev => ({
    ...prev, extras: prev.extras.includes(id) ? prev.extras.filter(e=>e!==id) : [...prev.extras, id]
  }));

  const openJSON = () => { setJsonText(JSON.stringify(order, null, 2)); setShowJSON(true); setEditingJSON(false); setJsonError(""); };
  const applyJSON = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed.preset || !CONFIG.presets[parsed.preset]) { setJsonError("Invalid preset."); return; }
      setOrder(parsed); setSelected(parsed.preset); setEditingJSON(false); setJsonError("");
    } catch { setJsonError("Invalid JSON — check syntax."); }
  };

  const preset = selected ? CONFIG.presets[selected] : null;

  const summary = () => {
    if (!order) return "";
    const p = CONFIG.presets[order.preset];
    const sz = CONFIG.sizes.find(s=>s.id===order.size);
    const ml = CONFIG.milks.find(m=>m.id===order.milk);
    const tp = CONFIG.temps.find(t=>t.id===order.temp);
    const syrupStr = Object.entries(order.syrups).map(([id,n])=>`${n}× ${CONFIG.syrups.find(s=>s.id===id)?.label}`).join(", ");
    const extraStr = order.extras.map(id=>CONFIG.extras.find(e=>e.id===id)?.label).filter(Boolean).join(", ");
    return [
      `${sz?.label} ${tp?.label} ${p.name}`,
      `${order.shots} shot${order.shots!==1?"s":""}`,
      ml?.id!=="none" && `${ml?.label} milk`,
      syrupStr && `${syrupStr} syrup`,
      extraStr, order.name && `for ${order.name}`,
    ].filter(Boolean).join(" · ");
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", background: "#140c05", color: "#f5e6d3" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#140c05;}
        :root{--acc:${acc};}

        .pf{font-family:'Playfair Display',serif;}
        .lb{font-family:'Libre Baskerville',serif;}

        .layout{display:flex;min-height:100vh;}

        .left-panel{
          width:270px;min-width:240px;flex-shrink:0;
          background:#170e06;border-right:1px solid #2a1810;
          display:flex;flex-direction:column;align-items:center;
          padding:28px 16px 20px;
          position:sticky;top:0;height:100vh;overflow:hidden;
        }
        .right-panel{flex:1;padding:28px 26px 80px;min-width:0;overflow-y:auto;}

        @media(max-width:680px){
          .layout{flex-direction:column;}
          .left-panel{width:100%;height:auto;position:static;border-right:none;border-bottom:1px solid #2a1810;padding:20px 16px 14px;}
        }

        .preset-grid{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:26px;}
        .preset-card{
          background:#1e1008;border:1.5px solid #2a1810;border-radius:10px;
          padding:9px 6px 8px;text-align:center;cursor:pointer;
          transition:all 0.18s;user-select:none;flex:1;min-width:64px;
        }
        .preset-card:hover{border-color:#6a4a2a;background:#241208;transform:translateY(-1px);}
        .preset-card.on{border-color:var(--acc);background:#2a1a0a;box-shadow:0 0 0 1px var(--acc),0 4px 14px rgba(0,0,0,.4);}

        .sec-label{
          font-family:'Libre Baskerville',serif;font-size:0.62rem;
          text-transform:uppercase;letter-spacing:3px;color:#604530;margin-bottom:9px;
        }

        .pill{
          font-family:'Libre Baskerville',serif;font-size:0.72rem;
          padding:5px 11px;border-radius:99px;border:1.5px solid #3a2518;
          background:transparent;color:#c4a07a;cursor:pointer;
          transition:all 0.14s;white-space:nowrap;line-height:1;
        }
        .pill:hover{border-color:var(--acc);color:#f0d9b8;}
        .pill.on{background:var(--acc);border-color:var(--acc);color:#140c05;font-weight:700;}

        .shots-btn{
          width:27px;height:27px;border-radius:50%;border:1.5px solid #3a2518;
          background:transparent;color:#c4a07a;font-size:1rem;cursor:pointer;
          display:flex;align-items:center;justify-content:center;
          transition:all 0.14s;line-height:1;flex-shrink:0;
        }
        .shots-btn:hover{border-color:var(--acc);color:var(--acc);}

        .name-inp{
          background:#1a0e06;border:1.5px solid #3a2518;border-radius:8px;
          padding:7px 12px;color:#f0d9b8;font-family:'Libre Baskerville',serif;
          font-size:0.83rem;width:100%;max-width:210px;outline:none;
          transition:border-color 0.14s;
        }
        .name-inp:focus{border-color:var(--acc);}
        .name-inp::placeholder{color:#4a3020;}

        .btn-pri{
          font-family:'Playfair Display',serif;font-size:0.88rem;font-weight:600;
          padding:9px 22px;border-radius:99px;border:none;
          background:var(--acc);color:#140c05;cursor:pointer;transition:all 0.2s;
        }
        .btn-pri:hover{filter:brightness(1.1);transform:translateY(-1px);}

        .btn-sec{
          font-family:'Libre Baskerville',serif;font-size:0.74rem;
          padding:7px 16px;border-radius:99px;border:1.5px solid #3a2518;
          background:transparent;color:#9e7a55;cursor:pointer;transition:all 0.14s;
        }
        .btn-sec:hover{border-color:#7a5c3a;color:#c4a07a;}

        .cfg-sec{margin-bottom:18px;}
        .divider{border:none;border-top:1px solid #261610;margin:16px 0;}

        .json-area{
          width:100%;background:transparent;border:none;
          color:#7acc7a;font-family:'Courier New',monospace;font-size:0.73rem;
          padding:14px;resize:vertical;outline:none;min-height:190px;line-height:1.6;
        }

        @keyframes fadeUp{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        .fu{animation:fadeUp 0.28s ease;}
      `}</style>

      <div className="layout" style={{"--acc": acc}}>

        {/* ── Left: Cup Visualizer ── */}
        <div className="left-panel">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h1 className="pf" style={{ fontSize: "1.45rem", color: "#f0d9b8", letterSpacing: "-0.3px", marginBottom: 3 }}>
              The Coffee Bar
            </h1>
            <p className="lb" style={{ fontSize: "0.72rem", color: "#704a28", fontStyle: "italic" }}>
              craft your perfect cup
            </p>
          </div>

          <div style={{ flex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Visualizer order={order} />
          </div>

          {order && (
            <div className="lb fu" style={{
              fontSize: "0.68rem", color: "#6a4a28", fontStyle: "italic",
              textAlign: "center", lineHeight: 1.7, marginTop: 10,
              padding: "9px 12px", background: "#1c1008",
              borderRadius: 8, border: "1px solid #2a1810", width: "100%"
            }}>
              {summary()}
            </div>
          )}
        </div>

        {/* ── Right: Options ── */}
        <div className="right-panel">

          {/* Presets */}
          <p className="sec-label">Choose your drink</p>
          <div className="preset-grid">
            {Object.entries(CONFIG.presets).map(([id, p]) => (
              <div key={id} className={`preset-card${selected===id?" on":""}`}
                style={{"--acc": p.accent}} onClick={() => selectPreset(id)}>
                <div style={{ fontSize: "1.25rem", marginBottom: 4 }}>{p.emoji}</div>
                <div className="pf" style={{ fontSize: "0.76rem", color: "#d4b896" }}>{p.name}</div>
              </div>
            ))}
          </div>

          {order && preset ? (
            <div className="fu">
              <p className="lb" style={{ fontStyle: "italic", fontSize: "0.78rem", color: "#604530", marginBottom: 20 }}>
                {preset.description}
              </p>

              {/* Temperature */}
              <div className="cfg-sec">
                <p className="sec-label">Temperature</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {CONFIG.temps.map(t => (
                    <button key={t.id} className={`pill${order.temp===t.id?" on":""}`} onClick={() => upd("temp", t.id)}>
                      {t.icon} {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="cfg-sec">
                <p className="sec-label">Size</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {CONFIG.sizes.map(s => (
                    <button key={s.id} className={`pill${order.size===s.id?" on":""}`} onClick={() => upd("size", s.id)}>
                      {s.label} <span style={{ opacity: 0.5, fontSize: "0.66rem" }}>{s.oz}oz</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Shots */}
              <div className="cfg-sec">
                <p className="sec-label">Espresso Shots</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button className="shots-btn" onClick={() => upd("shots", Math.max(1, order.shots-1))}>−</button>
                  <span className="pf" style={{ fontSize: "1.3rem", color: "#f0d9b8", minWidth: 22, textAlign: "center" }}>{order.shots}</span>
                  <button className="shots-btn" onClick={() => upd("shots", Math.min(8, order.shots+1))}>+</button>
                  <span className="lb" style={{ fontSize: "0.72rem", color: "#604530", fontStyle: "italic" }}>
                    {order.shots === preset.baseShots ? "standard" : order.shots < preset.baseShots ? "half-caff" : "extra kick"}
                  </span>
                </div>
              </div>

              {/* Milk */}
              {order.preset !== "americano" && (
                <div className="cfg-sec">
                  <p className="sec-label">Milk</p>
                  <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                    {CONFIG.milks.map(m => (
                      <button key={m.id} className={`pill${order.milk===m.id?" on":""}`} onClick={() => upd("milk", m.id)}>
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Syrups */}
              <div className="cfg-sec">
                <p className="sec-label">Syrups & Flavours</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap", alignItems: "center" }}>
                  {CONFIG.syrups.map(s => (
                    <div key={s.id} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <button className={`pill${order.syrups[s.id]?" on":""}`} onClick={() => toggleSyrup(s.id)}>
                        {s.label}
                      </button>
                      {order.syrups[s.id] && (
                        <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#1a0e06", border: "1px solid #3a2518", borderRadius: 8, padding: "2px 7px" }}>
                          <button onClick={() => setSyrupPumps(s.id, order.syrups[s.id]-1)}
                            style={{ background: "none", border: "none", color: "#9e7a55", fontSize: "0.9rem", cursor: "pointer", padding: "0 1px", lineHeight: 1 }}>−</button>
                          <span className="pf" style={{ fontSize: "0.8rem", color: "#f0d9b8", minWidth: 10, textAlign: "center" }}>{order.syrups[s.id]}</span>
                          <button onClick={() => setSyrupPumps(s.id, order.syrups[s.id]+1)}
                            style={{ background: "none", border: "none", color: "#9e7a55", fontSize: "0.9rem", cursor: "pointer", padding: "0 1px", lineHeight: 1 }}>+</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="cfg-sec">
                <p className="sec-label">Special Instructions</p>
                <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                  {CONFIG.extras.map(e => (
                    <button key={e.id} className={`pill${order.extras.includes(e.id)?" on":""}`} onClick={() => toggleExtra(e.id)}>
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div className="cfg-sec">
                <p className="sec-label">Name on Order</p>
                <input className="name-inp" type="text" placeholder="Your name..."
                  value={order.name} onChange={e => upd("name", e.target.value)} />
              </div>

              <hr className="divider" />

              <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
                <button className="btn-pri" onClick={() => { setSubmitted(true); setShowJSON(false); setEditingJSON(false); }}>
                  Place Order
                </button>
                <button className="btn-sec" onClick={showJSON ? () => setShowJSON(false) : openJSON}>
                  {showJSON ? "Hide JSON" : "View / Edit JSON"}
                </button>
                <button className="btn-sec" onClick={() => { setOrder(defaultOrder(selected)); setSubmitted(false); setShowJSON(false); }}>
                  Reset
                </button>
              </div>

              {submitted && (
                <div className="lb fu" style={{
                  marginTop: 14, padding: "13px 16px",
                  background: "#0c1a0c", border: "1px solid #285228",
                  borderRadius: 10, fontSize: "0.83rem", color: "#78c478", textAlign: "center"
                }}>
                  ☕ Order placed!{order.name ? ` See you soon, ${order.name}.` : " Your coffee is on its way."}
                </div>
              )}

              {showJSON && (
                <div className="fu" style={{ marginTop: 14, background: "#0c0804", border: "1px solid #2a1810", borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", borderBottom: "1px solid #1c1008", background: "#120a04" }}>
                    <span className="lb" style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "2.5px", color: "#604530" }}>Order JSON</span>
                    <div style={{ display: "flex", gap: 7 }}>
                      {!editingJSON
                        ? <button className="btn-sec" style={{ fontSize: "0.68rem", padding: "4px 11px" }} onClick={() => setEditingJSON(true)}>Edit</button>
                        : <>
                            <button className="btn-pri" style={{ fontSize: "0.72rem", padding: "5px 13px" }} onClick={applyJSON}>Apply</button>
                            <button className="btn-sec" style={{ fontSize: "0.68rem", padding: "4px 11px" }} onClick={() => { setEditingJSON(false); setJsonError(""); }}>Cancel</button>
                          </>
                      }
                    </div>
                  </div>
                  <textarea className="json-area"
                    value={editingJSON ? jsonText : JSON.stringify(order, null, 2)}
                    readOnly={!editingJSON}
                    onChange={e => setJsonText(e.target.value)}
                    spellCheck={false}
                  />
                  {jsonError && <div className="lb" style={{ fontSize: "0.74rem", color: "#e07070", padding: "5px 14px", fontStyle: "italic" }}>{jsonError}</div>}
                </div>
              )}
            </div>
          ) : (
            <div className="lb" style={{ paddingTop: 50, textAlign: "center", color: "#3a2518", fontStyle: "italic", fontSize: "0.88rem" }}>
              Select a drink above to start crafting your order.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

