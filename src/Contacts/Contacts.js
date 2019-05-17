import React from "react";
import "./Contacts.css";

function Contacts() {
  return (
    <div className="Contacts">
      <header>
        <h1>Контакты</h1>
      </header>
      <section id="content">
        <article>
          <p>E-mail: fortuna-trevel-kg@gmail.com</p>
          <p>WhatsApp: +996557220720</p>
          <p>Telegram: +996557220720</p>
          <p>Instagram: @fortuna-trevel-kg</p>
          <p>Facebook: FOROTUNA Trevel</p>
        </article>
      </section>
      <section id="content-input">
        <input type="number" max="30" size="20" placeholder="сколько людей" />
        <input list="tours" size="20" placeholder="куда" />
        <input type="tel" size="20" placeholder="номер телефона WhatsApp" />
        <input type="text" size="20" placeholder="имя" />
        <input type="text" size="20" placeholder="gmail adress" />
        <datalist id="tours">
          <option>Григорьевское ущелье</option>
          <option> Семеновское ущелье</option>
          <option>Ущелье Джеты-Огуз</option>
          <option>Ущелье Сказка</option>
          <option>Соленое озеро</option>
          <option>Горячий Источникые</option>
          <option>Культурный центр Рух Ордо</option>
          <option>Музей Прeжевальского</option>
          <option>Ущелье Барскаун</option>
          <option>Дайвинг на Иссык-Куле</option>
          <option>Рыбалка на Иссык-Куле</option>
          <option>Морские прогулки на Иссык-Куле</option>
        </datalist>
        <h1>0 СОМ</h1>
      </section>
      <footer />
    </div>
  );
}

export default Contacts;
