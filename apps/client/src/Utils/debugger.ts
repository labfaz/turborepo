/* eslint-disable no-console */

export function debug(context: string, value: unknown): void {
  console.log(`[debug][${context}]`, value);
}

export function info(context: string, value: unknown): void {
  console.info(`[info][${context}]`, value);
}

export function warning(context: string, value: unknown): void {
  console.warn(`[warning][${context}]`, value);
}

export function exception(context: string, value: unknown): void {
  console.error(`[error][${context}]`, value);
}
