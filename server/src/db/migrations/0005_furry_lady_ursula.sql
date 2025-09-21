ALTER TABLE "pub_stmt" ALTER COLUMN "company" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "pub_stmt" ADD COLUMN "is_unpub" boolean DEFAULT false NOT NULL;