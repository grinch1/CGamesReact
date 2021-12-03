import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-datails">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://facebook.com/">
                <i class="fa fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/">
                <i class="fa fa-twitter-square"></i>
              </a>
              <a href="https://youtube.com/">
                <i class="fa fa-youtube-square"></i>
              </a>
              <a href="https://instagram.com/">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="https://google.com/">
                <i class="fa fa-google-plus"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Welcome, to <span className="highlighted-text">CryptoGames.fun</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "Sua Nova Aventura NFT 😎",
                  1000,
                  "Jogue A Qualquer Momento 💻",
                  1000,
                  "Acesse De Qualquer Lugar 📱",
                  1000,
                  "Ganhe E Transacione🔴",
                  1000,
                  "Be A Part Of This Future 🌐",
                  1000,
                ]}
              />
            </h1>
          </span>
          <span className="profile-role-tagline">
          A plataforma Cryptogames, esta chegando para revolucionar o universo play-to-earn de uma forma jamais vista antes. 
          </span>
        </div>
        <div className="profile-options">
            <button className="btn primary-btn"> Pre-Venda </button>
            <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">Promo-Code</button>
                </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
