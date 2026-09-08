import type { CSSProperties, Key, ReactNode } from 'react';

export interface LogoLoopItem {
  node?: ReactNode;
  src?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export interface LogoLoopProps {
  logos: LogoLoopItem[];
  /** CSS color inherited by node-based logos, such as SVG icons. */
  color?: string;
  speed?: number;
  direction?: string;
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoLoopItem, key: Key) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const LogoLoop: (props: LogoLoopProps) => ReactNode;

export default LogoLoop;
