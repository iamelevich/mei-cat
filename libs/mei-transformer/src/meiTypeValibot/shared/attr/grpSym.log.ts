import * as v from "valibot";

/**
 * Attributes for group symbol logging.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.grpSym.log.html
 */
export const AttrGrpSymLogSchema = v.object({
  // TODO: Add group symbol logging attributes
});

export type AttrGrpSymLogData = v.InferOutput<typeof AttrGrpSymLogSchema>;
