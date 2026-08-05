import { Link } from "react-router-dom";

import Logo from "../common/Logo";

const product = [
  "Features",
  "Community",
  "Goals",
  "Roadmap",
];

const resources = [
  "Support",
  "Privacy",
  "Terms",
  "Contact",
];

const social = [
  "GitHub",
  "LinkedIn",
  "Twitter",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111827]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>

            <Logo />

            <p className="mt-6 max-w-xs leading-7 text-gray-400">
              Build better habits, share daily progress,
              and grow together with people who show up
              every day.
            </p>

          </div>

          <div>

            <h3 className="mb-5 font-semibold text-white">
              Product
            </h3>

            <ul className="space-y-3">

              {product.map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h3 className="mb-5 font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3">

              {resources.map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          <div>

            <h3 className="mb-5 font-semibold text-white">
              Social
            </h3>

            <ul className="space-y-3">

              {social.map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-gray-400 transition hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 Growth Journal. All rights reserved.
          </p>

          <p>
            Build • Learn • Grow
          </p>

        </div>

      </div>

    </footer>
  );
}