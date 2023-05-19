<script lang="ts">
  import { T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
  import type { Config } from "$lib/types";
  import data from "$lib/city.json";
  import Plane from "./Plane.svelte";
  import Building from "./Building.svelte";
  import TwoDimensionalObject from "./TwoDimensionalObject.svelte";

  const config: Config = data;

  function randomIntsFromInterval(min: number, max: number, length: number) {
    return Array.from({ length: length }, () => Math.floor(Math.random() * (max - min + 1) + min));
  }

  const buildingTextures = randomIntsFromInterval(1, 5, config.buildings.length);
</script>

<T.PerspectiveCamera makeDefault position={[-10, -10, 10]} up={[0, 0, 1]}>
  <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, -20, 20]} castShadow intensity={0.5} />
<T.AmbientLight intensity={0.2} />

<Plane widthX={config.planeSize.x} widthY={config.planeSize.y} />

{#each config.buildings as building, i}
  <Building {building} texturePath={"/textures/buildings/" + buildingTextures[i] + ".jpg"} />
{/each}

{#each config.street as object}
  <TwoDimensionalObject {object} texturePath={"/textures/street.jpg"} />
{/each}

{#each config.water as object}
  <TwoDimensionalObject {object} texturePath={"/textures/water.png"} />
{/each}

{#each config.park as object}
  <TwoDimensionalObject {object} texturePath={"/textures/park.jpg"} />
{/each}

<T.AxesHelper />
