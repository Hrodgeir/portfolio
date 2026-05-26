export default function Home() {
  return (
    <div className="text-[#23401d] dark:text-slate-400">
      <h2 className="mb-6 text-4xl font-bold text-[#5c7a3a] dark:text-slate-200">
        <span className="bold">About Me</span>
      </h2>

      <p className="mb-8 text-lg">
        Hello! I'm <span className="bold">Matt Hodgson</span>, a Senior Software
        Engineer based in Prince George, BC. I specialize in frontend architecture, 
        technical leadership, and crafting intuitive, responsive web applications 
        that deliver highly scalable user experiences.
      </p>
      <p className="mb-8 text-lg">
        With a Bachelor of Software Engineering from the University of Victoria,
        I bridge the gap between user interface design and enterprise backend systems, 
        ensuring client-side views seamlessly map to underlying MVC data models.
      </p>

      <h3 className="mt-10 mb-4 text-2xl font-semibold text-[#5c7a3a] dark:text-slate-200">
        <span className="bold">My Journey</span>
      </h3>
      <p className="mb-8 text-lg">
        Currently, I serve as a Senior Software Engineer at{" "}
        <span className="bold">Everbridge (xMatters Product Development)</span>, where 
        I lead frontend architectural modernizations, scale shared React component 
        libraries, and optimize CI/CD deployment pipelines. I also champion developer 
        excellence by facilitating engineering standards and mentoring cross-functional peers.
      </p>

      <p className="mb-8 text-lg">
        Before that, I delivered over 20 custom web mapping applications as a 
        Software Developer at <span className="bold">VertiGIS</span>. There, I owned full-lifecycle 
        enterprise deployments using Git version control, built cross-platform mobile apps 
        with Xamarin, and served as technical lead on high-impact client projects.
      </p>

      <h3 className="mt-10 mb-4 text-2xl font-semibold text-[#5c7a3a] dark:text-slate-200">
        <span className="bold">What Drives Me</span>
      </h3>
      <p className="mb-8 text-lg">
        I thrive on driving technical strategy, establishing robust frontend infrastructure, 
        and fostering collaborative, agile engineering cultures that value mentorship, 
        clean code architectures, and exceptional user experiences.
      </p>

      <p className="text-lg">
        When I'm not coding, you can find me spending time with my family,
        playing video games, watching movies, catching a hockey game, or camping in
        the beautiful outdoors of northern British Columbia.
      </p>
    </div>
  );
}