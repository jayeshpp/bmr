"use client";
import withAuth from "@/hoc/withAuth";
import Image from "next/image";
import { ProfileCard } from "./ProfileCard";
import { useEffect, useState } from "react";

import { IProfileResponse } from "@/interfaces/user.interface";
import { ProfileInfo } from "./ProfileInfo";
import API from "@/api";
import { PersonalInfoView } from "./components/PersonalInfoView";
import { ProfileView } from "./ProfileView";
import { SocialMediaView } from "./components/SocialMediaView";
import { Div } from "@/components/Div";

function Profile({ userId, fullName }: any) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfileResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  const fetchProfileByUserId = async (userId: string) => {
    try {
      const response: IProfileResponse =
        await API.user.getProfileByUserId(userId);

      if (response) {
        setProfile(response);
      }
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
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
        <PersonalInfoView personalInfo={profile?.personalInfo} fullName={fullName}/>
        <SocialMediaView {...profile?.socialMedia} />
        <Div className="h-20 flex items-center justify-center">
          <hr className="w-10"/>
        </Div>
        <ProfileView profile={profile} />
      </div>
    </section>
  );
}

export default withAuth(Profile);
