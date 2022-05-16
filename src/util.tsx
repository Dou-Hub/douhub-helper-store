export const _window: any = typeof window !== "undefined" ? window : {};
export const _process: any = typeof process !== "undefined" ? process : {};
export const _track = `${_process?.env?.TRACK}`.toLowerCase() == 'true';
