/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type Constructor<T> = new (...args: any[]) => T;

export type AbstractConstructor<T> = abstract new (...args: unknown[]) => T;
