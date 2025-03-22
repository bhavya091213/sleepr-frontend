import { Link } from "react-router";
import {
  MoonIcon,
  PencilSquareIcon,
  NumberedListIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "journaling",
    description:
      "write about your sleep and your day. get insights into your sleep patterns, mood, stress levels, and more!",
    icon: PencilSquareIcon,
  },
  {
    name: "sleep tracking",
    description:
      "track your sleep with our intuitive sleep tracking feature. get personalized weekly reports about your hours and patterns!",
    icon: MoonIcon,
  },
  {
    name: "feedback",
    description:
      "provide feedback on our reccomendations to further help us guide you to the lifestyle you deserve!",
    icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    name: "AI activity reccomendations",
    description:
      "let our AI assisted tool suggest activities to help you reduce stress and improve mood and sleep quality!",
    icon: NumberedListIcon,
  },
];

export const Home = () => {
  return (
    <>
      <div className="relative isolate bg-gradient-to-r from-darkest to-quinary px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-secondary to-tertiary opacity-20"
          />
        </div>
        {/* Hero Page */}
        <div className="">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="mx-auto max-w-2xl pb-24  pt-10 h-[50%]">
              <div className=" flex flex-col text-center justify-center items-center">
                <h1 className="lg:text-9xl font-extrabold tracking-tight text-balance text-primary xs:text-7xl">
                  sleepr
                </h1>
                <p className="mt-8 text-lg font-medium text-semibold text-secondary sm:text-xl/8">
                  AI assisted sleep tracking. The best way to sleep.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    to="/signup"
                    className="rounded-md bg-tertiary px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondary hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/roadmap"
                    className="text-sm/6 font-semibold text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the homepage */}
        {/* screenshot */}
        <div className=" ">
          <div className=" flex justify-center items-center">
            <div className="mx-auto  aspect-video">
              <div className="bg-darkerQuinary rounded-3xl aspect-video flex flex-col justify-center items-center">
                <div className=" p-[0.5rem] w-[99%] h-[100%]  ">
                  <img src="/image.png" className="rounded-2xl aspect-video " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature list (2 x 2) */}
        <div className=" py-12 pb-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-tertiary">
                more sleep, more peace
              </h2>
              <p className="mt-2 lg:text-8xl font-semibold tracking-tight text-pretty text-primary md:text-2xl xs:text-5xl lg:text-balance">
                boost your mood, lower your stress
              </p>
              <p className="mt-6 text-lg/8 text-tertiary">
                break free from harmful habits. utilize our core features to
                help you track, analyze, and improve your lifestyle and sleep
                habits.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base/7 font-semibold text-primary">
                      <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-darkest">
                        <feature.icon
                          aria-hidden="true"
                          className="size-6 text-white"
                        />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base/7 text-tertiary">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        {/* Contact us section */}
      </div>
    </>
  );
};
