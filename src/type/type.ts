export type WithoutType<T> = T extends Type ? Omit<T, "@type"> : T;

export interface Type<T extends string = string> {
  "@type": T;
}
