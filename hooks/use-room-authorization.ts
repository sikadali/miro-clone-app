import { useState, useEffect } from "react";

export function useRoomAuthorization(roomId: string) {
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(false);

     useEffect(() => {
          const checkAuthorization = async () => {
               setLoading(true);
               try {
                    const response = await fetch("/api/liveblocks-auth", {
                         method: "POST",
                         body: JSON.stringify({ room: roomId }),
                         headers: {
                              "Content-Type": "application/json",
                         },
                    });

                    if (!response.ok) {
                         setError(true);
                    }
               } catch (err) {
                    setError(true);
               } finally {
                    setLoading(false);
               }
          };

          checkAuthorization();
     }, [roomId]);

     return { loading, error };
}
