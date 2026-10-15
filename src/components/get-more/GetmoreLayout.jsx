const parseContent = (content) =>
  content.map((text) => {
    const trimmed = text.trim();
    return trimmed.startsWith("*")
      ? { type: "heading", text: trimmed.replace(/^\*\s*/, "") }
      : { type: "paragraph", text: trimmed };
  });

const GetmoreLayout = ({ backgroundImage, eyebrow, heading, tagline, content }) => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div
        className="relative w-full h-[420px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0">
          <div className="max-w-3xl mx-auto px-6 pb-10">
            {eyebrow && (
              <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-3">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold">{heading}</h1>
            {tagline && (
              <p className="text-xl md:text-2xl text-gray-300 mt-3">{tagline}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-6 pb-20">
        {parseContent(content).map((block, i) =>
          block.type === "heading" ? (
            <h3
              key={i}
              className="text-2xl font-bold mt-12 mb-4 pt-6 border-t border-white/15 first:mt-0 first:pt-0 first:border-t-0"
            >
              {block.text}
            </h3>
          ) : (
            <p key={i} className="text-lg leading-relaxed text-gray-300 mt-4">
              {block.text}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default GetmoreLayout;
