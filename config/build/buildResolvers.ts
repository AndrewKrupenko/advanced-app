import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    // after that there is no need to specify file extension while importing
    extensions: [".tsx", ".ts", ".js"],
  };
}
