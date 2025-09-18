import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * tabDurSym element.
 * @see https://music-encoding.org/guidelines/v5/elements/tabDurSym.html
 */
export const TabDurSymSchema = AnythingObjectSchema; // TODO: implement element

export type TabDurSymData = v.InferOutput<typeof TabDurSymSchema>;
