"use client";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const languages = navigator.languages || [navigator.language];
    let redirectTo = "/en";
    for (const rawLang of languages) {
      const lang = rawLang.toLowerCase();
      if (lang === "pt-br" || lang.startsWith("pt")) { redirectTo = "/pt-br"; break; }
      if (lang.startsWith("en")) { redirectTo = "/en"; break; }
    }
    window.location.replace(redirectTo);
  }, []);
  return null;
}
