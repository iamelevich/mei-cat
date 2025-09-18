import * as v from "valibot";
import { AnythingObjectSchema } from "../../common";

export const LocrefLikeSchema = AnythingObjectSchema;

export type LocrefLikeData = v.InferOutput<typeof LocrefLikeSchema>;