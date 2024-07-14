interface NavigationItem {
    name: string;
    href: string;
    icon?: string;
}

interface SectionProps {
    title : string,
    items: Array<NavigationItem>
}

export interface FooterProps {
    logoText: string;
    description: string;
    companyInformation: SectionProps;
    customerCare: SectionProps;
    tips: SectionProps;
    social: Array<NavigationItem>;
  }

export interface FooterIconProp {
    [key: string]: JSX.Element
}