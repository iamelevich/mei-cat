import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * signifLet element.
 * @see https://music-encoding.org/guidelines/v5/elements/signifLet.html
 */
export const SignifLetSchema = AnythingObjectSchema; // TODO: implement element

export type SignifLetData = v.InferOutput<typeof SignifLetSchema>;
