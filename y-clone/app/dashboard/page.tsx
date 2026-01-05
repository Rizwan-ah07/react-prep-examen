import { getCurrentUser, logout } from "@/actions/authActions";
import Image from "next/image";

export default async function Page() {
const user = await getCurrentUser();

return (
<div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
<div className="w-full max-w-md rounded-lg border border-gray-200 bg-white shadow-sm">
<div className="p-6">
<h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
</div>
<div className="flex flex-col items-center gap-6 p-6 pt-0">
{user.avatar && (
<div className="overflow-hidden rounded-full border border-gray-200">
<Image
src={`/${user.avatar}`}
alt={user.name}
width={100}
height={100}
className="h-[100px] w-[100px] object-cover"
/>
</div>
)}
<div className="text-center">
<p className="text-lg font-medium text-gray-900">Welcome, {user.name}!</p>
<p className="text-sm text-gray-500">Your email: {user.email}</p>
</div>
</div>
</div>
</div>
);
}