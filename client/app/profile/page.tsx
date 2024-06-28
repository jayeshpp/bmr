'use client';
import withAuth from '@/hoc/withAuth';
import Image from 'next/image';
import { ProfileCard } from './ProfileCard';
import userAPI from '@/api/user';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { IProfileResponse } from '@/interfaces/user.interface';
import { ProfileItem } from './ProfileItem';

interface IProfile {
  userId: string;
  fullName: string;
}

const Profile: React.FC<IProfile> = ({ userId, fullName }) => {
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
      console.error('Failed', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileByUserId(userId);
  }, [userId]);

  if (loading) return <div>Loading...</div>;

  const {
    profilePic,
    dob,
    contactNumber,
    emergencyNumber1,
    emergencyNumber2,
    whatsappNumber,
    relationshipStatus,
    bloodGroup,
    readyToDonateBlood,
    nativeInKerala,
    area,
    doorNumber,
    apartmentNameOrBuildingNumber,
    addressLine1,
    addressLine2,
    pinCode,
    nearestLandmark,
    organization,
    occupation,
    drivingLicenseNumber,
    drivingLicenseValidity,
    motorcycleMake,
    motorcycleModel,
    motorcycleRegistrationNumber,
    rearViewMirrors,
    ridingGears,
    ridingGroupMember,
    youtubeChannel,
    volunteerPreference,
  } = profile as IProfileResponse;

  const birthDay = format(dob, 'yyyy-MM-dd');
  const DLValidity = format(drivingLicenseValidity, 'yyyy-MM-dd');

  return (
    <section>
      <div className='bg-gray-100 h-[200px] -m-5'>
        <Image
          src={`/assets/images/profile-cover.jpg`}
          width={500}
          height={300}
          priority
          alt={'profile cover'}
          className='object-cover h-[200px]'
        />
      </div>
      <div className='bg-white -mt-4 relative rounded-md p-4'>
        <ProfileCard fullName={fullName} />
        <hr className='my-5' />
        <h2 className='text-xl font-semibold pt-5 pb-2'>Personal Information</h2>
        <ProfileItem title='Date of Birth' value={birthDay} />
        <ProfileItem title='Contact number' value={contactNumber} />
        <ProfileItem title='Emergency number 1' value={emergencyNumber1} />
        <ProfileItem title='Emergency number 2' value={emergencyNumber2} />
        <ProfileItem title='Whatsapp Number' value={whatsappNumber} />
        <ProfileItem title='Relationship Status' value={relationshipStatus} />
        <ProfileItem title='Blood Group' value={bloodGroup} />
        <ProfileItem title='Native in Kerala' value={nativeInKerala} />
        <ProfileItem title='Area' value={area} />
        <ProfileItem
          title='Address'
          value={[
            doorNumber,
            apartmentNameOrBuildingNumber,
            addressLine1,
            addressLine2,
            pinCode,
          ].join(', ')}
        />
        <ProfileItem title='Landmark' value={nearestLandmark} />
        <ProfileItem title='Organization' value={organization} />
        <ProfileItem title='Occupation' value={occupation} />
        
        <ProfileItem
          title='Ready to donate blood'
          value={readyToDonateBlood ? 'Yes' : 'No'}
        />
        <h2 className='text-xl font-semibold pt-5 pb-2'>Ride Information</h2>
        <ProfileItem title='DL number' value={drivingLicenseNumber} />
        <ProfileItem title='DL validity' value={DLValidity} />
        <ProfileItem title='Motorcycle make' value={motorcycleMake} />
        <ProfileItem title='Motorcycle model' value={motorcycleModel} />
        <ProfileItem
          title='Motorcycle registration'
          value={motorcycleRegistrationNumber}
        />
        <ProfileItem
          title='Rear view mirror'
          value={rearViewMirrors ? 'Yes' : 'No'}
        />
        <ProfileItem title='Riding gears' value={ridingGears.join(',')} />

        <h2 className='text-xl font-semibold pt-5 pb-2'>Other Information</h2>
        <ProfileItem
          title='Other riding group memebr'
          value={ridingGroupMember ? 'Yes' : 'No'}
        />
        <ProfileItem title='Youtube Channel' value={youtubeChannel} />
        <ProfileItem
          title='Valunteering preference'
          value={volunteerPreference}
        />
      </div>
    </section>
  );
};

export default withAuth(Profile);
