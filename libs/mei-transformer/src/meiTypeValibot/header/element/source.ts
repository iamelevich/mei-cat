import * as v from "valibot";
import { StandardTagSchema } from "../../common";
import { AttrComponentTypeSchema } from "../../msDesc/attr/componentType";
import { LocusSchema } from "../../msDesc/element/locus";
import { LocusGrpSchema } from "../../msDesc/element/locusGrp";
import { AttrAuthorizedSchema } from "../../shared/attr/authorized";
import { AttrBiblSchema } from "../../shared/attr/bibl";
import { AttrCommonSchema } from "../../shared/attr/common";
import { AttrDataPointingSchema } from "../../shared/attr/dataPointing";
import { AttrPointingSchema } from "../../shared/attr/pointing";
import { AttrTargetEvalSchema } from "../../shared/attr/targetEval";
import { ModelBiblLikeSchema } from "../../shared/model/biblLike";
import { ModelHeadLikeSchema } from "../../shared/model/headLike";
import { AttrRecordTypeSchema } from "../attr/recordType";

/**
 * Base schema with attribute, to simplify types for SourceSchema
 */
const SourceBaseSchema = v.object({
	...StandardTagSchema.entries,
	...AttrAuthorizedSchema.entries,
	...AttrBiblSchema.entries,
	...AttrCommonSchema.entries,
	...AttrComponentTypeSchema.entries,
	...AttrDataPointingSchema.entries,
	...AttrPointingSchema.entries,
	...AttrRecordTypeSchema.entries,
	...AttrTargetEvalSchema.entries,
});

/**
 * A bibliographic description of a source used in the creation of the electronic file.
 * @see https://music-encoding.org/guidelines/v5/elements/source.html
 */
export const SourceSchema = v.lazy(() =>
	v.intersect([
		SourceBaseSchema,
		v.object({
			/**
			 * Reference to element locus
			 * @see https://music-encoding.org/guidelines/v5/elements/locus.html
			 */
			locus: v.optional(v.union([LocusSchema, v.array(LocusSchema)])),
			/**
			 * Reference to element locusGrp
			 * @see https://music-encoding.org/guidelines/v5/elements/locusGrp.html
			 */
			locusGrp: v.optional(v.union([LocusGrpSchema, v.array(LocusGrpSchema)])),
		}),
		ModelBiblLikeSchema,
		ModelHeadLikeSchema,
	]),
);

export type SourceData = v.InferOutput<typeof SourceSchema>;
