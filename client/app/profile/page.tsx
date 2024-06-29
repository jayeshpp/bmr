"use client";
import withAuth from "@/hoc/withAuth";
import Image from "next/image";
import { ProfileCard } from "./ProfileCard";
import userAPI from "@/api/user";
import { useEffect, useState } from "react";

import { IProfileResponse } from "@/interfaces/user.interface";
import { ProfileInfo } from "./ProfileInfo";

function Profile({ userId, fullName }: any) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfileResponse | null>(null);

  const fetchProfileByUserId = async (userId: string) => {
    try {
      const response: IProfileResponse =
        await userAPI.getProfileByUserId(userId);

      if (response) {
        setProfile(response);
      }
    } catch (error) {
      console.error("Failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileByUserId(userId);
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  return (
    <section>
      <div className="bg-gray-100 h-[200px] -m-5">
        <Image
          src={`/assets/images/profile-cover.jpg`}
          width={500}
          height={300}
          priority
          alt={"profile cover"}
          className="object-cover h-[200px]"
        />
      </div>
      <div className="bg-white -mt-4 relative rounded-md p-4">
        <ProfileCard fullName={fullName} />
        <hr className="my-5" />
        <ProfileInfo profile={profile} />
      </div>
    </section>
  );
}

export default withAuth(Profile);
