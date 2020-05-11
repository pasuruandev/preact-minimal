const { Component } = window.preact;
import html from "../html.js";

const Boxi = (props) => html`
  <div
    class="p-3 inline-block bg-green-400 text-white mr-3 rounded-lg text-center"
  >
    <h1 class="text-2xl font-bold">${props.jumlah}</h1>

    ${props.title}
  </div>
`;

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      confirmed: 0,
      recovered: 0,
      death: 0,
    };

    this.getCovidData();
  }

  getCovidData = async () => {
    let getData = await fetch("https://covid19.mathdro.id/api");

    let getResponse = await getData.json();

    this.setState({
      confirmed: getResponse.confirmed.value,
      recovered: getResponse.recovered.value,
      death: getResponse.deaths.value,
    });
  };

  render() {
    const { confirmed, recovered, death } = this.state;

    return html`
      <div>
        <div class="text-center">
          <h1 class="font-bold text-4xl ">COVID-19</h1>
        </div>

        <div class="text-center">
          <${Boxi} title="Confirmed" jumlah="${confirmed}" />
          <${Boxi} title="Recovered" jumlah="${recovered}" />
          <${Boxi} title="Death" jumlah="${death}" />
        </div>
      </div>
    `;
  }
}
