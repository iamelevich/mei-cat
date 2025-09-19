import * as v from "valibot";
import { MeiSchema } from "./shared";

export const MeiJsonSchema = v.object({
	mei: MeiSchema,
});

export type MeiJsonData = v.InferOutput<typeof MeiJsonSchema>;
