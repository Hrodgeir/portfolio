import Image from "next/image";
import Carousel from "../components/Carousel";
import ExperienceCard from "../components/ExperienceCard";

import "swiper/css";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center md:items-start">
        <div className="flex flex-col items-center gap-6 rounded-2xl p-7 md:flex-row md:gap-8">
          <div>
            <Image
              className="h-auto max-w-lg rounded-3xl"
              src="/me.png"
              alt="me"
              width={225}
              height={225}
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-8 md:items-start">
            <div>
              <div className="text-2xl font-medium">Matt Hodgson</div>
              <div className="animate-typing border-r-1 border-r-white bg-gradient-to-r from-cyan-500 to-cyan-900 bg-clip-text pr-2 font-bold whitespace-nowrap text-transparent transition duration-1000 hover:from-cyan-950 hover:to-cyan-500">
                Software Engineer
              </div>
            </div>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://www.google.com/maps/place/Prince+George,+BC/@53.9267856,-122.9172238,107493m/data=!3m2!1e3!4b1!4m6!3m5!1s0x538898f7ef590fe9:0x50135152a7b3050!8m2!3d53.9170641!4d-122.7496693!16zL20vMDFjMnds?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                className="dark:invert"
                src="/pin.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Prince George, BC, Canada
            </a>
          </div>
        </div>
        <div className="flex w-80 p-8 md:w-160 lg:w-220">
          I am a graduate of a Bachelor of Software Engineering degree from the
          University of Victoria. I specialize in creating intuitive, responsive
          web applications and thrive on delivering impactful user experiences.
        </div>
        <Carousel
          spaceBetween={30}
          slidesPerView={1}
          className="flex w-80 p-8 md:w-160 lg:w-220"
        >
          <ExperienceCard
            companyLogo={"evbg.svg"}
            jobTitle={"Sr. Software Engineer I"}
            jobDescription={"xMatters"}
            timeframe={"Apr 2022 - Present"}
            bulletList={[
              "Handled frontend library upgrades and refactored large scale, shared React components.",
              "Created flowcharts for the team to manage owned services such as delivery pipelines.",
              "Performed code reviews for peers, assisting with development questions and feedback.",
            ]}
          />
          <ExperienceCard
            companyLogo={"evbg.svg"}
            jobTitle={"Software Engineer II"}
            jobDescription={"xMatters"}
            timeframe={"Mar 2021 - Apr 2022"}
            bulletList={[
              "Developed various features for the xMatters web application that allows customers to perform digital operations centered around alert notifications and incident management.",
              "Fostered expertise with React, JavaScript, and SCSS to create modern UI features.",
              "Presented new features to stakeholders on a weekly basis.",
            ]}
          />
          <ExperienceCard
            companyLogo={"vertigis.svg"}
            jobTitle={"Software Developer"}
            jobDescription={"Professional Services"}
            timeframe={"Apr 2018 - Mar 2021"}
            bulletList={[
              "Developed more than 20 custom web mapping applications using both the ArcGIS JavaScript API, and ArcGIS .NET Runtime for clients that involved requirements analysis, design, iterative development, product demonstrations, documentation, and software delivery.",
              "Developed custom UI components using TypeScript and React, and integrated complex geometry editing into the Geocortex Mobile product.",
              "Lead 4 projects as the technical lead to ensure successful, in-budget deliveries.",
              "Delivered 4 client-specific cross-platform mobile mapping applications for Windows, Android, and iOS using the Xamarin framework and ArcGIS .NET Runtime.",
              "Created more than 50 detailed quotes for clients based on technical knowledge and experience, each having an average of 95% success rate for staying within budget.",
            ]}
          />
          <ExperienceCard
            companyLogo={"ism.svg"}
            jobTitle={"Software Developer Co-op"}
            jobDescription={"ISM Canada"}
            timeframe={"May 2016 - Dec 2016"}
            bulletList={[
              "Developed Windows Presentation Foundation applications for ISM Canada's IT Support staff that involved XAML, VB.NET, SQL, and C# in an AGILE development environment.",
              "Overhauled an existing application to have an intuitive user interface, more functionality, and an enhanced code structure improving work efficiency of users by 150%.",
              "Developed applications involving software automation and testing frameworks and created various test plans and user guides for multiple applications.",
              "Provided insight on design patterns and implementation of features and gathered complex requirements from users and converted such requirements into individual tasks.",
            ]}
          />
          <ExperienceCard
            companyLogo={"uvic.svg"}
            jobTitle={"Software Developer Co-op"}
            jobDescription={"UVIC Continuing Studies"}
            timeframe={"Jan 2015 - Aug 2015"}
            bulletList={[
              "Developed ASP.NET web applications for UVIC's Division of Continuing Studies student registration system that involved HTML, CSS, Angular, Razor MVC, and C# in an AGILE development environment.",
              "Developed a strong understanding of how a realistic software lifecycle works and how to communicate effectively with team members on a large variety of programming tasks.",
              "Provided input and ideas to help towards the development of the web applications.",
            ]}
          />
        </Carousel>
      </main>
      <footer className="row-start-3 flex flex-col flex-wrap items-center justify-center gap-[48px]">
        <div className="flex flex-row gap-[24px]">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/matt-hodgson-ba06b7b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="dark:invert"
              src="/linkedin.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/Hrodgeir"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              className="dark:invert"
              src="/github.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            GitHub
          </a>
        </div>
        <div className="flex flex-col items-center gap-3">
          <a
            className="flex items-center gap-1 text-xs hover:underline hover:underline-offset-4"
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <Image
              aria-hidden
              className="light:invert"
              src="/vercel.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Vercel
          </a>
          <div className="flex items-center gap-1 text-xs">
            <Image
              aria-hidden
              className="dark:invert"
              src="/copyright.svg"
              alt="Window icon"
              width={24}
              height={24}
            />
            2025 Matt Hodgson
          </div>
        </div>
      </footer>
    </div>
  );
}
