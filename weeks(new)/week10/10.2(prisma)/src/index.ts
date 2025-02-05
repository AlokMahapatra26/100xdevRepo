import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function InsertUser(username : string , password:string , firstName:string , LastName : string){
    const user = await prisma.users.create({
        data: {
            username,
            password,
            firstName,
            LastName
        },
    });
    console.log(user)
}

async function GetUser(username:string){
    const user = await prisma.users.findFirst({where: {
        username: username
    }})
    console.log(user)
}

async function UpdateUser(oldUsername:string , newUsername?:string ,password?:string , firstName? : string , LastName? : string){
    const updatedData: any = {}

    if (newUsername) updatedData.username = newUsername;
    if (firstName) updatedData.firstName = firstName;
    if (LastName) updatedData.lastName = LastName;
    if (password) updatedData.password = password;

    try{
        const user = await prisma.users.update({
            where : {username:oldUsername},
            data: updatedData
        })
        console.log(user);
    }catch (error){
        console.error(`Error updating user , ${error}`);
        throw new Error("User update failed")
    }
}

async function DeleteUser(username : string){
    const deletedUser = await prisma.users.delete({where:{username}});
    console.log(deletedUser);
    
} 

DeleteUser("alex");


// InsertUser("aarti" , "123456" , "aarti" , "mahapatra");