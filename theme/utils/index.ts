export function ejectWindow(url: string) {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.click()
  link.remove()
}

export function riposte<T>(...args: [cond: boolean, value: T][]) {
  for (const [cond, value] of args) {
    if (cond)
      return value
  }
}

export function toArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value))
    return value as any
  else return [value].filter(Boolean) as any
}

export function removeTags(content = '') {
  return content
    .replace(/<\/?[^>]*>/g, '')
    .replace(/[|]*\n/, '')
}
