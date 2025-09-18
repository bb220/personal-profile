import Link from "next/link"

const Home = () => {
  // Replace with your actual name
  const name = "Brandon Bellero"

  // Replace with your actual social links
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/brandon-bellero/",
    },
    {
      name: "X",
      url: "https://x.com/brandonbellero",
    },
    {
      name: "GitHub",
      url: "https://github.com/bb220",
    },
  ]

  // Replace with your actual projects
  const projects = [
    {
      title: "CoachAI",
      description: "An agentic AI app that provides personalized fitness training.",
      url: "https://www.coachaiapp.info/",
    },
    {
      title: "My Easy Golf Scorecard",
      description: "A simple scorecard app that eliminates distractions so you can enjoy your round.",
      url: "https://myeasygolfscorecard.com/",
    },
    {
      title: "The Verrazzano is Cool Too",
      description:
        "What started as a joke turned into an automated DTC brand inspired by New York City's most underrated bridge.",
      url: "https://www.theverrazzanoiscooltoo.com/",
    },
    {
      title: "Clean Calculator",
      description: "A calculator app for Chrome OS.",
      url: "https://chromewebstore.google.com/detail/clean-calculator-extensio/bmhlkhlncmgcdeicfehhpifjhgneenoc",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{name}</h1>

        <div className="mt-6 text-lg">
          <p className="text-muted-foreground">Dream &rarr; Build &rarr; Learn</p>
        </div>

        <div className="mt-10 w-full max-w-2xl">
          <h4 className="text-md font-semibold mb-6 text-left">Let's Connect</h4>
          <div className="flex flex-col gap-1 mb-12">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 text-sm transition-colors hover:bg-muted/10 text-left"
                style={{ color: "#0033FF" }}
                aria-label={link.name}
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <h4 className="text-md font-semibold mb-6 text-left">Things I've Built</h4>
          <div className="space-y-3 text-left">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 transition-colors hover:bg-muted/10"
              >
                <div className="text-sm">
                  <span className="font-medium" style={{ color: "#0033FF" }}>
                    {project.title}
                  </span>
                  <span className="mx-2 text-muted-foreground">—</span>
                  <span className="text-muted-foreground">{project.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
