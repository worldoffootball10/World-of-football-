import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="max-w-4xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} World of Football — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
