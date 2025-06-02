import { Avatar } from '../components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '../components/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '../components/navbar'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '../components/sidebar'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog8ToothIcon,
  LightBulbIcon,
  PlusIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import {
  Cog6ToothIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar>
        <SidebarHeader>
          <Dropdown>
            <DropdownButton as={SidebarItem} className="lg:mb-2.5">
              <Avatar src="/tailwind-logo.svg" />
              <SidebarLabel>Tailwind Labs</SidebarLabel>
              <ChevronDownIcon />
            </DropdownButton>
            <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
              <DropdownItem href="/teams/1/settings">
                <Cog8ToothIcon />
                <DropdownLabel>Settings</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/teams/1">
                <Avatar slot="icon" src="/tailwind-logo.svg" />
                <DropdownLabel>Tailwind Labs</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="/teams/2">
                <Avatar slot="icon" initials="WC" className="bg-purple-500 text-white" />
                <DropdownLabel>Workcation</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/teams/create">
                <PlusIcon />
                <DropdownLabel>New team&hellip;</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <SidebarSection className="max-lg:hidden">
            <a href="/search" aria-label="Search">
              <SidebarItem>
                <MagnifyingGlassIcon />
                <SidebarLabel>Search</SidebarLabel>
              </SidebarItem>
            </a>
            <a href="/inbox" aria-label="Inbox">
              <SidebarItem>
                <InboxIcon />
                <SidebarLabel>Inbox</SidebarLabel>
              </SidebarItem>
            </a>
          </SidebarSection>
        </SidebarHeader>
        <SidebarBody>
          <SidebarSection>
            <a href="/">
              <SidebarItem>
                <HomeIcon />
                <SidebarLabel>Home</SidebarLabel>
              </SidebarItem>
            </a>
            <a href="/events">
              <SidebarItem>
                <Square2StackIcon />
                <SidebarLabel>Events</SidebarLabel>
              </SidebarItem>
            </a>
            <a href="/orders">
              <SidebarItem>
                <TicketIcon />
                <SidebarLabel>Orders</SidebarLabel>
              </SidebarItem>
            </a>
            <a href="/settings">
              <SidebarItem>
                <Cog6ToothIcon />
                <SidebarLabel>Settings</SidebarLabel>
              </SidebarItem>
            </a>
            <a href="/broadcasts">
              <SidebarItem>
                <MegaphoneIcon />
                <SidebarLabel>Broadcasts</SidebarLabel>
              </SidebarItem>
            </a>
          </SidebarSection>
          <SidebarSection className="max-lg:hidden">
            <SidebarHeading>Upcoming Events</SidebarHeading>
            <a href="/events/1"><SidebarItem>Bear Hug: Live in Concert</SidebarItem></a>
            <a href="/events/2"><SidebarItem>Viking People</SidebarItem></a>
            <a href="/events/3"><SidebarItem>Six Fingers — DJ Set</SidebarItem></a>
            <a href="/events/4"><SidebarItem>We All Look The Same</SidebarItem></a>
          </SidebarSection>
          <SidebarSpacer />
          <SidebarSection>
            <a href="/support">
              <SidebarItem>
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
            </a>
            <a href="/changelog">
              <SidebarItem>
                <SparklesIcon />
                <SidebarLabel>Changelog</SidebarLabel>
              </SidebarItem>
            </a>
          </SidebarSection>
        </SidebarBody>
        <SidebarFooter className="max-lg:hidden">
          <Dropdown>
            <DropdownButton as={SidebarItem}>
              <span className="flex min-w-0 items-center gap-3">
                <Avatar src="/profile-photo.jpg" className="size-10" square alt="" />
                <span className="min-w-0">
                  <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Erica</span>
                  <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                    erica@example.com
                  </span>
                </span>
              </span>
              <ChevronUpIcon />
            </DropdownButton>
            <DropdownMenu className="min-w-64" anchor="top start">
              <DropdownItem href="/my-profile">
                <UserIcon />
                <DropdownLabel>My profile</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="/settings">
                <Cog8ToothIcon />
                <DropdownLabel>Settings</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/privacy-policy">
                <ShieldCheckIcon />
                <DropdownLabel>Privacy policy</DropdownLabel>
              </DropdownItem>
              <DropdownItem href="/share-feedback">
                <LightBulbIcon />
                <DropdownLabel>Share feedback</DropdownLabel>
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem href="/logout">
                <ArrowRightStartOnRectangleIcon />
                <DropdownLabel>Sign out</DropdownLabel>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </SidebarFooter>
      </Sidebar>
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <a href="/search" aria-label="Search">
              <NavbarItem>
                <MagnifyingGlassIcon />
              </NavbarItem>
            </a>
            <a href="/inbox" aria-label="Inbox">
              <NavbarItem>
                <InboxIcon />
              </NavbarItem>
            </a>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="/profile-photo.jpg" square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>My profile</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Privacy policy</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Share feedback</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/logout">
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
} 