import { ButtonColor, ButtonLink } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const data = JSON.parse(
  '{"title": "Evan\'s Remains", "source": "GX.games", "url": "https://gx.games/games/1r8ojb/evan-s-remains/", "created_utc": 1675356201.0, "reddit_url": "/r/GameDeals/comments/10rubxv/gxgames_evans_remains_free100_off/", "img": "https://external-preview.redd.it/Zv0N_R6Qx04cP5noSOMU41n8ZhUws_0pwRV6U-WelxM.jpg?auto=webp&v=enabled&s=438726b99d2f86cfb095449529cb20bfc9fb8cd8"}'
);

type GameCardProps = {
    title: string;
    source: string;
    url: string;
    created_utc: number;
    reddit_url: string;
    img: string | null;
}

const epochToHours = (epoch: number) =>
  Math.floor((Date.now() * 0.001 - epoch) / 3600);

export const GameCard = () => {
  const hoursAgo = epochToHours(data.created_utc);
  return (
    <div className="flex mx-2 sm:mx-auto items-start max-w-3xl rounded-xl border">
      <img className="h-48 w-48 rounded-tl-xl rounded-bl-xl" src={data.img} />
      <div className="h-48 w-full p-8 flex flex-col justify-evenly">
        <div className="flex justify-between">
          <span className="font-bold text-xl">{data.title}</span>
          <span className="uppercase text-sm font-semibold text-slate-500 tracking-widest">
            {hoursAgo > 1 ? `${hoursAgo} hours ago` : "< 1 hour ago"}
          </span>
        </div>
        <span>
          <FontAwesomeIcon
            size="xl"
            className="text-yellow-500 mr-2"
            icon={faGamepad}
          />
          <span className="text-sm text-slate-500">{data.source}</span>
        </span>
        <div className="flex">
          <ButtonLink
            href={data.url}
            color={ButtonColor.TEAL}
            className="w-full mr-2"
          >
            Get This Game
          </ButtonLink>
          <ButtonLink
            href={`https://reddit.com/${data.reddit_url}`}
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
