import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr className="w-9/10 flex mx-auto my-4" />
      <div className="flex justify-center items-center gap-5 mb-4">
        <a href="https://www.linkedin.com/in/atharvaghorpade/">
          <FaLinkedin size={"25px"} />
        </a>
        <a href="https://github.com/AtharvaGhorpade2405">
          <FaGithub size={"25px"} />
        </a>
      </div>
    </>
  );
}
export default Footer;
