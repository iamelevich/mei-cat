import * as v from "valibot";

/**
 * Attributes for mordent.vis.
 * @see https://music-encoding.org/guidelines/v5/attribute-classes/att.mordent.vis.html
 */
export const AttrMordentVisSchema = v.object({
  // TODO: Add mordent.vis attributes
});

export type AttrMordentVisData = v.InferOutput<typeof AttrMordentVisSchema>;
