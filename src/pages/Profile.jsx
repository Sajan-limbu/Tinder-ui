import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Anne from "../assets/Anne-Marie.jpeg";

const Profile = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Profile Image
  const [profileImage, setProfileImage] = useState(Anne);
  const fileInputRef = useRef(null);
  const handleImageClick = () => fileInputRef.current.click();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  // Profile state
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Anne Marie",
    age: 24,
    bio: "Music lover, Coffee addict, Traveler",
    description: "Looking for meaningful connections and fun conversations",
    job: "Software Engineer",
    education: "MIT",
    location: "San Francisco, CA",
    interests: "Music, Travel, Movies, Photography",
  });

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="max-w-2xl h-185 mx-auto
    bg-white shadow-lg rounded-2xl pl-10 p-2">
      
      {/* Profile Image */}
      <div className="flex flex-col mt-4 items-center relative">
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-pink-400"
          />
           <button
            onClick={handleImageClick}
            className="absolute bottom-0 right-2 bg-white p-1  rounded-full shadow-md hover:bg-gray-100 transition cursor-pointer"
          >
            📷
          </button>
         
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Name & Age */}
      <div className="mt-2 text-center">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mb-2"
            />
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            />
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold">{profile.name}</h2>
            <p className="text-gray-500 text-lg">{profile.age} years old</p>
          </>
        )}
      </div>

      {/* Bio */}
      <ProfileSection
        title="About Me"
        name="bio"
        value={profile.bio}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Description */}
      <ProfileSection
        title="Description"
        name="description"
        value={profile.description}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Job */}
      <ProfileSection
        title="Job"
        name="job"
        value={profile.job}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Education */}
      <ProfileSection
        title="Education"
        name="education"
        value={profile.education}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Location */}
      <ProfileSection
        title="Location"
        name="location"
        value={profile.location}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Interests */}
      <ProfileSection
        title="Interests"
        name="interests"
        value={profile.interests}
        isEditing={isEditing}
        onChange={handleChange}
      />

      {/* Buttons */}
      <div className="mt-7 mb-4 flex justify-center gap-4">
        <button
          onClick={handleEditToggle}
          className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition cursor-pointer"
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-black cursor-pointer transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

// Reusable Profile Section
const ProfileSection = ({ title, name, value, isEditing, onChange }) => (
  <div className="mt-6">
    <h3 className="text-xl font-semibold text-pink-500">{title}</h3>
    {isEditing ? (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="border p-3 rounded-lg w-full mb-2"
      />
    ) : (
      <p className="text-gray-600">{value}</p>
    )}
  </div>
);

export default Profile;