import { type Static, Type } from "@sinclair/typebox";
import { AnythingObjectSchema, StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrWhitespaceSchema } from "../shared/attr/whitespace";

/**
 * Provides a container element for non-MEI metadata formats.
 * @see https://music-encoding.org/guidelines/v5/elements/extMeta.html
 */
export const ExtMetaSchema = Type.Intersect([
	Type.Union([AnythingObjectSchema, StandardTagSchema]),
	AttrCommonSchema,
	AttrBiblSchema,
	AttrWhitespaceSchema,
]);

export type ExtMeta = Static<typeof ExtMetaSchema>;
