interface NavItem {
  label: string;
  path: string;
  isPrivate: boolean;
}

export const navigations: NavItem[] = [
  { label: "My Profile", path: "/profile", isPrivate: true },
  { label: "About", path: "/about", isPrivate: false },
  { label: "Events", path: "/events", isPrivate: false },
  { label: "Contact", path: "/contact", isPrivate: false },
];
