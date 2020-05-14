export default async (ctx: any, next: any) => {
  ctx.body = { hello: 'world' }
  await next()
}
