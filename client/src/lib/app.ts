import { treaty } from "@elysiajs/eden";
import type { App } from "@mei-cat/server";

export const app = treaty<App>(window.location.origin, {});
