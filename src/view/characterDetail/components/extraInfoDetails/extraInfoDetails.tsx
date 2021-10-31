import { useEffect, useState } from "react";
import { getExtraInfo } from "../../../../api/characters";

type ExtraInfoDetailProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

type itemProps = {
  resourceURI: string;
};

export default function ExtraInfoDetail({ resourceURI }: itemProps) {
  const [extraInfoDetail, setExtraInfoDetail] =
    useState<ExtraInfoDetailProps>();

  useEffect(() => {
    getComics();
  });

  async function getComics() {
    const response = await getExtraInfo(resourceURI);
    const { id, description, thumbnail, title } = response;
    const newData = { title, description, thumbnail, id };
    setExtraInfoDetail(newData);
    return newData;
  }

  return (
    <div id="ExtraInfoDetail-page">
      <div className="container"></div>
      <span>{extraInfoDetail?.title}</span>
    </div>
  );
}
