import {
  FaBrandsInstagram,
  FaBrandsLinkedin,
  FaBrandsGithub,
} from "solid-icons/fa";

const Contact = () => {
  const handleSubmit = (event: Event) => {
    event.preventDefault();
  };

  return (
    <section class="pt-8 md:pt-16" id="contact">
      <h1 class="heading-1 mb-10 md:mb-16 text-center">Contact Me</h1>
      <div class="flex flex-col md:flex-row justify-between gap-5 md:gap-10">
        <div class="flex-1">
          <form onSubmit={handleSubmit} class="flex flex-col gap-5 md:gap-10">
            <input
              class="formInputs"
              type="text"
              name="FullName"
              placeholder="Name"
            />
            <input
              class="formInputs"
              type="text"
              name="Email"
              placeholder="Email"
            />
            <textarea
              class="formInputs"
              name="Message"
              placeholder="Message"
              rows={5}
            />
            <button class="button">Submit</button>
          </form>
        </div>
        <div class="flex-1 flex flex-col items-center gap-5 md:gap-10">
          <h1 class="heading-1">Wanna talk about tech?</h1>
          <h2 class="heading-2">Just follow along with these links</h2>
          <div class="flex gap-10">
            <a href="https://github.com/durwankurnaik" target="_blank">
              <FaBrandsGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/durwankur-naik-58301b203/"
              target="_blank"
            >
              <FaBrandsLinkedin size={35} />
            </a>
            <a href="https://www.instagram.com/durwankur_naik/" target="_blank">
              <FaBrandsInstagram size={35} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
