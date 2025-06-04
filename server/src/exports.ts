import type { app } from "./app";

export type App = typeof app;

export type { MeiFileInsert, MeiFileSelect } from "./db/models";
export type { TodoInsert, TodoSelect } from "./db/models";
