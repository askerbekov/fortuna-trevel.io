import React, { Component } from "react";
import "./Contacts.css";
import axios from "../axios";

class Contacts extends Component {
  state = {
    tours: [],
    tourPrice: 0
  };
  componentDidMount() {
    axios.get("tours.json").then(response => {
      this.setState({ tours05: response.data });
      // console.log(response.data);
    });
  }

  check = event => {
    console.log(event.target);
  };

  render() {
    let tours = [];

    for (let id in this.state.tours05) {
      tours.push({ id, ...this.state.tours05[id] });
    }

    let toursList = tours.map(tour => (
      // <Article key={article.id} {...article} />
      <option>{tour.place}</option>
    ));
    // console.log(this.state.tours05, tours, toursList);
    console.log(toursList);
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
          <input
            list="tours"
            size="20"
            placeholder="куда"
            onFocus={this.check}
          />
          <input type="tel" size="20" placeholder="номер телефона WhatsApp" />
          <input type="text" size="20" placeholder="имя" />
          <input type="text" size="20" placeholder="gmail adress" />
          <datalist id="tours">({toursList})</datalist>
          <h1> {this.state.tourPrice} c </h1>
        </section>
        <footer />
      </div>
    );
  }
}

export default Contacts;
