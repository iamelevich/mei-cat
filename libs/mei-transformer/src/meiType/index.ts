import { type Static, Type } from "@sinclair/typebox";
import { MeiSchema } from "./mei";

export const MeiJSONSchema = Type.Object({
	mei: MeiSchema,
});

export type MeiJSON = Static<typeof MeiJSONSchema>;
