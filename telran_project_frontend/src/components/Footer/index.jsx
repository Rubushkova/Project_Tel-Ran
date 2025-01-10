import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import s from "./index.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <h2>Contact</h2>

      <div className={s.contactContainer}>
        <div className={s.bigItem}>
          <span>Phone</span>
          <p>
            <a href="tel:+499999999999" className={s.phoneLink}>
              +49 999 999 99 99
            </a>
          </p>
        </div>

        <div className={s.smallItem}>
          <span>Socials</span>
          <div className={s.socials}>
            <a href="https://www.instagram.com">
              <BiLogoInstagramAlt alt="Instagram" className={s.icon} />
            </a>
            <a href="https://www.whatsapp.com">
              <IoLogoWhatsapp alt="WhatsApp" className={s.icon} />
            </a>
          </div>
        </div>
      </div>

      <div className={s.contactContainer}>
        <div className={s.bigItem}>
          <span>Address</span>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>

        <div className={s.smallItem}>
          <span>Working Hours</span>
          <p>24 hours a day</p>
        </div>
      </div>

      <div className={s.mapContainer}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.2045793849852!2d13.37414470082905!3d52.50793403780704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1732452227989!5m2!1sru!2sde"
      width="100%"
      height="350px"
      style={{ borderRadius: "12px", border: "none" }}
      allowfullscreen=""
      loading="lazy"
      title="Tel-Ran"
    ></iframe>
  </div>
    </footer>
  );
}

