import { type QueryClient, useQuery } from "@tanstack/react-query";
import { app } from "@/lib/app";

export const MEI_QUERY_KEY = "mei-files";

export type MeiFiles = NonNullable<ReturnType<typeof useMeiFiles>["data"]>;
export type MeiFile = MeiFiles["data"][number];

export const useMeiFiles = ({
	page,
	limit,
}: {
	page: number;
	limit: number;
}) => {
	return useQuery({
		queryKey: [
			MEI_QUERY_KEY,
			{
				page,
				limit,
			},
		],
		queryFn: async () => {
			const { data, error } = await app.api.mei.get({
				query: {
					page,
					limit,
				},
			});
			if (error) {
				throw error;
			}
			return data;
		},
	});
};

export const invalidateMeiFiles = (queryClient: QueryClient) => {
	queryClient.invalidateQueries({ queryKey: [MEI_QUERY_KEY] });
};
