/**
 * Utility for combining class names with Tailwind-aware merging.
 * clsx() joins classes; twMerge() resolves conflicts (e.g. p-2 + p-4 => p-4). Used across UI components.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with conflict resolution.
 * cn('p-2', 'p-4') => 'p-4'
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
