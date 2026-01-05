"use client";

import { useActionState } from "react";
import { login } from "@/actions/authActions";

const LoginPage = () => {
const [state, loginAction, pending] = useActionState(login, {
success: false,
email: "",
errors: { email: [], password: [], general: [] },
});

return (
<div className="flex min-h-screen items-center justify-center p-4">
<div className="w-full max-w-sm rounded-lg border border-gray-200 p-6 shadow-sm">

<h1 className="mb-2 text-2xl font-bold">Login</h1>
<p className="mb-6 text-sm text-gray-500">
Enter your email below to login to your account
</p>

{state.errors.general.length > 0 && (
<div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-600">
{state.errors.general.join(", ")}
</div>
)}

<form action={loginAction} className="space-y-4">
<div>
<label htmlFor="email" className="mb-1 block text-sm font-medium">
Email
</label>
<input
id="email"
name="email"
type="text"
placeholder="m@example.com"
defaultValue={state.email}
className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 ${
state.errors.email.length > 0
? "border-red-500 focus:ring-red-500"
: "border-gray-300 focus:ring-blue-500"
}`}
/>
{state.errors.email.map((error, index) => (
<p key={index} className="mt-1 text-xs text-red-500">
{error}
</p>
))}
</div>
<div>
<label htmlFor="password" className="mb-1 block text-sm font-medium">
Password
</label>
<input
id="password"
name="password"
type="password"
placeholder="Your password"
className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 ${
state.errors.password.length > 0
? "border-red-500 focus:ring-red-500"
: "border-gray-300 focus:ring-blue-500"
}`}
/>
{state.errors.password.map((error, index) => (
<p key={index} className="mt-1 text-xs text-red-500">
{error}
</p>
))}
</div>
<button
type="submit"
disabled={pending}
className="w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
>
{pending ? "Logging in..." : "Login"}
</button>
</form>
</div>
</div>
);
};

export default LoginPage;