import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by  JEEVA</h4>
      <h4>Copyright &copy; 2023 JS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/JeevaS43" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/jeeva-s-039a11226/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:jeevasofficial43@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer