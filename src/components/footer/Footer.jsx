import { contacts } from "../../data";
import "./footer.css";
import { SocialIcon } from "react-social-icons";

const ListOfContacts = ({ site, link }) => {
  return (
    <div className="">
      <SocialIcon
        url={link}
        fgColor="#fff"
        bgColor="#000000"
        style={{ height: 35, width: 35 }}
      />
      <a
        className=" cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      ></a>
    </div>
  );
};

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-black text-white flex footer-container items-center justify-center pl-6"
    >
      <div className="py-5 80:gap-96 80:justify-center 80:items-center 80:px-20 4:justify-center 64:items-center 64:p-5 64:gap-80 160:gap-96 160:justify-between 160:items-baseline 160:px-96">
        <div className="">
          <h3 className="mb-2 font-bold">SHEU AHMAD</h3>
          <p>Contact me today and let&#39;s build amazing things together</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-80 rounded-full mt-6 mb-4 h-px bg-slate-600"></div>
        </div>

        <div className="flex mt-4">
          <h3 className="font-bold mt-1">SOCIAL</h3>
          <div className="flex gap-2">
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
// flex justify-center items-center 80:gap-96 80:justify-center 80:items-center 80:px-20 p-2 xs:flex-col xs:items-start xxxl:flex-row xxxl:gap-20 mb-20 64:justify-center 64:items-center 64:gap-80 xxxl:justify-center xxxl:items-center 160:gap-96 160:justify-between 160:items-baseline 160:px-96

// text-center font-bold mb-2 xs:text-left xs:mt-10 text-white

// flex justify-center text-center flex-wrap gap-2
