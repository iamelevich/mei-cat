import * as v from "valibot";

/**
 * Groups elements that represent name-like elements for agents.
 * @see https://music-encoding.org/guidelines/v5/model-classes/model.nameLike.agent.html
 */
export const NameLikeAgentSchema = v.object({
  // TODO: Add name-like agent elements
});

export type NameLikeAgentData = v.InferOutput<typeof NameLikeAgentSchema>;
