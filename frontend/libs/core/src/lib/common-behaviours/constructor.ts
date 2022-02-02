export type Constructor<T> = new (...args: unknown[]) => T;

// PlainConstructor as an literal constructor of args.
export type PlainConstructor = { new (...args: unknown[]): {} };

export type AbstractConstruct<T> = abstract new (...args: unknown[]) => T;
