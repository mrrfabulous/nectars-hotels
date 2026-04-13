import type { ReactNode } from "react";
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeInSection({
  children,
  className = "",
  delay: _delay = 0,
  y: _y = 28,
}: RevealProps) {
  return <div className={className}>{children}</div>;
}

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
};

export function StaggerGroup({
  children,
  className = "",
  delayChildren: _delayChildren = 0.1,
  staggerChildren: _staggerChildren = 0.12,
}: StaggerGroupProps) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
  y: _y = 24,
}: RevealProps) {
  return <div className={className}>{children}</div>;
}
