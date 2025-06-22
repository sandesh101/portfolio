import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/sandesh.rimal.73",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/sandesh-rimal/",
    },
    {
      icon: <Github />,
      link: "https://github.com/sandesh101",
    },
  ];
  return (
    <section
      className="mt-60 mx-[13%] p-10 border border-[#323232]"
      id="contact"
    >
      <h1 className="text-4xl font-bold text-center">Let's work together</h1>
      <h1 className="mt-10 text-2xl font-medium text-center">
        Curious about a project together? Reach out via{" "}
        <a href="mailto: rimal.sandesh11@gmail.com">
          <span className="text-[#3A86FF] underline cursor-pointer hover:text-[#3d43ff]">
            email!
          </span>
        </a>
      </h1>
      <div className="mt-10 flex w-full items-center justify-center gap-5">
        <hr className="bg-white w-[5%] " />
        <p>or</p>
        <hr className="bg-white w-[5%] " />
      </div>
      <div className="mt-10 flex w-full justify-center items-center">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-2"
          >
            {contact.icon}
          </a>
        ))}
        {contacts.map((contact) => (
          <a href={contact.facebook}></a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
