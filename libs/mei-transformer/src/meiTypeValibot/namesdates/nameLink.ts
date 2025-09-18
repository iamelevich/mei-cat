import * as v from "valibot";
import { AnythingObjectSchema } from "../common";

/**
 * Contains a name link.
 * @see https://music-encoding.org/guidelines/v5/elements/nameLink.html
 */
export const NameLinkSchema = AnythingObjectSchema; // TODO: implement element

export type NameLinkData = v.InferOutput<typeof NameLinkSchema>;
