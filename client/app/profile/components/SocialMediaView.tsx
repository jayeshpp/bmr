import { Div } from "@/components/Div";
import Image from "next/image";
import Link from "next/link";

export const SocialMediaView = ({
  instagramId,
  facebookId,
  youtubeLink,
}: any) => {
  return (
    <Div className="flex gap-4 justify-center pt-3">
      {instagramId && (
        <Link href={`https://instagram.com/${instagramId}`} target="_blank">
          <Image
            src="/assets/icons/instagram.svg"
            alt="insta"
            width={30}
            height={30}
          />
        </Link>
      )}
      {facebookId && (
        <Link href={`https://facebook.com/${facebookId}`} target="_blank">
          <Image
            src="/assets/icons/facebook.svg"
            alt="fb"
            width={30}
            height={30}
          />
        </Link>
      )}
      {youtubeLink && (
        <Link href={`${youtubeLink}`} target="_blank">
          <Image
            src="/assets/icons/youtube.svg"
            alt="yt"
            width={30}
            height={30}
          />
        </Link>
      )}
    </Div>
  );
};
