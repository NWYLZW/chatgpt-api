import stripMarkdown from 'strip-markdown'

export async function markdownToText(markdown?: string): Promise<string> {
  const { remark } = await import('remark')
  return remark()
    .use(stripMarkdown)
    .processSync(markdown ?? '')
    .toString()
}
