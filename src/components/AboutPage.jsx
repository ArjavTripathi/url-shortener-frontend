import { FaLink, FaShareAlt, FaEdit, FaGithub } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";

const AboutPage = () => {
  const features = [
    {
      icon: <FaLink className="text-blue-500 text-2xl" />,
      title: "Simple URL Shortening",
      desc: "Paste any long link and get a clean, short URL in seconds. No setup required.",
    },
    {
      icon: <MdBarChart className="text-green-500 text-2xl" />,
      title: "Powerful Analytics",
      desc: "Track click counts and gain insight into your link performance over time.",
    },
    {
      icon: <FaShareAlt className="text-purple-500 text-2xl" />,
      title: "Easy Sharing",
      desc: "Share your shortened links anywhere — social media, emails, or messages.",
    },
    {
      icon: <FaEdit className="text-pink-500 text-2xl" />,
      title: "Secure & Safe",
      desc: "All links are monitored to ensure they are safe for you and your audience.",
    },
  ];

  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-screen bg-white text-slate-800 pt-10 pb-20">

      <h1 className="sm:text-4xl text-3xl font-bold italic mb-3">
        About <span className="text-blue-500">Linklytics</span>
      </h1>
      <p className="text-gray-600 text-sm mb-10 max-w-3xl leading-relaxed">
        Linklytics simplifies URL shortening for efficient sharing. Easily generate,
        manage, and track your shortened links.
      </p>

      <div className="space-y-8">
        {features.map((f) => (
          <div key={f.title} className="flex items-start gap-4">
            <div className="mt-1 shrink-0">{f.icon}</div>
            <div>
              <h2 className="font-bold text-xl text-slate-800 mb-1">{f.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      

    </div>
  );
};

export default AboutPage;