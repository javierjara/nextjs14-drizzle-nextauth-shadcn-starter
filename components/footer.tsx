import Link from 'next/link';

const Header = async () => {

  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <span>© 2023 Company Name</span>
        <span className="hidden md:inline">All rights reserved.</span>
      </div>
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <Link href="#" className="hover:underline" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="#" className="hover:underline" prefetch={false}>
          Contact Us
        </Link>
      </div>
    </div>
  </footer>
  );
};

export default Header;
