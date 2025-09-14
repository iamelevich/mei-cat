import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

/**
 * Used to explicitly indicate that a bibliographic resource is unpublished.
 * @see https://music-encoding.org/guidelines/v5/elements/unpub.html
 */
export const UnpubSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrBiblSchema,
	AttrLangSchema,
]);

export type Unpub = Static<typeof UnpubSchema>;
