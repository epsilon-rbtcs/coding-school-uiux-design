export interface NavItem {
  label: string;
  hasDropdown?: boolean;
  href?: string;
  dropdownItems?: {
    title: string;
    description: string;
    iconName?: string;
    badge?: string;
  }[];
}

export interface MetricCard {
  value: string;
  label: string;
  subtext: string;
}

export interface SearchQuery {
  role: string;
  location: string;
  skills: string[];
  language: string;
}
