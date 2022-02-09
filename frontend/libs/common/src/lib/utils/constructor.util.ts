export type Constructor<T> = new (...args: unknown[]) => T;

// eslint-disable-next-line @typescript-eslint/ban-types
export type PlainConstructor = { new (...args: unknown[]): {} };

export type AbstractConstruct<T> = abstract new (...args: unknown[]) => T;
