import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");

  const handleUpdate = () => {
    if (!name || !photo) {
      setMessage("Fields cannot be empty");
      return;
    }

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setMessage("✅ Profile updated successfully!");
      })
      .catch((error) => {
        console.log(error);
        setMessage("❌ Failed to update profile!");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="card bg-base-100 w-full max-w-sm shadow-xl p-5 space-y-3">
        <h2 className="text-2xl font-semibold text-center">My Profile</h2>

        <div className="flex justify-center">
          <img
            src={user?.photoURL}
            alt="User"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <p className="text-center font-semibold">Email: {user?.email}</p>

        <label className="form-control">
          <div className="label">Name</div>
          <input
            type="text"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="form-control">
          <div className="label">Photo URL</div>
          <input
            type="text"
            className="input input-bordered"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </label>

        {message && <p className="text-xs text-center text-primary">{message}</p>}

        <button onClick={handleUpdate} className="btn btn-neutral w-full">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
