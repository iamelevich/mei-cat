import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * An instruction expressed as a combination of text and symbols, such as tempo or dynamics markings.
 * @see https://music-encoding.org/guidelines/v5/elements/dir.html
 */
export const DirSchema = AnythingObjectSchema; // TODO: implement element

export type DirData = v.InferOutput<typeof DirSchema>;
