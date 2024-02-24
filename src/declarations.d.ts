declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}