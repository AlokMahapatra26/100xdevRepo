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
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { username: username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                username: username
            }
        });
        console.log(res);
    });
}
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.delete({
            where: {
                id: id
            }
        });
        console.log(`${res.username} deleted successfully from database`);
    });
}
//Todo function 
function insertTodo(title, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title: title,
                description: description,
                userId: userId
            }
        });
    });
}
function getTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findFirst({
            where: {
                id: id
            }
        });
        console.log(res);
    });
}
function updateTodo(id, { title, description }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.update({
            where: { id: id },
            data: {
                title: title,
                description: description
            }
        });
        console.log(`Todo updated successfully`);
    });
}
function deleteTodo(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.delete({
            where: {
                id: id
            }
        });
        console.log(`todo deleted successfully`);
    });
}
deleteTodo(1);
