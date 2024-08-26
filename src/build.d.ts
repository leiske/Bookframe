declare module "bookmarkleter" {
  export default function bookmarkleter(code: string): string;
}

declare module "*.hbs" {
  const content: string;
  export default content;
}
