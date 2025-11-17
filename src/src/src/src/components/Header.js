Great — let’s add your first component.


---

✅ STEP 7 — Create src/components/Header.js

1. Tap Create a file


2. In the filename box, type:



src/components/Header.js

3. Paste this code:



import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          World of Football
        </Link>

        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

4. Scroll → tap Commit changes




---

⭐ NEXT: Create the Footer component

👉 The next file will be:

src/components/Footer.js

When ready, say:

“Continue”
