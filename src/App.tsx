import LinkCard from "./components/LinkCard"


function App() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 font-manrope text-foreground">
      <section className="mx-auto flex max-w-md flex-col items-center w-full">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="mt-6 text-3xl font-bold text-forestgreen sm:text-4xl">Aidan Younathan</h1>
            <p className="mt-2 text-base font-semibold sm:text-lg">Software Engineer Associate · DigitalNEST</p>
            <p className="mt-1 flex items-center gap-1 text-sm text-foreground/70"> <span className="aria-hidden">📍</span> Modesto, CA</p>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-col gap-3">
          <LinkCard
            href="https://github.com/aidanyounathan"
            title="My Github"
            subtitle="github.com/aidanyounathan"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            }
          />
        </div>
      </section>
    </main>
  )
}

export default App
