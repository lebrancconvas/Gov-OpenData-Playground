<script lang="ts">
  import axios from 'axios';
  import { onMount } from 'svelte';
  import type { College } from './utils/college.interface';

  let colleges: College[] = [];

  const getCollegeData = async() => {
    const res = await fetch('https://data.go.th/dataset/84954e4a-3302-4b05-9dfc-c636f30b62ab/resource/31ddd8a7-c99a-43eb-8c2e-9644ddb1608b/download/university.json');
    const data = await res.json();
    colleges = data.features;
  };

  onMount(getCollegeData);
</script>

<main>
  <header>
    <div id="heading">
      <h1>College BKK</h1>
    </div>
    <div id="bio">
      <h2>
        รวบรวมข้อมูลเกี่ยวกับ วิทยาลัย มหาวิทยาลัย และสถาบันต่างๆที่ตั้งภายในจังหวัดกรุงเทพมหานคร 
      </h2>
    </div>
  </header>
  <section id="display">
    {#each colleges as college}
    <div id="college-card">
      <div id="title">
        {college.properties.name}
      </div>
      <hr>
      <div id="address">
        ที่อยู่: {college.properties.address}
      </div>
      <div id="geo-location">
        Latitude: {college.geometry.coordinates[0]}
        |
        Longtitude: {college.geometry.coordinates[1]}
      </div>
    </div>
    {/each}
  </section>
</main>

<style>
  main {
    font-family: "DM Sans", sans-serif;
  }
  header {
    text-align: center;
  }

  #display {
    display: grid;
    grid-template-columns: 50% 50%;

  }
  #college-card {
    border: 3px solid black;
    margin: 8px auto;
    width: 80%;
    border-radius: 3px;
    box-shadow: 1px 1px 1px black;
    padding: 5px;
    cursor: pointer;
  }

  #college-card:hover {
    box-shadow: 2px 2px 2px black;
    transform: scale(0.995);
  }

  #title {
    font-size: 20px;
  }
</style>