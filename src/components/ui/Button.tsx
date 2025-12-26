import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export default function Button({href, children, className, onClick}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium text-white transition-all duration-300 ease-out transform";

    const gradientStyles =
        "bg-gradient-to-r from-[#3FB5FD] to-[#0B6EDA] hover:from-[#0B6EDA] hover:to-[#3FB5FD] transition-all duration-300 ease-out transform";

    const finalClass = clsx(baseStyles, gradientStyles, className);

    if (href) {
        return (
            <Link href={href} className={finalClass}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={finalClass}>
            {children}
        </button>
    );
}
