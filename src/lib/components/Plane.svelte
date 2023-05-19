<script lang="ts">
  import { T } from "@threlte/core";
  import { DEG2RAD } from "three/src/math/MathUtils";

  export let widthX: number;
  export let widthY: number;
</script>

<T.Mesh position={[widthX / 2, widthY / 2, -0.1]}>
  <T.PlaneGeometry args={[widthX, widthY]} />
  <T.MeshStandardMaterial color="white" />
</T.Mesh>
