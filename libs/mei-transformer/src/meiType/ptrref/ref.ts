import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { AttrPointingSchema } from "../shared/attr/pointing";

/**
 * Defines a traversible reference to another location. May contain text and sub-elements that describe the destination.
 * Unlike ptr, the ref element can contain text content and child elements.
 * @see https://music-encoding.org/guidelines/v5/elements/ref.html
 */
export const RefSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrPointingSchema,
]);

export type Ref = Static<typeof RefSchema>;
