import FAQ from "./FAQ";

import "./FAQHolder.css";

function FAQHolder() {
  return (
    <div className="faq-holder">
      <div className="faq-col">
        <FAQ question={"What is HunterHacks?"}>
            HunterHacks is a 48~ hour Hackathon where beginner or experienced hackers can come together to ideate, design, and
            build projects over one exciting weekend. It is brought together by the CS Departments and CS USG clubs, and completely
            free of charge to attend.
        </FAQ>

        <FAQ question={"Is HunterHacks in-person?"}>
          <p>
            HunterHacks is a hybrid event with both virtual and in-person
            components. However, <strong>Sunday is mandatory in-person</strong>{" "}
            for judging and the closing ceremony.
          </p>
        </FAQ>

        <FAQ question={"Who can participate?"}>
          <p>
            Any currently enrolled <strong>Hunter student</strong> is eligible
            to participate, regardless of major or coding background.
          </p>
        </FAQ>

        <FAQ question={"How do I register?"}>
          <p>
            Unfortunately, we have met our capacity for this
            semester's hackathon, but we encourage you to still apply in the
            case that we put you on our waitlist.
          </p>
        </FAQ>

        <FAQ question={"Do I have to submit a project?"}>
          <p>
            Submitting a project is highly encouraged. You can
            attend workshops, network, and enjoy the experience without building
            something. Only submitted projects are eligible for prizes by the submission deadline.
          </p>
        </FAQ>

      </div>

      <div className="faq-col">

      <FAQ question={"What should I bring?"}>
          <ul>
            <li>Laptop</li>
            <li>Charger</li>
            <li>Headphones</li>
            <li>Notebook</li>
            <li>Pens</li>
            <li>Water Bottle</li>
            <li>Snacks</li>
            <li>
              Pre-installed Software (VS Code, GitHub Desktop, Figma, Zoom)
            </li>
            <li>A smile :)</li>
          </ul>
          <p>
            P.S. If you're unsure on how to install the software listed above,
            we will be having workshops all throughout Saturday, May 3 that will
            guide you through it! Attending workshops will also put you in for
            our mentioned raffles.
          </p>
        </FAQ>

        <FAQ question={"How many people in a team?"}>
          <p>
            Teams can be 2–4 people. You can sign up with a team or join solo
            and find others during our team formation activities after the
            Opening Ceremony. We’ll have icebreakers, team matching sessions, and
            mentors available to help you find teammates before hacking begins.
          </p>
        </FAQ>

        <FAQ question={"Can I volunteer or be a mentor?"}>
          <p>
            Yes! We're looking for grad students or experienced participants to
            help as mentors. Volunteers can support teams, help with logistics,
            and keep the event running smoothly. You can fill out{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9oJpoX_TkwfHqVm6X8xt2T0e0-dU4kKTUXLa_gbRBXJ0thw/viewform"
              target="_blank"
            >
              this form
            </a>{" "}
            to sign up to volunteer. We will reach out to you with more details.
          </p>
        </FAQ>
        <FAQ question={"Will there be food and swag?"}>
          <p>
            Absolutely! Expect meals, snacks, energy drinks, and exclusive
            merch. Raffles and prizes will also be available for participants
            who stick around through the weekend! Check the schedule for location and times.
          </p>
        </FAQ>

        <FAQ question={"Will there be workshops?"}>
          <p>
            Yes! Workshops run throughout the weekend, covering both technical
            and non-technical topics like coding, design (Figma),
            resume-building, and navigating workplace scenarios. Check the schedule for location and times.
          </p>
        </FAQ>
      </div>
      </div>
  );
}
export default FAQHolder;
