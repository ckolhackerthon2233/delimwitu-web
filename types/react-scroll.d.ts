/**
 * Type declaration for untyped npm package "react-scroll".
 * Provides types for Link component (to, smooth, duration, offset, spy, etc.) so TypeScript doesn't complain.
 */
declare module "react-scroll" {
  import type { ComponentType } from "react";

  export interface LinkProps {
    to: string;
    smooth?: boolean | string;
    duration?: number;
    offset?: number;
    spy?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }

  export const Link: ComponentType<LinkProps>;
}
