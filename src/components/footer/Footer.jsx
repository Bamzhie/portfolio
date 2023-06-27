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
          style={{ height: 35, width: 35 }}
        />
        <a
          className="text-white text-lg cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        ></a>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black text-white flex footer-container items-center justify-center xs:pl-6"
    >
      <div className="flex justify-center items-center 80:gap-96 80:justify-center 80:items-center 80:px-20 p-2 xs:flex-col xs:items-start xxxl:flex-row xxxl:gap-20 mb-20 64:justify-center 64:items-center 64:gap-80 xxxl:justify-center xxxl:items-center 160:gap-96 160:justify-between 160:items-baseline 160:px-96">
        <div className="160:ml-28">
          <h3 className="mb-2 font-bold">SHEU AHMAD</h3>
          <p>Hire me today and let&#39;s build amazing things together</p>
        </div>

        <div className="p-2 m-2">
          <h3 className="text-center font-bold mb-2 xs:text-left xs:mt-10 text-white">
            SOCIAL
          </h3>
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
