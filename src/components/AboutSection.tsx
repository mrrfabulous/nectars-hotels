import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-white to-secondary/50 py-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl translate-y-32 -translate-x-32"></div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-accent font-medium text-sm tracking-wide uppercase">
                <div className="w-8 h-px bg-accent"></div>
                <span>Discover Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Experience the
                <span className="block text-accent">Nectar Difference</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                {`Nestled in the heart of Bauchi, Nectar Hotels & Suites stands as
                your gateway to authentic Nigerian hospitality. We've crafted
                more than just accommodation—we've created a sanctuary where
                modern comfort meets traditional warmth.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-primary transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Our Story
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Est. in Bauchi</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Boutique Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/compound2.jpg"
                  alt="Nectar Hotels & Suites - Experience luxury and comfort"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-amber-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-600"
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

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-accent/80 rounded-full opacity-60"
                  ></div>
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
