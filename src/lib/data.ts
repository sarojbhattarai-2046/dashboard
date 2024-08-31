export interface Division {
    name: string;
    code: string;
}

export interface MenuItem {
    icon: string;
    label: string;
    href: string;
}

export const divisions: Division[] = [
    { name: `Men's X`, code: 'men_x' },
    { name: `Men's U23 X`, code: 'men_u23_x' },
    { name: `Women's X`, code: 'women_x' },
    { name: `Women's U23 X`, code: 'women_u23_x' },
    { name: `Men's(FQPL1)`, code: 'men_fqpl1' },
    { name: `Men's(FQPL2)`, code: 'men_fqpl2' }
];

export const menuItems: MenuItem[] = [
    {
        icon: "/setting.png",
        label: "Settings",
        href: "/admin",
    },
    {
        icon: "/logout.png",
        label: "Logout",
        href: "/admin",
    },
];
