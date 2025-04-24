interface Footer2Props {
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  copyright = "Can Öztürk ",
  bottomLinks = [
    { text: "Github", url: "https://github.com/forzzerino" },
    { text: "Linkedin", url: "https://www.linkedin.com/in/cnztrk/" },
  ],
}: Footer2Props) => {
  return (
    <section className="border-t border-dashed select-none text-xs md:text-base ">
      <footer className="">
        <div className="text-muted-foreground flex flex-row justify-between py-4 px-12 lg:px-24">
          <p>{copyright} &copy; 2025</p>
          <ul className="flex gap-4">
            {bottomLinks.map((link, linkIdx) => (
              <li key={linkIdx} className="underline hover:text-primary">
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  );
};

export { Footer2 };
