"use client";

import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react/suspense";
import { RoomProvider } from "@/liveblocks.config";
import { useRoomAuthorization } from "@/hooks/use-room-authorization";

interface RoomProps {
     children: React.ReactNode;
     roomId: string;
     fallback: NonNullable<React.ReactNode> | null;
}

export const Room = ({ children, roomId, fallback }: RoomProps) => {
     const { loading, error } = useRoomAuthorization(roomId);

     if (loading || error) {
          return fallback;
     }

     return (
          <RoomProvider id={roomId} initialPresence={{}}>
               <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
          </RoomProvider>
     );
};
