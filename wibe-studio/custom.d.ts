declare module "*.svg" {
  const React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}