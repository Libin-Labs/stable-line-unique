export function uniqueLines(lines: readonly string[]): string[] {
  if (!Array.isArray(lines) || lines.some((line) => typeof line !== 'string'))
    throw new TypeError('Expected string array');
  const seen = new Set<string>();
  return lines.filter((line) => {
    if (seen.has(line)) return false;
    seen.add(line);
    return true;
  });
}
