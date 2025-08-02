import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

const Radio: FC = () => {
  const query = async () =>
    await fetch(
      "https://de1.api.radio-browser.info/json/stations/topvote/1",
    ).then((response) => response.json());

  const topRadioQuery = useQuery({
    queryKey: ["topRadio"],
    queryFn: query,
  });

  console.log(topRadioQuery.data);

  if (!topRadioQuery.isFetched) return null;
  return (
    <div className="rounded-sm m-4 p-4 grid place-content-center gap-4">
      <div className="flex items-center gap-4">
        <img
          src={topRadioQuery.data[0].favicon}
          alt=""
          role="presentation"
          width={32}
        />
        {topRadioQuery.data[0].name}
      </div>
      <audio src={topRadioQuery.data[0].url_resolved} controls></audio>
    </div>
  );
};

export default Radio;
