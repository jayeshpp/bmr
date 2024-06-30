"use client";
import withAuth from "@/hoc/withAuth";
import Image from "next/image";
import { useEffect, useState } from "react";

import { IProfileResponse } from "@/interfaces/user.interface";
import API from "@/api";
import { PersonalInfoView } from "./components/PersonalInfoView";
import { ProfileView } from "./ProfileView";
import { SocialMediaView } from "./components/SocialMediaView";
import { Div } from "@/components/Div";
import { toast } from "react-toastify";
import { PageLoading } from "@/components/PageLoading";

function Profile({ userId, fullName }: any) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<IProfileResponse | null>(null);

  const fetchProfileByUserId = async (userId: string) => {
    try {
      const response: IProfileResponse =
        await API.user.getProfileByUserId(userId);

      if (response) {
        setProfile(response);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileByUserId(userId);
  }, [userId]);

  if (loading) return <PageLoading />;

  return (
    <section className="pt-[200px]">
      <div className="h-[200px] w-screen absolute left-0 top-[50px] bg-secondary-light">
        <Image
          src={`/assets/images/profile-cover.jpg`}
          width={500}
          height={300}
          priority
          alt={"profile cover"}
          className="object-cover h-[200px] m-auto w-full"
        />
      </div>
      <Div className="px-4">
        <Div className="bg-white dark:bg-secondary-light -mt-8 relative rounded-md p-4 pt-8">
          <PersonalInfoView
            personalInfo={profile?.personalInfo}
            fullName={fullName}
          />
          <SocialMediaView {...profile?.socialMedia} />
          <Div className="h-20 flex items-center justify-center">
            <hr className="w-10" />
          </Div>
          <Div className="px-4">
            <ProfileView profile={profile} />
          </Div>
        </Div>
      </Div>
    </section>
  );
}

export default withAuth(Profile);
