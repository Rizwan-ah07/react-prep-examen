import { seedDatabase } from "@/database/database";

export default async function SeedPage() {
    const {posts, profiles} = await seedDatabase();

    return(
    <main>
        <h1>seed</h1>
        <p>seeded {posts.length} posts and {profiles.length} profiles</p>
    </main>
)
}

