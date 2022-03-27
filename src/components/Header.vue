<script setup></script>

<template>
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
              <RouterLink to="/faculty">Институты</RouterLink>
            </li>
            <!-- <li class="header__item">Колледж</li> -->
            <li class="header__item">
              <RouterLink to="/undergraduate">Бакалавриат</RouterLink> 
            </li>
            <li class="header__item">
              <RouterLink to="/postgraduate">Магистратура</RouterLink> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style></style>
