import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <div className="flex flex-col items-center gap-6 rounded-2xl p-7 md:flex-row md:gap-8">
          <div>
            <Image
              className="h-auto max-w-lg rounded-3xl grayscale filter transition-all duration-300 hover:grayscale-0"
              src="/me.png"
              alt="me"
              width={225}
              height={225}
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-12 md:items-start">
            <div>
              <div className="text-2xl font-medium">Matt Hodgson</div>
              <div className="font-bold text-green-500">Software Engineer</div>
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
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
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
      </footer>
    </div>
  );
}
