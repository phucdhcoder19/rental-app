import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const FooterSection = () => {
  return (
    <footer className="border-t bg-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col justify-between md:flex-row items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold">
              RENTIFUL
            </Link>
            <nav className="mb-4">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/about">About us</Link>
                </li>{" "}
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>{" "}
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>{" "}
                <li>
                  <Link href="/terms">Terms</Link>
                </li>{" "}
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
              </ul>
            </nav>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                aira-lable="FaceBook"
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500 flex-justify-center">
            <span>
              &copy; {new Date().getFullYear()} RENTIFUL. All rights reserved.
            </span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
