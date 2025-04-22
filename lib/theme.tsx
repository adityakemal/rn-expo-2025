// theme.ts
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config"; // pastikan path sesuai dengan lokasi tailwind.config.js

const fullConfig = resolveConfig(tailwindConfig);

// Cast biar lebih gampang akses dan pakai TypeScript
export const theme = fullConfig.theme as {
  colors: Record<string, any>;
  fontSize: Record<string, string | [string, Record<string, string>]>;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  // tambahkan bagian lain sesuai kebutuhan
};

// Akses spesifik
export const colors = theme.colors;
export const spacing = theme.spacing;
export const fontSize = theme.fontSize;
export const borderRadius = theme.borderRadius;
