import { SubRegion } from './src/components/sub-region.js';
import { Country } from './src/components/country.js';
import { AppComponent } from './src/components/app.js';

let subregions = [];

const App = {
  $: {
    region: document.querySelector("#sel-region"),
    app: document.querySelector('#app'),
    subregions: () => document.querySelector('#subregions'),
    loaderSubregion: () => document.querySelector('#loader-subregion'),
    country: () => document.querySelector('#country'),
    showSubregionLoader(show) {
    
      if(show) {
        App.$.loaderSubregion().classList.remove('d-none');        
      } else {
        App.$.loaderSubregion().classList.add('d-none');             
      }
    }
  },
  init() {

    App.$.app.addEventListener("change", (ev) => {
      if(ev.target.name == "region") {
        const region = ev.target.value;
        console.log(ev.target.value);
        App.$.showSubregionLoader(true);
        fetch(`https://restcountries.com/v3.1/region/${region}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            subregions = data;
            App.$.showSubregionLoader(false);
            App.$.subregions().innerHTML = SubRegion(data);
          })
      }

      if(ev.target.name == "subregion") {
   
        const country = subregions.find(s => s.name.common == ev.target.value);

        App.$.country().innerHTML = Country(country);
        
      }
    });
    App.render();


  },
  render() {
    App.$.app.innerHTML = AppComponent();    
  }
}




App.init();
