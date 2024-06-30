import { Div } from "@/components/Div";
import { PageHead } from "@/components/ui/PageHead";
import { Typography } from "@/components/ui/Typography";

export default function About() {
  return (
    <Div className="page-main">
      <PageHead title="About" />
      <Typography>
        BMRiders is a riding group of Malayalees in Bengaluru .We promote safe
        biking. Join Us and Explore the world with BMR!
      </Typography>
      <Typography>
        Bangalore Malayali Riders (BMR) is a biking community in Bangalore. It
        was founded in 2017 by a group of passionate bikers who wanted to create
        a platform for Malayali bikers to connect and ride together.
      </Typography>
      <Typography>
        BMR has over 600+ members and organizes a variety of rides, including
        breakfast rides, long rides, and overnight rides. The group also
        participates in various motorcycle events and rallies across the
        country.
      </Typography>
      <Typography>
        The group is known for its friendly and welcoming atmosphere and is open
        to anyone who loves to ride.{" "}
      </Typography>
      <Typography>
        BMR is more than just a biking community. It is a family where members
        support each other and look out for each other. The group is also
        actively involved in social causes and regularly organizes charity rides
        and blood donation camps.
      </Typography>
      <Typography>
        BMR is a great example of how a shared passion can bring people
        together. The group has created a strong sense of community among bikers
        in Bangalore and has provided them with a platform to connect and ride
        together.
      </Typography>
    </Div>
  );
}
