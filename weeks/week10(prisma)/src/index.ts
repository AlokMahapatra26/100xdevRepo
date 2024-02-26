import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where : {username:username},
    data :{
        firstName,
        lastName
    }
  })

  console.log(res);
}

async function getUser(username: string) {
  const res = await prisma.user.findFirst({
    where : {
        username : username
    }
  })
  console.log(res);
}

async function deleteUser(id:number){
    const res = await prisma.user.delete({
        where :{
            id : id
        }
    })
    console.log(`${res.username} deleted successfully from database`)
}

//Todo function 
async function insertTodo(title : string , description : string , userId : number){
    const res = await prisma.todo.create({
        data :{
            title : title,
            description : description,
            userId : userId
        }
    })
} 

interface TodoUpdateParams{
    title : string,
    description : string
}

async function getTodo(id:number){
    const res = await prisma.todo.findFirst({
        where :{
            id:id
        }
    })
    console.log(res);
}


async function updateTodo(id:number , {title , description}:TodoUpdateParams){
    const res = await prisma.todo.update({
        where :{id:id},
        data :{
            title : title,
            description : description
        }
    })
    console.log(`Todo updated successfully`)
}

async function deleteTodo(id:number){
    const res = await prisma.todo.delete({
        where :{
            id:id
        }
    })
    console.log(`todo deleted successfully`)
}

deleteTodo(1);