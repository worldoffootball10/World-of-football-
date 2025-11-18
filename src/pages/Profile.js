import React from "react";

function Profile() {
  // Temporary user data — later we add real authentication
  const user = {
    name: "Guest User",
    bio: "Football enthusiast. Write and explore football news."
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-700 mt-2">{user.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
