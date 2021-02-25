<template>
  <header>
    <div class="row top-head">
      <div class="col-md-6">
        <div class="logo">
          <a href="#">
            <img src="@/assets/img/logo.png" alt="Logo" />
          </a>
        </div>
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <div class="social-share text-right">
          <a
            href="https://twitter.com/tenisBetEs"
            target="_blank"
            rel="nofollow"
            class="ic twitter anim-twitter"
          ></a>
          <a
            href="https://www.facebook.com/TenisBet-2447146632181732/"
            target="_blank"
            rel="nofollow"
            class="ic facebook anim-facebook"
          ></a>
          <a
            href="#"
            target="_blank"
            rel="nofollow"
            class="ic instagram anim-instagram"
          ></a>
          <a
            href="https://t.me/tenis_Bet_Es"
            target="_blank"
            rel="nofollow"
            class="ic telegram anim-twitter"
          ></a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/torneos/atp" class="nav-link"
                  >Torneos</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/ranking/atp" class="nav-link"
                  >Ranking</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
