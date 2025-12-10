"use client";

import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

type EditorProps = {
  setApi?: Dispatch<SetStateAction<Quill | undefined>>;
};

export function Editor({ setApi }: EditorProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const quill = new Quill(container, {
      theme: "snow",
      // your config
    });

    setApi?.(quill);

    return () => {
      setApi?.(undefined);
      container.innerHTML = "";
      quillRef.current = null;
    };
  }, [setApi]);

  return <div ref={containerRef}></div>;
}
