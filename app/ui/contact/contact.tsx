import Connect from "./connect/connect";
import ContactDetails from "./contact-details/contactDetails";
import Profiles from "./profiles";

export default function Contact() {
  return (
    <section id="contact" className=" bg-gray-700 mt-10 py-5">
      <div className="flex flex-wrap lg:flex-nowrap gap-y-8">
        <ContactDetails />
        <Profiles />
        <Connect />
      </div>
    </section>
  );
}
