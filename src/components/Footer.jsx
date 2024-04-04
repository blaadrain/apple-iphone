import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <p className="text-sm font-semibold text-gray">
          More ways to shop:{" "}
          <span className="text-blue underline">Find an Apple Store</span> or{" "}
          <span className="text-blue underline">other retailer</span> near you.
        </p>
        <hr className="my-5 w-full border-b border-neutral-700" />
        <div className="flex flex-col items-center justify-between gap-y-2 max-sm:gap-y-4 lg:flex-row">
          <p className="text-sm font-semibold text-gray">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-col gap-y-2 max-md:text-center sm:flex-row">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-sm font-semibold text-gray">
                {link}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 hidden sm:inline">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
