import type { PropsWithChildren } from "react";

export interface PageProps extends PropsWithChildren {}

export function Page({ children }: PageProps) {
	return <div className="h-full p-gutter">{children}</div>;
}
