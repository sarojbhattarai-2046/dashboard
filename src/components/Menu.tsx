import Image from "next/image";
import Link from "next/link";

import { menuItems, MenuItem } from "@/lib/data";

const Menu: React.FC = () => {
  return (
    <div className="mt-4 text-sm">
      <div className="flex flex-col gap-2">
        {menuItems.map((item: MenuItem) => {
          return (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
            >
              <Image src={item.icon} alt="" width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
