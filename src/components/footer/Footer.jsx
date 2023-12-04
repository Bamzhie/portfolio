import { Link } from "react-router-dom";
import { contacts } from "../../data";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

const ListOfContacts = ({ link }) => {
  return (
    <div>
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        smooth
        className=""
      >
        <SocialIcon
          url={link}
          fgColor="#fff"
          bgColor="#000000"
          style={{ height: 35, width: 35 }}
        />
      </Link>
    </div>
  );
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black text-white flex footer-container items-center justify-center pl-10"
    >
      <div className="py-5 56:flex 56:gap-32">
        <div className="mr-40">
          <h3 className="mb-2 font-bold">SHEU AHMAD</h3>
          <p>Contact me today and let&#39;s build amazing things together</p>
        </div>

        <div className="flex 56:hidden items-center justify-center">
          <div className="w-80 rounded-full mt-6 mb-4 h-px bg-slate-600"></div>
        </div>

        <div className="flex mt-4 gap-4">
          <h3 className="font-bold mt-1">SOCIAL</h3>
          <div className="flex gap-5">
            {contacts.map((e, i) => (
              <ListOfContacts link={e.link} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
