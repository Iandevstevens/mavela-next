import { redirect } from "next/navigation";

export default function GlobalNotFound() {
  // This executes on the server immediately when a route isn't found
  redirect("/");

  // You can also add client-side code if needed,
  // but the server-side redirect is more immediate and efficient.
  return null;
}
