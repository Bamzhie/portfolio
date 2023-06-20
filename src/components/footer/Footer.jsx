import { contacts } from "../../data";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

const ListOfContacts = ({ site, link }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <SocialIcon
          url={link}
          fgColor="#fff"
          bgColor="#000000"
          style={{ height: 25, width: 25 }}
        />
        <a
          className="text-white text-lg cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          {site}
        </a>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white flex  items-center">
      <div className="flex space-x-5 items-center gap-52 p-2">
        <div className="ml-8">
          <h3 className="mb-2">SHEU AHMAD</h3>
          <p>Hire me today and let&#39;s build amazing things together</p>
        </div>

        <div className="p-2 m-2">
          <h3 className="text-center mb-2 text-white">Contact Me...</h3>
          <div className="flex justify-center text-center flex-wrap gap-2">
            {contacts.map((e, i) => (
              <ListOfContacts link={e.link} site={e.site} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
