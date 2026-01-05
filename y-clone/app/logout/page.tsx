import { logout } from "@/actions/authActions";

export default async function LogoutPage() {
  await logout(); // this redirects, so the return below is never shown
  return null;
}
