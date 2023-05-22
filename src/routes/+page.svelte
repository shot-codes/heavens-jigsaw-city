<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Scene from "$lib/components/Scene.svelte";
  import Vanilla from "$lib/components/Vanilla.svelte";
</script>

<div>
  <Canvas>
    <Vanilla />
  </Canvas>
</div>

<style>
  div {
    height: 100vh;
    width: 100vw;
  }
</style>
