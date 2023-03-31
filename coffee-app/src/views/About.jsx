import "./About.css"
import Header from "../components/Header/Header";

function About() {

  return (

    <section className="about">
        <Header/>
        <section className="about__wrapper">

            <section className="about__header">
              <h1>Vårt kaffe</h1>
            </section>

            <section className="about__text">
              <p> Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
              <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
              <p> Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
            </section>

            <section className="about__founder">
              <img className="about__founder__image" src="" alt="" />
              <h3>Eva Cortado</h3>
              <p>VD & grundare</p>
            </section>

        </section>

    </section>

  )
}

export default About;