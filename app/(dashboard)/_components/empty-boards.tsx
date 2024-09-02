"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/clerk-react";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
     const router = useRouter();
     const { organization } = useOrganization();
     const { mutate, pending } = useApiMutation(api.board.create);

     const onClick = () => {
          if (!organization) return;
          mutate({
               orgId: organization.id,
               title: "Untitled",
          })
               .then((id) => {
                    toast.success("Board created");
                    router.push(`/board/${id}`);
               })
               .catch(() => {
                    toast.error("Failed to create board");
               });
     };

     return (
          <div className="h-full flex flex-col items-center justify-center">
               <Image src="/note.svg" alt="Empty" width={110} height={110} />
               <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
               <p className="text-muted-foreground text-sm mt-2">Start by creating a board for your organization</p>
               <div className="mt-6">
                    <Button onClick={onClick} disabled={pending} size="lg">
                         Create board
                    </Button>
               </div>
          </div>
     );
};
