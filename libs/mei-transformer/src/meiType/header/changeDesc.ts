import { type Static, Type } from "@sinclair/typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";
import { PSchema } from "../shared/p";

/**
 * Description of a revision of the MEI file.
 * @see https://music-encoding.org/guidelines/v5/elements/changeDesc.html
 */
export const ChangeDescSchema = Type.Intersect([
	StandardTagSchema,
	AttrCommonSchema,
	AttrLangSchema,
	AttrBiblSchema,
	Type.Object({
		/**
		 * One or more text phrases that form a logical prose passage (optional).
		 * @see https://music-encoding.org/guidelines/v5/elements/p.html
		 */
		p: Type.Optional(Type.Union([PSchema, Type.Array(PSchema)])),
	}),
]);

export type ChangeDesc = Static<typeof ChangeDescSchema>;
