"use client";

import { Editor } from "@/components/editor";
import Quill from "quill";
import { useState } from "react";

export default function Home() {
  const [api, setApi] = useState<Quill>();

  return (
    <div>
      <Editor setApi={setApi} />
    </div>
  );
}
