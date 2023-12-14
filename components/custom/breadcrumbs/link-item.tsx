import Link from "next/link";
import { Button, buttonVariants } from "../../ui/button";

type LinkItemProps = {
  href?: string;
  activeLast?: boolean;
  children: React.ReactNode;
};

const LinkItem = ({ href, activeLast = false, children }: LinkItemProps) => {
  if (!href) {
    return <span className="text-neutral-500">{children}</span>;
  }

  if (activeLast) {
    return (
      <Button variant="link" size="sm" disabled name="active-last">
        {children}
      </Button>
    );
  }

  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "link",
        size: "sm",
        className: "text-neutral-500 hover:text-neutral-600",
      })}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
