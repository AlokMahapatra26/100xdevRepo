import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any , next:any){
  if(c.req.header("Authorization")){
    next();
  }else{
    return c.text("acess denied")
  }
}



app.get('/', authMiddleware , async (c) => {

  const body =  await c.req.json();
  console.log(body);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('params'));
  return c.text('Hello Hono!')
})

export default app
