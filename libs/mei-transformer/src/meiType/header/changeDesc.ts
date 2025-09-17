import { Type } from "typebox";
import { StandardTagSchema } from "../common";
import { AttrBiblSchema } from "../shared/attr/bibl";
import { AttrCommonSchema } from "../shared/attr/common";
import { AttrLangSchema } from "../shared/attr/lang";

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
		p: Type.Optional(Type.Union([Type.Ref("p"), Type.Array(Type.Ref("p"))])),
	}),
]);
