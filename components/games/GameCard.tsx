import { ButtonColor, ButtonLink } from "../Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { GameCardProps } from "./types";
import { FunctionComponent } from "react";

const epochToHours = (epoch: number) =>
  Math.floor((Date.now() * 0.001 - epoch) / 3600);

export const GameCard: FunctionComponent<GameCardProps> = ({
  title,
  source,
  url,
  created_utc,
  reddit_url,
  img,
}) => {
  const hoursAgo = epochToHours(created_utc);
  const imageUrl = img ? img : `https://placehold.co/40?text=${source}`
  return (
    <div className="flex bg-white my-4 mx-2 sm:mx-auto items-start max-w-3xl rounded-xl border">
      <img className="h-48 w-48 rounded-tl-xl rounded-bl-xl" src={imageUrl} />
      <div className="h-48 w-full p-8 flex flex-col justify-evenly">
        <div className="flex justify-between">
          <span className="font-bold text-lg">{title}</span>
          <span className="uppercase text-xs font-semibold text-slate-500 tracking-widest">
            {hoursAgo > 1 ? `${hoursAgo} hours ago` : "< 1 hour ago"}
          </span>
        </div>
        <span>
          <FontAwesomeIcon
            size="xl"
            className="text-yellow-500 mr-2"
            icon={faGamepad}
          />
          <span className="text-sm text-slate-500">{source}</span>
        </span>
        <div className="flex">
          <ButtonLink
            href={url}
            color={ButtonColor.TEAL}
            className="w-full mr-2"
          >
            Get This Game
          </ButtonLink>
          <ButtonLink
            href={`https://reddit.com/${reddit_url}`}
            color={ButtonColor.INDIGO}
            className="w-full"
          >
            View Post
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
