declare module '*.svg';
declare module '*.scss';
declare module '*jpg';
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
