export const SubRegion = (subregions) => `<div>
<p>Select a Sub-Region</p>
<select name="subregion" id="sel-sub-region" class="form-select">
${subregions.map(s => `<option>${s.name.common}</option>`)}
</select>
</div>`
