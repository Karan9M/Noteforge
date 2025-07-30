'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { IconLogout } from "@tabler/icons-react";

export default function LogoutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
  };
  return (
    <Button variant={"outline"} onClick={handleLogout}>
      <IconLogout className="size-4" aria-placeholder="logout"/>
    </Button>
  );
}
