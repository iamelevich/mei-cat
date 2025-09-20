import * as v from "valibot";
import { AttrTabGrpAnlSchema } from "../../analytical/attr/tabGrp.anl";
import { StandardTagSchema } from "../../common";
import { ModelAppLikeSchema } from "../../critapp/model/appLike";
import { ModelEditLikeSchema } from "../../edittrans/model/editLike";
import { ModelTranscriptionLikeSchema } from "../../edittrans/model/transcriptionLike";
import { AttrFacsimileSchema } from "../../facsimile/attr/facsimile";
import { AttrTabGrpGesSchema } from "../../gestural/attr/tabGrp.ges";
import { AttrCommonSchema } from "../../shared/attr/common";
import { NoteSchema } from "../../shared/element/note";
import { RestSchema } from "../../shared/element/rest";
import { AttrTabGrpVisSchema } from "../../visual/attr/tabGrp.vis";
import { AttrTabGrpLogSchema } from "../attr/tabGrp.log";
import { TabDurSymSchema } from "./tabDurSym";

/**
 * Base schema with attribute, to simplify types for TabGrpSchema
 */
const TabGrpBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrCommonSchema.entries,
	...AttrFacsimileSchema.entries,
	...AttrTabGrpAnlSchema.entries,
	...AttrTabGrpGesSchema.entries,
	...AttrTabGrpLogSchema.entries,
	...AttrTabGrpVisSchema.entries,
});

/**
 * A group of simultaneous tab notes, comparable to a <gi scheme="MEI">chord</gi> in CMN. Rarely, may also contain rests, as in some "German" lute tablatures.
 * @see https://music-encoding.org/guidelines/v5/elements/tabGrp.html
 */
export const TabGrpSchema = v.lazy(() =>
	v.intersect([
		TabGrpBaseSchema,
		v.object({
			/**
			 * Reference to element note
			 * @see https://music-encoding.org/guidelines/v5/elements/note.html
			 */
			note: v.optional(v.union([v.array(NoteSchema), NoteSchema])),
			/**
			 * Reference to element rest
			 * @see https://music-encoding.org/guidelines/v5/elements/rest.html
			 */
			rest: v.optional(v.union([v.array(RestSchema), RestSchema])),
			/**
			 * Reference to element tabDurSym
			 * @see https://music-encoding.org/guidelines/v5/elements/tabDurSym.html
			 */
			tabDurSym: v.optional(TabDurSymSchema),
		}),
		ModelAppLikeSchema,
		ModelEditLikeSchema,
		ModelTranscriptionLikeSchema,
	]),
);

export type TabGrpData = v.InferOutput<typeof TabGrpSchema>;
