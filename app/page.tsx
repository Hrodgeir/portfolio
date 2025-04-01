import Image from "next/image";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center sm:items-start">
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
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-900 hover:from-cyan-950 hover:to-cyan-500 transition duration-1000 bg-clip-text font-bold text-transparent">
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
        <div className="flex max-w-4xl px-6 py-4">
          I am a graduate of a Bachelor of Software Engineering degree from the
          University of Victoria. I specialize in creating intuitive, responsive
          web applications and thrive on delivering impactful user experiences.
        </div>
        <section className="py-4">
          <div className="mx-auto max-w-4xl px-6">
            <div className="space-y-8">
              <Carousel>
                <>
                  <div className="flex flex-col rounded-lg bg-gradient-to-b from-cyan-500 to-cyan-950 hover:from-cyan-950 hover:to-cyan-500 p-6 text-white transition duration-1000 md:flex-row">
                    <div className="mb-4 flex items-center md:mb-0 md:w-1/4">
                      <Image
                        className="brightness-0 invert filter"
                        src="evbg.svg"
                        alt="Company Logo"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="flex flex-col gap-4 md:w-3/4 md:pl-6">
                      <div>
                        <h3 className="text-xl font-semibold">
                          Sr. Software Engineer I
                        </h3>
                        <p className="text-lg">xMatters</p>
                        <p className="mt-2 text-sm">April 2022 - Present</p>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                          <li>
                            Handled frontend library upgrades and refactored
                            large scale, shared React components.
                          </li>
                          <li>
                            Created flowcharts for the team to manage owned
                            services such as delivery pipelines.
                          </li>
                          <li>
                            Performed code reviews for peers, assisting with
                            development questions and feedback.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          Software Engineer II
                        </h3>
                        <p className="text-lg">xMatters</p>
                        <p className="mt-2 text-sm">March 2021 - April 2022</p>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                          <li>
                            Developed various features for the xMatters web
                            application that allows customers to perform digital
                            operations centered around alert notifications and
                            incident management.
                          </li>
                          <li>
                            Fostered expertise with React, JavaScript, and SCSS
                            to create modern UI features.
                          </li>
                          <li>
                            Presented new features to stakeholders on a weekly
                            basis.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-lg bg-gradient-to-b from-cyan-500 to-cyan-950 hover:from-cyan-950 hover:to-cyan-500 p-6 text-white transition duration-1000 md:flex-row">
                    <div className="mb-4 flex items-center md:mb-0 md:w-1/4">
                      <Image
                        className="brightness-0 invert filter"
                        src="vertigis.svg"
                        alt="Company Logo"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="md:w-3/4 md:pl-6">
                      <h3 className="text-xl font-semibold">
                        Software Developer
                      </h3>
                      <p className="text-lg">Professional Services</p>
                      <p className="mt-2 text-sm">April 2018 to March 2021</p>
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                        <li>
                          Developed more than 20 custom web mapping applications
                          using both the ArcGIS JavaScript API, and ArcGIS .NET
                          Runtime for clients that involved requirements
                          analysis, design, iterative development, product
                          demonstrations, documentation, and software delivery.
                        </li>
                        <li>
                          Developed custom UI components using TypeScript and
                          React, and integrated complex geometry editing into
                          the Geocortex Mobile product.
                        </li>
                        <li>
                          Lead 4 projects as the technical lead to ensure
                          successful, in-budget deliveries.
                        </li>
                        <li>
                          Delivered 4 client-specific cross-platform mobile
                          mapping applications for Windows, Android, and iOS
                          using the Xamarin framework and ArcGIS .NET Runtime.
                        </li>
                        <li>
                          Created more than 50 detailed quotes for clients based
                          on technical knowledge and experience, each having an
                          average of 95% success rate for staying within budget.
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              </Carousel>
            </div>
          </div>
        </section>
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
