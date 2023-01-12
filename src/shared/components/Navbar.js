import { Links } from '.';
import { navLinks } from '../data';


export const Navbar = () => {
  return (
    <nav className="relative hidden mx-auto lg:block navbar">
      <div className="container flex items-center justify-between h-full">
        <Links
          navItems={ navLinks }
          classStyles="transition duration-300 font-medium flex items-center justify-center px-4 gap-2 h-full"
        />
      </div>
    </nav>
  );
};
