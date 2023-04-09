import YouTube, { YouTubeProps } from "react-youtube";

export default function Profile() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
  };

  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="mb-8 flex justify-center">
          <h2 className="text-center text-2xl font-semibold text-[#000000] lg:text-4xl">
            Profile Video
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <YouTube
            videoId="N-ed8jSRokU"
            opts={opts}
            onReady={onPlayerReady}
            className="h-[160px] w-[280px] md:h-[390px] md:w-[640px]"
          />
        </div>
      </div>
    </section>
  );
}
