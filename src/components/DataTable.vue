<template>
  <div>
    <DataTable :value="cars">
      <Column field="vin" header="Vin"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="year" header="Year"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cars: [
        {vin: 'a1653d4d', brand: 'VW', year: 1998, color: 'White'},
        {vin: 'ddeb9b10', brand: 'Mercedes', year: 1985, color: 'Green'},
        {vin: 'd8ebe413', brand: 'Jaguar', year: 1979, color: 'Silver'},
        {vin: 'aab227b7', brand: 'Audi', year: 1970, color: 'Black'},
        {vin: '631f7412', brand: 'Volvo', year: 1992, color: 'Red'},
        {vin: '7d2d22b0', brand: 'VW', year: 1993, color: 'Maroon'},
        {vin: '50e900ca', brand: 'Fiat', year: 1964, color: 'Blue'}
      ]
    }
  },
  created() {
        this.columns = [
            { field: 'vin', header: 'Vin' },
            { field: 'brand', header: 'Brand' },
            { field: 'year', header: 'Year' },
            { field: 'color', header: 'Color' }
        ];
    },
    mounted() {
        this.сars;
    }

}
</script>
