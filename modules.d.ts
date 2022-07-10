declare module '*.svg';
declare module '*.scss';
declare module '*.png';
declare module '*jpg' {
  const content: string;
  export default content;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
