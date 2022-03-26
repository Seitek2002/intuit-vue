<script setup></script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header> -->
  <header class="header">
    <div class="container">
      <div class="header__content">
        <RouterLink to="/">
          <img src="../assets/img/logo.svg" alt="" class="header__logo" />
        </RouterLink>
        <nav>
          <ul class="header__list">
            <li class="header__item">Меню сайта</li>
            <li class="header__item">
              <RouterLink to="/enrollee">Абитуриентам</RouterLink>
            </li>
            <li class="header__item"><a href="#contacts">Контакты</a></li>
            <li class="header__item">
              <RouterLink to="s/faculty">Институты</RouterLink>
            </li>
            <li class="header__item">Колледж</li>
            <li class="header__item">Бакалавриат</li>
            <li class="header__item">Магистратура</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style></style>
