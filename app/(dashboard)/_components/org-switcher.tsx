"use client";

import { OrganizationSwitcher } from "@clerk/clerk-react";

export const OrgSwitcher = () => {
     return (
          <OrganizationSwitcher
               hidePersonal
               appearance={{
                    elements: {
                         rootBox: {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                              maxWidth: "376px",
                         },
                         organizationSwitcherTrigger: {
                              padding: "6px",
                              width: "100%",
                              borderRadius: "8px",
                              border: "1px solid #E5E7EB",
                              justifyContent: "space-between",
                              backgroundColor: "white",
                         },
                    },
               }}
          />
     );
};
