import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-white to-secondary/50 py-16">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-accent/5 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-medium uppercase tracking-wide text-accent">
                <div className="h-px w-8 bg-accent" />
                <span>Discover Our Story</span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl">
                Experience the
                <span className="block text-accent">Nectar Difference</span>
              </h2>
            </div>

            <div className="space-y-4 leading-relaxed text-gray-600">
              <p className="text-lg">
                {`Nestled in the heart of Bauchi, Nectar Hotels & Suites stands as
                your gateway to authentic Nigerian hospitality. We've crafted
                more than just accommodation - we've created a sanctuary where
                modern comfort meets traditional warmth.`}
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary hover:shadow-xl"
              >
                Explore Our Story
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Est. in Bauchi</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Boutique Experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="relative h-80 rotate-2 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:rotate-0 lg:h-96">
                <Image
                  src="/images/compound2.jpg"
                  alt="Nectar Hotels & Suites exterior view"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <svg
                      className="h-6 w-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Premium</div>
                    <div className="text-xs text-gray-500">Hospitality</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-accent/80 opacity-60"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
