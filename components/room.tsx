"use client";

import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react/suspense";
import { RoomProvider } from "@/liveblocks.config";

interface RoomProps {
     children: React.ReactNode;
     roomId: string;
     fallback: NonNullable<React.ReactNode> | null;
}

const publicApiKey = process.env.LIVEBLOCKS_PUBLIC_API_KEY!;

export const Room = ({ children, roomId, fallback }: RoomProps) => {
     return (
          <RoomProvider id={roomId} initialPresence={{}}>
               <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
          </RoomProvider>
     );
};
