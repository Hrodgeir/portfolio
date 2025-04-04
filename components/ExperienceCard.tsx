"use client";

import Image from "next/image";

interface Props {
  companyLogo: string;
  jobTitle: string;
  jobDescription: string;
  timeframe: string;
  bulletList: string[];
}

const ExperienceCard: React.FunctionComponent<Props> = ({
  companyLogo,
  jobTitle,
  jobDescription,
  timeframe,
  bulletList,
}: Props) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-gradient-to-b from-cyan-500 to-cyan-950 p-6 pt-6 text-white transition duration-1000 hover:from-cyan-950 hover:to-cyan-500 md:flex-row">
      <Image
        className="brightness-0 invert filter"
        src={companyLogo}
        alt="Company Logo"
        width={200}
        height={200}
      />
      <div>
        <h3 className="text-xl font-semibold">{jobTitle}</h3>
        <p className="text-lg">{jobDescription}</p>
        <p className="mt-2 text-sm">{timeframe}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
          {bulletList.map((bullet) => {
            return <li key={bullet}>{bullet}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
