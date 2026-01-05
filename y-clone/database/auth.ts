import { Collection, MongoClient } from "mongodb";
import { User } from "@/types";
import bcrypt from "bcrypt";

const client = new MongoClient(process.env.MONGODB_URI!);

export const userCollection: Collection<User> = client.db("auth-jwt").collection<User>("users");

const DUMMY_USERS: User[] = [
{
id: "1",
email: "jon.doe@acme.com",
name: "Jon Doe",
username: "Jon Doe",
avatar: "",
passwordHash: bcrypt.hashSync("password123", 10)
},
{
id: "2",
email: "alice.doe@acme.com",
name: "Alice Doe",
username: "Alice Doe",
avatar: "",
passwordHash: bcrypt.hashSync("mypassword", 10)
}
]

export const seedDummyUsers = async () => {
const existingUsers = await userCollection.find({}).toArray();
if (existingUsers.length === 0) {
await userCollection.insertMany(DUMMY_USERS);
console.log("Dummy users seeded to the database.");
} else {
console.log("Database already has users. Skipping seeding.");
}
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
return await userCollection.findOne({ email });
}

export const createUser = async (user: User): Promise<void> => {
await userCollection.insertOne(user);
}

