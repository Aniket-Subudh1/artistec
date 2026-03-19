"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function useInView(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [inView, setInView] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || (once && triggered.current)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          setInView(true);
          if (once) { triggered.current = true; observer.disconnect(); }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once]);

  return inView;
}

type TokenType = "command" | "flag" | "string" | "number" | "operator" | "path" | "variable" | "comment" | "default";
interface Token { type: TokenType; value: string; }

function tokenizeBash(text: string): Token[] {
  const tokens: Token[] = [];
  let isFirstWord = true;

  for (const word of text.split(/(\s+)/)) {
    if (/^\s+$/.test(word))                                             { tokens.push({ type: "default",  value: word }); continue; }
    if (word.startsWith("#"))                                           { tokens.push({ type: "comment",  value: word }); continue; }
    if (word.startsWith("$"))                                           { tokens.push({ type: "variable", value: word }); isFirstWord = false; continue; }
    if (word.startsWith("--") || word.startsWith("-"))                  { tokens.push({ type: "flag",     value: word }); isFirstWord = false; continue; }
    if (/^["'].*["']$/.test(word))                                      { tokens.push({ type: "string",   value: word }); isFirstWord = false; continue; }
    if (/^\d+$/.test(word))                                             { tokens.push({ type: "number",   value: word }); isFirstWord = false; continue; }
    if (/^[|>&<]+$/.test(word))                                         { tokens.push({ type: "operator", value: word }); isFirstWord = true;  continue; }
    if (word.includes("/") || word.startsWith(".") || word.startsWith("~")) { tokens.push({ type: "path", value: word }); isFirstWord = false; continue; }
    if (isFirstWord)                                                    { tokens.push({ type: "command",  value: word }); isFirstWord = false; continue; }
    tokens.push({ type: "default", value: word });
  }
  return tokens;
}

const darkColors: Record<TokenType, string> = {
  command: "text-emerald-400",  flag: "text-sky-400",       string: "text-amber-300",
  number:  "text-purple-400",   operator: "text-red-400",   path: "text-cyan-300",
  variable:"text-pink-400",     comment: "text-neutral-500", default: "text-neutral-300",
};
const lightColors: Record<TokenType, string> = {
  command: "text-emerald-600",  flag: "text-sky-600",        string: "text-amber-600",
  number:  "text-[#7c3aed]",    operator: "text-red-500",    path: "text-cyan-600",
  variable:"text-pink-600",     comment: "text-gray-400",    default: "text-gray-700",
};

function SyntaxHighlightedText({ text, light }: { text: string; light: boolean }) {
  const colors = light ? lightColors : darkColors;
  return (
    <>
      {tokenizeBash(text).map((t, i) => (
        <span key={i} className={colors[t.type]}>{t.value}</span>
      ))}
    </>
  );
}

interface TerminalLine { type: "command" | "output"; content: string; }

export interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  username?: string;
  className?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;

  theme?: "dark" | "light";
}

export function Terminal({
  commands = ["npx shadcn@latest init"],
  outputs = {},
  username = "artistec",
  className,
  typingSpeed = 50,
  delayBetweenCommands = 800,
  initialDelay = 500,
  theme = "dark",
}: TerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef as React.RefObject<HTMLElement | null>);

  const [lines, setLines]           = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIdx, setCommandIdx]   = useState(0);
  const [charIdx, setCharIdx]         = useState(0);
  const [outputIdx, setOutputIdx]     = useState(-1);
  const [phase, setPhase]             = useState<"idle"|"typing"|"executing"|"outputting"|"pausing"|"done">("idle");
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentCommand  = commands[commandIdx] || "";
  const currentOutputs  = useMemo(() => outputs[commandIdx] || [], [outputs, commandIdx]);
  const isLastCommand   = commandIdx === commands.length - 1;

  useEffect(() => {
    if (!inView || phase !== "idle") return;
    const t = setTimeout(() => setPhase("typing"), initialDelay);
    return () => clearTimeout(t);
  }, [inView, phase, initialDelay]);

  useEffect(() => {
    if (phase !== "typing") return;
    if (charIdx < currentCommand.length) {
      const t = setTimeout(() => {
        setCurrentText(currentCommand.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, typingSpeed + Math.random() * 25);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("executing"), 80);
    return () => clearTimeout(t);
  }, [phase, charIdx, currentCommand, typingSpeed]);

  useEffect(() => {
    if (phase !== "executing") return;
    const t = setTimeout(() => {
      setLines(prev => [...prev, { type: "command", content: currentCommand }]);
      setCurrentText("");
      if (currentOutputs.length > 0) { setOutputIdx(0); setPhase("outputting"); }
      else if (isLastCommand)        { setPhase("done"); }
      else                           { setPhase("pausing"); }
    }, 0);
    return () => clearTimeout(t);
  }, [phase, currentCommand, currentOutputs.length, isLastCommand]);

  useEffect(() => {
    if (phase !== "outputting") return;
    if (outputIdx >= 0 && outputIdx < currentOutputs.length) {
      const t = setTimeout(() => {
        setLines(prev => [...prev, { type: "output", content: currentOutputs[outputIdx] }]);
        setOutputIdx(i => i + 1);
      }, 140);
      return () => clearTimeout(t);
    }
    if (outputIdx >= currentOutputs.length) {
      const t = setTimeout(() => {
        if (isLastCommand) { setPhase("done"); } else { setPhase("pausing"); }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [phase, outputIdx, currentOutputs, isLastCommand]);

  useEffect(() => {
    if (phase !== "pausing") return;
    const t = setTimeout(() => {
      setCharIdx(0); setOutputIdx(-1);
      setCommandIdx(c => c + 1); setPhase("typing");
    }, delayBetweenCommands);
    return () => clearTimeout(t);
  }, [phase, delayBetweenCommands]);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (contentRef.current) contentRef.current.scrollTop = contentRef.current.scrollHeight;
  }, [lines, phase]);

  const light = theme === "light";

  const prompt = (
    <span className={light ? "text-[#6d28d9]/50" : "text-neutral-500"}>
      <span className={light ? "text-[#7c3aed] font-semibold" : "text-sky-500"}>{username}</span>
      <span className={light ? "text-[#9333ea]/70" : "text-emerald-600"}>:</span>
      <span className={light ? "text-[#a78bfa]" : "text-sky-400"}>~</span>
      <span className={light ? "text-[#6d28d9]/40" : "text-neutral-500"}>$</span>{" "}
    </span>
  );

  return (
    <div ref={containerRef} className={cn("w-full font-mono text-xs", className)}>
      <div className={cn(
        "h-full overflow-hidden rounded-xl border",
        light
          ? "border-[#bca6f2]/50 bg-(--card-surface-soft) shadow-[0_4px_24px_rgba(124,58,237,0.11)]"
          : "border-neutral-800 bg-neutral-900 shadow-2xl",
      )}>

        <div className={cn(
          "flex items-center gap-2 px-4 py-3",
          light ? "bg-(--card-surface) border-b border-[#bca6f2]/40" : "bg-neutral-800",
        )}>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400"   />
            <div className="h-3 w-3 rounded-full bg-yellow-400"/>
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 text-center">
            <span className={cn("truncate text-xs", light ? "text-[#6d28d9]/55" : "text-neutral-400")}>
              {username} — zsh
            </span>
          </div>
          <div className="w-13" />
        </div>

        <div
          ref={contentRef}
          className={cn(
            "h-72 overflow-y-auto p-4",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          )}
        >
          {lines.map((line, i) => (
            <div key={i} className="leading-relaxed whitespace-pre-wrap">
              {line.type === "command" ? (
                <span>{prompt}<SyntaxHighlightedText text={line.content} light={light} /></span>
              ) : (
                <span className={light ? "text-[#4c1d95]/65 pl-1" : "text-neutral-400"}>{line.content}</span>
              )}
            </div>
          ))}

          {phase === "typing" && (
            <div className="leading-relaxed whitespace-pre-wrap">
              {prompt}
              <SyntaxHighlightedText text={currentText} light={light} />
              <span className={cn("ml-0.5 inline-block h-3.5 w-1.5 align-middle", light ? "bg-[#7c3aed]/70" : "bg-neutral-300")} />
            </div>
          )}

          {(phase === "done" || phase === "pausing" || phase === "outputting") && (
            <div className="leading-relaxed whitespace-pre-wrap">
              {prompt}
              <span className={cn(
                "inline-block h-3.5 w-1.5 align-middle transition-opacity duration-100",
                light ? "bg-[#7c3aed]/70" : "bg-neutral-300",
                !cursorVisible && "opacity-0",
              )} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Terminal;
