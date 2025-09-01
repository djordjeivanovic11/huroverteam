import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaTiktok, FaYoutube } from 'react-icons/fa'; // You'll need to install react-icons v4.8.0+ for FaTiktok

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5d101b] text-white py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center justify-items-center">
          
          <div>
            <h4 className="text-2xl font-bold mb-2">Harvard URC Rover</h4>
            <p className="text-md">
              Pioneering innovation in robotics and research. Our mission is to
              push the boundaries of exploration and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold mb-2">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <Link href="/">
                  <span className="hover:underline cursor-pointer">Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <span className="hover:underline cursor-pointer">About Us</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects">
                  <span className="hover:underline cursor-pointer">Projects</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <span className="hover:underline cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h5 className="text-xl font-bold mb-2">Connect With Us</h5>
            <p className="text-sm mb-4">
              Harvard University, Cambridge, MA<br />
              Email: hurcofficial@gmail.com<br />
              Phone: +1 (617) 495-1000
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="https://www.instagram.com/hurcofficial/" passHref>
                <span className="hover:text-gray-400 cursor-pointer" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6" />
                </span>
              </Link>

              <Link href="https://www.tiktok.com/@hurcofficial" passHref>
                <span className="hover:text-gray-400 cursor-pointer" aria-label="TikTok">
                  <FaTiktok className="w-6 h-6" />
                </span>
              </Link>

              <Link href="https://www.youtube.com/@harvardundergraduateroboti6727" passHref>
                <span className="hover:text-gray-400 cursor-pointer" aria-label="YouTube">
                  <FaYoutube className="w-6 h-6" />
                </span>
              </Link>

              <Link href="https://www.linkedin.com/school/harvard-university/" passHref>
                <span className="hover:text-gray-400 cursor-pointer" aria-label="LinkedIn">
                  <FaLinkedin className="w-6 h-6" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-white pt-4 text-center text-sm">
          © {new Date().getFullYear()} Harvard URC Rover Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
