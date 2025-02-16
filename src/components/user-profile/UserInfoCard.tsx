"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ProfileData {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  position: string;
  country: string;
  state: string;
  postalcode: string;
  taxid: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

export default function UserInfoAndAddressCard() {
  const [profileData, setProfileData] = useState<ProfileData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching profile data..."); // Debugging line
    axios
      .get<ProfileData[]>("http://127.0.0.1:8000/api/profiles/") // Fetch array of profiles
      .then((response) => {
        console.log("Profile data fetched:", response.data); // Debugging line
        setProfileData(response.data); // Set the fetched data to the state
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the profile data!", error);
        setError("Failed to fetch profile data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profileData || profileData.length === 0) {
    return <div>No profile data found.</div>;
  }

  const profile = profileData[0]; // Access the first profile from the array

  return (
    <>
      {/* Personal Information Card */}
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  First Name
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.firstname}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Last Name
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.lastname}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Email address
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.email}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.phone}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Position
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Address Information Card */}
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Address
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Country
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.country}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  City/State
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.state}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Postal Code
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.postalcode}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  TAX ID
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {profile.taxid}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
