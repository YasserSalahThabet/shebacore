import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps
  extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  external?: boolean;
}

const NavLink = forwardRef<
  HTMLAnchorElement,
  NavLinkCompatProps
>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      to,
      external,
      ...props
    },
    ref
  ) => {
    // ✅ External link → normal anchor
    if (external && typeof to === "string") {
      return (
        <a
          ref={ref}
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(className)}
        >
          {props.children}
        </a>
      );
    }

    // ✅ Internal link → React Router
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
