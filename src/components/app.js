import { Loader } from "./loader"

export const AppComponent = () => {
  return `
    <div class="container">
    <div class="row">
    <div class="col-md-6 offset-md-3">
    <div class="card mt-5">
    <h1 class="card-header text-center">Geo Selector</h1>
    <div class="card-body">
    <form>
    <div class="mb-3">
    <select class="form-select" name="region" id="sel-region">
    <option>Select a Region...</option>
    <option>Africa</option>
    <option>Americas</option>
    <option>Asia</option>
    <option>Europe</option>
    <option>Oceania</option>
    </select>

    </div>
    ${Loader('loader-subregion')}
    <p id="subregions"></p>
    <p id="countries"></p>
    <p id="country"></p>
    
    <!-- ${Loader} -->
    </form>
    </div>
    </div>

    </div>
    </div>


    </div>
`
}
