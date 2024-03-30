ALTER TABLE "comments" ALTER COLUMN "body" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "post_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "author_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "body" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "author_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;