import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import BannerSection from "@/components/ui/banner-section";
import MoreDetailsButton from "@/components/ui/more-details-button";
import WishlistButton from "@/components/ui/wishlist-button";
import { FreeGameType } from "./types";

export default function FreeGamesCard(data: FreeGameType) {
  const TitleSection = () => (
    <>
      <h2 className="w-full sm:w-2/3">{data.title}</h2>
      <div className="flex flex-col text-base lg:text-right">
        <div className="space-x-2">
          <span className="line-through opacity-70">${data.worth}</span>
          <span className="text-xl">Free!</span>
        </div>
      </div>
    </>
  );

  const DescriptionSection = () => (
    <>
      <div>
        <p>Type: {data.type}</p>
        <p>Platforms: {data.platforms}</p>
      </div>
      <div className="lg:text-right">
        <p>Started: {data.published_date}</p>
        <p>Ends: {data.end_date}</p>
      </div>
    </>
  );

  const GiveawayButton = () => (
    <Button
      asChild
      className="w-full bg-muted-foreground hover:bg-background hover:text-foreground"
    >
      <a
        href={data.open_giveaway_url}
        target="_blank"
        rel="noopener noreferrer external"
      >
        Get Giveaway
        <ExternalLink />
      </a>
    </Button>
  );

  return (
    <Card className="flex flex-col justify-between rounded-xl border-0 bg-gradient-to-t from-muted">
      <CardHeader>
        <BannerSection src={data.image} alt={data.title} />
        <CardTitle className="flex flex-col justify-between gap-2 opacity-90 sm:flex-row">
          <TitleSection />
        </CardTitle>
        <CardDescription className="flex flex-col justify-between gap-4 sm:flex-row">
          <DescriptionSection />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <GiveawayButton />
      </CardContent>
      <CardFooter className="flex-col justify-between gap-4 md:flex-row">
        <MoreDetailsButton path={"/free-games/"} id={data.id} />
        <WishlistButton title={data.title} />
      </CardFooter>
    </Card>
  );
}
