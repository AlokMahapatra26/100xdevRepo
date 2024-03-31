
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient()


async function fetchData(){
  const user = await client.user.findFirst();
  return {
    name : user?.username,
    email : user?.email
}
}

export default async function User() {

  const data = await fetchData()

  return (
   <div>
    <h1 className="">{data.name}</h1>
    <h1>{data.email}</h1>
    {/* <img src={data.avatar_url} alt="" /> */}
   </div>
  );
}
