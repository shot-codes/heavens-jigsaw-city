<script lang="ts">
  import { T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
  import type { Config } from "$lib/types";
  import data from "$lib/map_config.json";
  import Plane from "./Plane.svelte";
  import Building from "./Building.svelte";
  import Street from "./Street.svelte";
  import Water from "./Water.svelte";
  import Park from "./Park.svelte";

  const config: Config = data;
  console.log(config);
</script>

<T.PerspectiveCamera makeDefault position={[-10, -10, 10]} up={[0, 0, 1]}>
  <OrbitControls enableDamping />
</T.PerspectiveCamera>

<T.DirectionalLight position={[3, -10, 7]} />
<T.AmbientLight intensity={0.2} />

<Plane widthX={config.planeSize.x} widthY={config.planeSize.y} />

{#each config.buildings as building}
  <Building {building} />
{/each}

{#each config.street as street}
  <Street {street} />
{/each}

{#each config.water as water}
  <Water {water} />
{/each}

{#each config.park as park}
  <Park {park} />
{/each}

<T.AxesHelper />
