import { Object3D } from 'three'

declare module '@react-three/fiber' {
  export interface ThreeElements {
    mesh: any
    boxGeometry: any
    meshStandardMaterial: any
    ambientLight: any
    spotLight: any
    group: any
    primitive: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Basic elements
      group: any
      primitive: any
      
      // Geometries
      boxGeometry: any
      sphereGeometry: any
      planeGeometry: any
      
      // Materials
      meshStandardMaterial: any
      meshBasicMaterial: any
      meshPhongMaterial: any
      
      // Objects
      mesh: any
      line: any
      points: any
      
      // Lights
      ambientLight: any
      spotLight: any
      pointLight: any
      directionalLight: any
      
      // Controls
      orbitControls: any
    }
  }
} 