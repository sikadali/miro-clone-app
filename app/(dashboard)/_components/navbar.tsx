"use client";

import { OrganizationSwitcher, UserButton, useOrganization } from "@clerk/clerk-react";
import { SearchInput } from "./search-input";
import { OrgSwitcher } from "./org-switcher";
import { InviteButton } from "./invite-button";

export const Navbar = () => {
     const { organization } = useOrganization();

     return (
          <div className="flex items-center gap-x-4 p-5">
               <div className="hidden lg:flex lg:flex-1">
                    <SearchInput />
               </div>
               <div className="block lg:hidden flex-1">
                    <OrgSwitcher />
               </div>
               {organization && <InviteButton />}
               <UserButton />
          </div>
     );
};
