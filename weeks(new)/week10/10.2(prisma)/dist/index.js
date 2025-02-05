"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function InsertUser(username, password, firstName, LastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.create({
            data: {
                username,
                password,
                firstName,
                LastName
            },
        });
        console.log(user);
    });
}
function GetUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.users.findFirst({ where: {
                username: username
            } });
        console.log(user);
    });
}
function UpdateUser(oldUsername, newUsername, password, firstName, LastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedData = {};
        if (newUsername)
            updatedData.username = newUsername;
        if (firstName)
            updatedData.firstName = firstName;
        if (LastName)
            updatedData.lastName = LastName;
        if (password)
            updatedData.password = password;
        try {
            const user = yield prisma.users.update({
                where: { username: oldUsername },
                data: updatedData
            });
            console.log(user);
        }
        catch (error) {
            console.error(`Error updating user , ${error}`);
            throw new Error("User update failed");
        }
    });
}
function DeleteUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedUser = yield prisma.users.delete({ where: { username } });
        console.log(deletedUser);
    });
}
DeleteUser("alex");
// InsertUser("aarti" , "123456" , "aarti" , "mahapatra");
