import {
  createElement,
  type ComponentPropsWithoutRef,
  type JSX,
  type ReactNode,
} from "react";

type MotionOnlyProps = {
  animate?: unknown;
  exit?: unknown;
  initial?: unknown;
  transition?: unknown;
  variants?: unknown;
  viewport?: unknown;
  whileHover?: unknown;
  whileInView?: unknown;
  whileTap?: unknown;
};

type StaticMotionProps<Tag extends keyof JSX.IntrinsicElements> =
  ComponentPropsWithoutRef<Tag> &
    MotionOnlyProps & {
      children?: ReactNode;
    };

function createStaticMotion<Tag extends keyof JSX.IntrinsicElements>(tag: Tag) {
  return function StaticMotionComponent(props: StaticMotionProps<Tag>) {
    const {
      animate: _animate,
      exit: _exit,
      initial: _initial,
      transition: _transition,
      variants: _variants,
      viewport: _viewport,
      whileHover: _whileHover,
      whileInView: _whileInView,
      whileTap: _whileTap,
      children,
      ...rest
    } = props;

    return createElement(tag, rest, children);
  };
}

export const motion = {
  article: createStaticMotion("article"),
  button: createStaticMotion("button"),
  div: createStaticMotion("div"),
  h1: createStaticMotion("h1"),
  h2: createStaticMotion("h2"),
  h3: createStaticMotion("h3"),
  p: createStaticMotion("p"),
};

export function AnimatePresence({ children }: { children?: ReactNode }) {
  return children ?? null;
}
