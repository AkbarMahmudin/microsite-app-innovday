export default function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}
