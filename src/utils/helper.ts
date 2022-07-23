/**
 * Format bytes as human-readable text.
 *
 * @param { bytes } number number of bytes
 * @param { dp } number number of decimal places to display.
 *
 * @return { string } Formatted string.
 */
export const humanFileSize = (bytes: number, dp?: number): string => {
  dp = dp || 1;
  const thresh = 1024;
  const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // In case of file is under 1KB
  if (Math.abs(bytes) < thresh) {
    return bytes + "B";
  }

  let u = -1;
  const r = 10 ** dp;

  /**
   * do-while loop to get human-readable file size with the biggest available file unit
   * loop until file size is small than specific size unit
   */
  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + units[u];
};
