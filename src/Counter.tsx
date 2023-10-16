import type { PropsWithChildren } from 'react';

type CounterProps = PropsWithChildren<{
	start?: number;
}>;

export function Counter({ start = 0, children }: CounterProps) {
	return (
		<div className="counter--block">
			<h1>Counter</h1>
			{children}
			<p>numéro: {start}</p>
			<button>Increment</button>
		</div>
	);
}
