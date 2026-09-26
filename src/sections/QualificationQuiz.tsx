import { useState, type FormEvent } from "react";
import { BadgeCheck, Home, PhoneCall, CheckCircle, Clock, ArrowRight, RefreshCw, ChevronRight, ArrowLeft, TrendingUp } from "lucide-react";
import { QUIZ_STEPS, QUIZ_PROGRAMS, type QuizOption } from "@/data/content";

export default function QualificationQuiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [picking, setPicking] = useState(false);
  const [done, setDone] = useState(false);
  const [lead, setLead] = useState({ name: "", phone: "", email: "", program: "" });
  const [leadSent, setLeadSent] = useState(false);

  const step = QUIZ_STEPS[stepIndex];
  const progress = done ? 100 : (stepIndex / QUIZ_STEPS.length) * 100;

  const choose = (option: QuizOption) => {
    if (picking) return;
    const next = { ...answers, [step.key]: option.value };
    setAnswers(next);
    setSelected(option.value);
    setPicking(true);
    setTimeout(() => {
      if (stepIndex === QUIZ_STEPS.length - 1) {
        setDone(true);
      } else {
        setStepIndex(stepIndex + 1);
        setSelected(null);
      }
      setPicking(false);
    }, 280);
  };

  const goBack = () => {
    if (stepIndex === 0 || picking) return;
    setStepIndex(stepIndex - 1);
    setSelected(answers[QUIZ_STEPS[stepIndex - 1].key] ?? null);
  };

  const restart = () => {
    setAnswers({});
    setStepIndex(0);
    setSelected(null);
    setPicking(false);
    setDone(false);
    setLeadSent(false);
    setLead({ name: "", phone: "", email: "", program: "" });
  };

  const program = QUIZ_PROGRAMS.find((p) => p.id === answers.terreno) ?? QUIZ_PROGRAMS[2];

  const model = answers.dormitorios === "estudio"
    ? "Modelo Estudio Premium · 45 m²"
    : answers.dormitorios === "familiar"
      ? "Modelo Familiar Clásico o Plus · 72–80 m²"
      : answers.dormitorios === "amplio"
        ? "Plan a medida · desde 80 m²"
        : "Se define en tu asesoría";

  const getLabel = (key: string) => {
    const st = QUIZ_STEPS.find((s) => s.key === key);
    return st?.options.find((o) => o.value === answers[key])?.label ?? "";
  };

  const handleLead = (e: FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
  };

  const inputStyle = {
    background: "#1e2330",
    border: "1px solid rgba(245,183,0,0.15)",
    borderRadius: "2px",
    color: "#f0ece4",
    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
  };

  return (
    <section className="py-24 overflow-hidden" style={{ background: "#0d0f14" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 items-start">

          <div className="lg:sticky lg:top-28">
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#f5b700", letterSpacing: "0.2em" }}>
              ¿CALIFICAS? DESCÚBRELO EN 1 MINUTO
            </span>
            <h2 className="mt-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#ffffff", lineHeight: 0.98 }}>
              CUÉNTANOS TU SITUACIÓN Y TE DECIMOS QUÉ PROGRAMA TE CORRESPONDE.
            </h2>
            <p className="mt-6" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem", color: "#e4eaf5" }}>
              Olvídate de las listas de documentos. Responde 5 preguntas rápidas y en segundos sabrás qué programa de construcción encaja contigo y cuál es tu siguiente paso.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              {[
                { icon: BadgeCheck, text: "Te decimos qué programa te corresponde" },
                { icon: Home, text: "Recomendamos el modelo ideal para ti" },
                { icon: PhoneCall, text: "Un asesor te contacta gratis y sin compromiso" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.12)", borderRadius: "6px" }}>
                    <b.icon size={18} style={{ color: "#f5b700" }} />
                  </div>
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", color: "#cfd3de" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10" style={{ borderRadius: "16px" }}>
            {/* Progress header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.15em", color: "#4a4a49" }}>
                  {done ? "RESULTADO LISTO" : `PASO ${stepIndex + 1} DE ${QUIZ_STEPS.length}`}
                </span>
                <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#f5b700", fontWeight: 700 }}>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full" style={{ background: "#ececec", borderRadius: "4px" }}>
                <div className="h-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, background: "#f5b700", borderRadius: "4px" }} />
              </div>
            </div>

            {done ? (
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "4px" }}>
                    <BadgeCheck size={14} /> PROPONENTE CALIFICADO
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold border" style={{ borderColor: "#e5e5e5", color: "#666", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.04em", borderRadius: "4px" }}>
                    <Clock size={13} style={{ color: "#f5b700" }} /> {program.timeline}
                  </span>
                </div>

                <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "#4a4a49", lineHeight: 1.05 }}>
                  TU PROGRAMA ES<br />
                  <span style={{ color: "#f5b700" }}>{program.name}</span>
                </h3>

                <p className="mt-1" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", fontWeight: 400, color: "#8a8f9e" }}>
                  {program.tagline}
                </p>
                <p className="mt-4 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {program.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-6">
                  {program.includes.map((c) => (
                    <div key={c} className="flex items-center gap-2.5">
                      <CheckCircle size={15} style={{ color: "#f5b700", flexShrink: 0 }} />
                      <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a4a" }}>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  <div className="p-4" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Home size={15} style={{ color: "#f5b700" }} />
                      <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", color: "#4a4a49" }}>MODELO SUGERIDO</span>
                    </div>
                    <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.88rem", color: "#4a4a4a" }}>{model}</span>
                  </div>
                  <div className="p-4" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={15} style={{ color: "#f5b700" }} />
                      <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", color: "#4a4a49" }}>TU PERFIL</span>
                    </div>
                    <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a4a" }}>
                      {getLabel("tipo")} · {getLabel("financiamiento")} · {getLabel("plazo")}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-7" style={{ borderTop: "1px dashed #e5e5e5" }}>
                  {leadSent ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-center">
                      <BadgeCheck size={44} style={{ color: "#f5b700" }} />
                      <h4 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.4rem", color: "#4a4a49" }}>¡LISTO, {lead.name.split(" ")[0] || "AMIGO"}!</h4>
                      <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", color: "#8a8f9e", maxWidth: 340 }}>
                        Un asesor se pondrá en contacto contigo en menos de 24 horas para confirmar tu calificación y agendar tu asesoría gratis.
                      </p>
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 mt-2 bg-primary text-primary-foreground px-6 py-3 font-bold transition-all hover:opacity-90"
                        style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.95rem", letterSpacing: "0.1em", borderRadius: "2px" }}
                      >
                        QUEDARME EN CONTACTO <ArrowRight size={16} />
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleLead} className="flex flex-col gap-4">
                      <h4 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.2rem", color: "#4a4a49" }}>
                        CONFIRMA TUS DATOS Y TE CONTACTAMOS
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#8a8f9e", letterSpacing: "0.1em" }}>NOMBRE *</label>
                          <input required style={inputStyle} value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Tu nombre" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#8a8f9e", letterSpacing: "0.1em" }}>TELÉFONO *</label>
                          <input required style={inputStyle} value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Tu teléfono / WhatsApp" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#8a8f9e", letterSpacing: "0.1em" }}>CORREO ELECTRÓNICO</label>
                        <input style={inputStyle} type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="tucorreo@email.com" />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 font-bold transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-1"
                        style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "2px" }}
                      >
                        QUIERO QUE UN ASESOR ME LLAME <ArrowRight size={18} />
                      </button>
                      <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.78rem", color: "#8a8f9e", textAlign: "center" }}>
                        100% gratis · Sin compromiso · Respuesta en menos de 24 horas
                      </p>
                    </form>
                  )}
                </div>

                <button
                  onClick={restart}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold mx-auto hover:gap-3 transition-all"
                  style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", color: "#8a8f9e" }}
                >
                  <RefreshCw size={14} /> VOLVER A EMPEZAR EL QUIZ
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-7">
                  <div className="inline-flex items-center gap-2 mb-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#f5b700", letterSpacing: "0.15em" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {step.hint ?? "RESPONDE Y CONTINÚA"}
                  </div>
                  <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "#4a4a49", lineHeight: 1.1 }}>
                    {step.question}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {step.options.map((o, i) => {
                    const OptionIcon = o.icon;
                    const isActive = selected === o.value || answers[step.key] === o.value;
                    return (
                      <button
                        key={i}
                        onClick={() => choose(o)}
                        className={`w-full text-left p-4 flex items-center gap-4 transition-all duration-200 border-2 hover:scale-[1.01] ${isActive && !done ? "bg-primary/10" : "bg-white hover:bg-gray-50"}`}
                        style={{
                          borderRadius: "10px",
                          borderColor: isActive ? "#f5b700" : "#e5e5e5",
                        }}
                      >
                        <div
                          className="w-11 h-11 flex items-center justify-center shrink-0 transition-colors"
                          style={{ background: isActive ? "#f5b700" : "#f6f6f6", borderRadius: "8px" }}
                        >
                          <OptionIcon size={20} style={{ color: isActive ? "#0d0f14" : "#8a8f9e" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#4a4a49", letterSpacing: "0.02em" }}>{o.label}</span>
                            <ChevronRight size={18} className={`shrink-0 transition-transform duration-200 ${isActive ? "-rotate-90" : "opacity-40"}`} style={{ color: "#f5b700" }} />
                          </div>
                          {o.desc && <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.83rem", color: "#8a8f9e", lineHeight: 1.5, display: "block", marginTop: "0.15rem" }}>{o.desc}</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={goBack}
                    disabled={stepIndex === 0}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3 disabled:opacity-30"
                    style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", color: "#8a8f9e" }}
                  >
                    <ArrowLeft size={14} /> ANTERIOR
                  </button>
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#b5b5b5" }}>
                    Selecciona para continuar
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}