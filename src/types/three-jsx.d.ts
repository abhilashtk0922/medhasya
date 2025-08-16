import { Object3D, Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, SpotLight } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any
      boxGeometry: any
      meshStandardMaterial: any
      ambientLight: any
      spotLight: any
      group: any
      primitive: any
    }
  }
} 