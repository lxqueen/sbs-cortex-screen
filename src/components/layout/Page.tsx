import { clsx } from "clsx";
import type { PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren {
	className?: string;
}

export function Page({ className, children }: PageProps) {
	return (
		<div className={clsx("relative flex-1 p-gutter", className)}>
			{children}
		</div>
	);
}
