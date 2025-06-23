import { Facebook, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: <Facebook size={28} />,
      link: "https://www.facebook.com/sandesh.rimal.73",
    },
    {
      icon: <Linkedin size={28} />,
      link: "https://www.linkedin.com/in/sandesh-rimal/",
    },
    {
      icon: <Github size={28} />,
      link: "https://github.com/sandesh101",
    },
  ];

  return (
    <section
      className="mt-20 sm:mt-40 px-4 sm:px-6 lg:mx-[13%] py-10 border border-[#323232]"
      id="contact"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Let's work together
      </h1>

      {/* Email Text */}
      <h2 className="mt-6 sm:mt-10 text-lg sm:text-2xl font-medium text-center">
        Curious about a project together? Reach out via{" "}
        <a href="mailto:rimal.sandesh11@gmail.com">
          <span className="text-[#3A86FF] underline cursor-pointer hover:text-[#3d43ff]">
            email!
          </span>
        </a>
      </h2>

      {/* Divider */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5">
        <hr className="bg-white w-[30%] sm:w-[5%] h-[1px]" />
        <p className="text-sm sm:text-base">or</p>
        <hr className="bg-white w-[30%] sm:w-[5%] h-[1px]" />
      </div>

      {/* Social Icons */}
      <div className="mt-6 sm:mt-10 flex justify-center items-center gap-5">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-[#3A86FF22] rounded-full transition"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
