import Comment from "../../components/typography/Comment";

function Journey() {
  return (
    <div className="pb-8">
      <h2 className="font-customEyeCatcher text-custom-coral text-5xl">
        It all began with music.
      </h2>
      <div className="mt-3">
        <Comment text="// from rhythm to code, still the same craftsman mindset." />
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 mt-5">
        <div className="md:flex-1">
          <p className="font-customInter tracking-wide mt-5">
            I fell in love with music from a young age and wanted to pursue drums
            seriously. That led me to study music, where I learned what true
            craftsmanship means: giving your all to your craft every day. From age
            14 to 21, I gave my all and pursued drums as a career,
            performing with multiple bands and playing at bars. Somehow made it to the finals of a national drum competition too, which was pretty cool!
          </p>

          <p className="font-customInter tracking-wide mt-4">
            Then National Service happened, and I was introduced to
            finance/trading through friends. I got hooked and spent a lot of time
            refining trading strategies. That journey eventually led me to
            automated trading, which meant learning to code. I picked up Python to
            build trading tools, and quickly found coding genuinely fun.
          </p>

          <p className="font-customInter tracking-wide mt-4">
            When it came time to choose a degree, I decided on Software
            Engineering. I kept building side projects nonstop, from trading bots
            and strategy experiments to CRUD applications and web projects with
            HTML, CSS, and JavaScript.
          </p>

          <p className="font-customInter tracking-wide mt-4">
            Eventually, I landed an internship at Standard Chartered, and I’ll
            always be eternally grateful for the opportunity to kickstart my professional
            career. I was placed in the API Gateway team and learnt a bunch along the way, focusing on mastering the fundamentals and getting the basics right - something I picked up from music. The rest is history!
          </p>

        </div>

        <div className="md:w-80 md:mt-12 md:flex-shrink-0 rounded-xl overflow-hidden shadow-gray-900 shadow-lg h-96">
          <img
            src="/drums.JPG"
            alt="Playing drums"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Journey; 
