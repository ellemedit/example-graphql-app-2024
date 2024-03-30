import { fakerKO as faker } from "@faker-js/faker";

import { comments } from "~/data/Comment.schema";
import { posts } from "~/data/Post.schema";
import { users } from "~/data/User.schema";
import { getDatabase } from "~/drizzle/database";

seed();

async function seed() {
  const database = await getDatabase();

  const dummyUsers = await database
    .insert(users)
    .values([
      { name: faker.person.fullName() },
      { name: faker.person.fullName() },
      { name: faker.person.fullName() },
    ])
    .returning();

  const dummyPosts = await database
    .insert(posts)
    .values(
      Array(30)
        .fill(null)
        .map(() => ({
          authorId: faker.helpers.arrayElement(dummyUsers.map((x) => x.id)),
          title: faker.lorem.sentence({ min: 4, max: 8 }),
          body: faker.lorem.paragraphs({ min: 2, max: 8 }),
        })),
    )
    .returning();

  await database
    .insert(comments)
    .values(
      Array(120)
        .fill(null)
        .map(() => ({
          authorId: faker.helpers.arrayElement(dummyUsers.map((x) => x.id)),
          postId: faker.helpers.arrayElement(dummyPosts.map((x) => x.id)),
          body: faker.lorem.paragraphs({ min: 2, max: 8 }),
        })),
    )
    .returning();
}
