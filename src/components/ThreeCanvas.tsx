/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  currentSection: number;
  activeDishShape: 'spheres' | 'torus' | 'particles' | 'crystals';
  activeDishColor: string;
  scrollProgress: number; // 0 to 1 overall scroll info
}

export default function ThreeCanvas({
  currentSection,
  activeDishShape,
  activeDishColor,
  scrollProgress,
}: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    currentSection,
    activeDishShape,
    activeDishColor,
    scrollProgress,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  // Track state changes dynamically for interpolation in the animation loop
  useEffect(() => {
    stateRef.current.currentSection = currentSection;
    stateRef.current.activeDishShape = activeDishShape;
    stateRef.current.activeDishColor = activeDishColor;
    stateRef.current.scrollProgress = scrollProgress;
  }, [currentSection, activeDishShape, activeDishColor, scrollProgress]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // --- 1. SCENE & CAMERA SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x121213, 0.06);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Optimized pixel ratio capped at 1.5 for speed
    renderer.shadowMap.enabled = false; // DISABLED shadow mapping for massive performance gains

    // --- 2. LIGHTING CONFIGURATION (Luxury, warm bronze/champagne) ---
    const ambientLight = new THREE.AmbientLight(0x221a16, 0.8);
    scene.add(ambientLight);

    // Warm Bronze Spotlight from top right (No shadow projection to keep FPS ultra stable)
    const spotLight1 = new THREE.SpotLight(0xcd7f32, 6, 18, Math.PI / 4, 0.5, 1);
    spotLight1.position.set(5, 6, 4);
    scene.add(spotLight1);

    // Champagne Accent light from left
    const spotLight2 = new THREE.SpotLight(0xfffff0, 4, 15, Math.PI / 3, 0.5, 1);
    spotLight2.position.set(-6, 2, 3);
    scene.add(spotLight2);

    // Gentle Blue/Indigo Rim Light for high-contrast luxury depth
    const dirLight = new THREE.DirectionalLight(0x5c6bc0, 0.3);
    dirLight.position.set(0, -4, -4);
    scene.add(dirLight);

    // --- 3. CREATING IMPOSSIBLE FINE-DINING 3D ART (Gourmet Plating Masterpiece) ---
    const dishGroup = new THREE.Group();
    scene.add(dishGroup);

    // Base Fine Plate: Obsidian ceramic slate (Optimized subdivisions)
    const plateGeometry = new THREE.CylinderGeometry(2.4, 2.5, 0.05, 32);
    const plateMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c0c0e, // Deep elegant charcoal/obsidian
      roughness: 0.25,
      metalness: 0.55,
    });
    const plateMesh = new THREE.Mesh(plateGeometry, plateMaterial);
    plateMesh.position.y = -0.5;
    plateMesh.rotation.x = 0.1;
    dishGroup.add(plateMesh);

    // Elegant inner circular ring (Gold leaf plating lacquer)
    const ringGeometry = new THREE.RingGeometry(1.8, 1.9, 32);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xcd7f32, // Gold / Bronze foil
      roughness: 0.3,
      metalness: 0.9,
      side: THREE.DoubleSide,
    });
    const goldRing = new THREE.Mesh(ringGeometry, ringMaterial);
    goldRing.rotation.x = Math.PI / 2;
    goldRing.position.y = -0.47;
    dishGroup.add(goldRing);

    // --- 3a. GASTRONOMY FOODIE DECORATIVE ELEMENTS ---

    // Central elegant focal piece: Glazed Mousse Dessert Dome
    const centerGeom = new THREE.SphereGeometry(0.5, 32, 16);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0xfffff0,
      roughness: 0.08,
      metalness: 0.55, // Glossy metallic glaze look
    });
    const centerMesh = new THREE.Mesh(centerGeom, crystalMat);
    centerMesh.position.y = 0.25;
    dishGroup.add(centerMesh);

    // Floating gourmet sugar spun orbital loop ring
    const orbitRing1Geom = new THREE.TorusGeometry(1.2, 0.02, 6, 24);
    const goldMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0xcd7f32,
      metalness: 0.95,
      roughness: 0.15,
    });
    const orbitRing1 = new THREE.Mesh(orbitRing1Geom, goldMetalMaterial);
    orbitRing1.rotation.set(Math.PI / 3, Math.PI / 4, 0);
    dishGroup.add(orbitRing1);

    // Second elegant vertical spun-sugar orbit
    const orbitRing2Geom = new THREE.TorusGeometry(1.35, 0.012, 6, 24);
    const champagneMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0xfffff0,
      metalness: 0.95,
      roughness: 0.15,
    });
    const orbitRing2 = new THREE.Mesh(orbitRing2Geom, champagneMetalMaterial);
    orbitRing2.rotation.set(-Math.PI / 4, Math.PI / 6, Math.PI / 2);
    dishGroup.add(orbitRing2);

    // Micro-garnish: Fresh Shiso/Mint Leaves (Beautiful green cones angled elegantly)
    const leafGroup = new THREE.Group();
    dishGroup.add(leafGroup);
    const leafGeom = new THREE.ConeGeometry(0.12, 0.3, 3);
    const leafMat = new THREE.MeshStandardMaterial({
      color: 0x2e7d32, // Emerald herbal green
      roughness: 0.55,
      metalness: 0.1,
    });
    const leaves: THREE.Mesh[] = [];
    for (let i = 0; i < 5; i++) {
      const leaf = new THREE.Mesh(leafGeom, leafMat);
      const angle = (i / 5) * Math.PI * 2 + 0.5;
      const r = 0.85;
      leaf.position.set(Math.cos(angle) * r, -0.4, Math.sin(angle) * r);
      leaf.rotation.set(Math.PI / 1.8, angle + Math.PI / 2, Math.random() * 0.4);
      leafGroup.add(leaf);
      leaves.push(leaf);
    }

    // Micro-garnish: Glazed Red Berries nestling on the side
    const berryGroup = new THREE.Group();
    dishGroup.add(berryGroup);
    const berryGeom = new THREE.DodecahedronGeometry(0.08, 1);
    const berryMat = new THREE.MeshStandardMaterial({
      color: 0xc62828, // Raspberry Red
      roughness: 0.2,
      metalness: 0.3,
    });
    const berries: THREE.Mesh[] = [];
    for (let i = 0; i < 3; i++) {
      const berry = new THREE.Mesh(berryGeom, berryMat);
      const angle = (i / 3) * 0.8 + 2.5; // Grouped snuggly together
      const r = 0.7;
      berry.position.set(Math.cos(angle) * r, -0.4, Math.sin(angle) * r);
      berryGroup.add(berry);
      berries.push(berry);
    }

    // Caviar Pearls arrangement (Glossy droplets of supreme delicacy)
    const caviarGroup = new THREE.Group();
    dishGroup.add(caviarGroup);
    const caviarSpheres: THREE.Mesh[] = [];
    const caviarGeom = new THREE.SphereGeometry(0.09, 8, 8);
    const caviarMat = new THREE.MeshStandardMaterial({
      color: 0xcd7f32,
      roughness: 0.05,
      metalness: 0.75, // Rich caviar glaze
    });
    for (let i = 0; i < 8; i++) {
      const caviar = new THREE.Mesh(caviarGeom, caviarMat);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 1.05;
      caviar.position.set(Math.cos(angle) * radius, -0.43, Math.sin(angle) * radius);
      caviarGroup.add(caviar);
      caviarSpheres.push(caviar);
    }

    // --- 4. FLOATING 24K EDIBLE GOLD-LEAF FLAKES (Replacement for heavy generic points) ---
    const goldFlakesGroup = new THREE.Group();
    dishGroup.add(goldFlakesGroup);
    const flakeGeometry = new THREE.BoxGeometry(0.06, 0.06, 0.005);
    const flakeMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4af37, // Bright luxury gold foil
      metalness: 0.95,
      roughness: 0.1,
    });
    const flakes: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const flake = new THREE.Mesh(flakeGeometry, flakeMaterial);
      flake.position.set(
        (Math.random() - 0.5) * 3,
        Math.random() * 2.2 - 0.2,
        (Math.random() - 0.5) * 3
      );
      flake.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      goldFlakesGroup.add(flake);
      flakes.push(flake);
    }

    // High performance space point backdrop
    const particleCount = 100; // Half-scaled for fast render loops
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xcd7f32);
    const champagneColor = new THREE.Color(0xfffff0);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const mixedColor = goldColor.clone().lerp(champagneColor, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const createParticleTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 16;
      pCanvas.height = 16;
      const ctx = pCanvas.getContext('2d');
      if (ctx) {
        const grd = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grd.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grd.addColorStop(0.3, 'rgba(255, 255, 240, 0.6)');
        grd.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const particleTexture = createParticleTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- 5. INTERACTIVE EVENT HANDLERS ---
    const handleMouseMove = (event: MouseEvent) => {
      stateRef.current.targetMouseX = (event.clientX / window.innerWidth - 0.5) * 1.5;
      stateRef.current.targetMouseY = (event.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // --- 6. ANIMATION & TRANSITION RENDERING LOOP (Buttery 60fps) ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const state = stateRef.current;

      // Smooth mouse interpolation (spring feel)
      state.mouseX += (state.targetMouseX - state.mouseX) * 0.05;
      state.mouseY += (state.targetMouseY - state.mouseY) * 0.05;

      // 6a. PROCEDURALLY ANIMATE THE DISH (Slow premium spin)
      dishGroup.rotation.y = elapsedTime * 0.12;
      
      // Floating motion (slow breath)
      dishGroup.position.y = Math.sin(elapsedTime * 0.6) * 0.08;

      // Spun sugar orbit motion
      orbitRing1.rotation.y = elapsedTime * 0.25;
      orbitRing1.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.3) * 0.08;
      orbitRing2.rotation.z = -elapsedTime * 0.18;

      // Micro herbs/leaves slow waving
      leaves.forEach((leaf, idx) => {
        leaf.rotation.z = Math.sin(elapsedTime * 0.8 + idx) * 0.15;
      });

      // Gold-foils ambient fluttering
      flakes.forEach((flake, idx) => {
        flake.rotation.x += 0.008 + (idx % 3) * 0.002;
        flake.rotation.y += 0.006 + (idx % 2) * 0.002;
        flake.position.y += Math.sin(elapsedTime * 1.2 + idx) * 0.001;
      });

      // Caviar dynamic pulse
      caviarSpheres.forEach((caviar, index) => {
        caviar.position.y = -0.43 + Math.sin(elapsedTime * 1.0 + index) * 0.02;
      });

      // Gently pulse the central crystal/dome
      const scaleMultiplier = 1 + Math.sin(elapsedTime * 1.2) * 0.03;
      centerMesh.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
      centerMesh.rotation.y = -elapsedTime * 0.2;

      // 6b. CAMERA DIRECTING BY SECTION TRIGGER
      let targetCamX = 0;
      let targetCamY = 0;
      let targetCamZ = 8;
      let targetDishRotX = 0.45; // Base plate tilt

      switch (state.currentSection) {
        case 0: // Hero Showroom
          targetCamX = state.mouseX;
          targetCamY = -state.mouseY;
          targetCamZ = 5.8;
          targetDishRotX = 0.45 + state.mouseY * 0.2;
          break;

        case 1: // The Philosophy
          targetCamX = -1.1 + state.mouseX * 0.4;
          targetCamY = state.mouseY * 0.4;
          targetCamZ = 7.2;
          targetDishRotX = 0.6;
          break;

        case 2: // The Chef
          targetCamX = 1.2 + state.mouseX * 0.3;
          targetCamY = 0.3 + state.mouseY * 0.3;
          targetCamZ = 6.8;
          targetDishRotX = 1.0;
          break;

        case 3: // Signature Creations
          targetCamX = -0.4 + state.mouseX * 0.8;
          targetCamY = -0.2 - state.mouseY * 0.8;
          targetCamZ = 5.0;
          targetDishRotX = 0.55;
          break;

        case 4: // The Experience Atmosphere
          targetCamX = state.mouseX * 0.3;
          targetCamY = 0.8 + state.mouseY * 0.3;
          targetCamZ = 7.8;
          targetDishRotX = 0.75;
          break;

        case 5: // Tasting Menu chapters
          targetCamX = -1.3 + state.mouseX * 0.4;
          targetCamY = -0.4 + state.mouseY * 0.4;
          targetCamZ = 6.5;
          targetDishRotX = 0.45;
          break;

        case 6: // Reservation Form
          targetCamX = state.mouseX * 0.2;
          targetCamY = -0.8 + state.mouseY * 0.2;
          targetCamZ = 6.8;
          targetDishRotX = 0.15;
          break;

         default:
          break;
      }

      const scrollDrift = state.scrollProgress * 2.2;
      targetCamY -= scrollDrift * 0.4;
      targetCamZ -= scrollDrift * 0.2;

      // Smooth camera interpolation
      camera.position.x += (targetCamX - camera.position.x) * 0.05;
      camera.position.y += (targetCamY - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;

      // Adjust dish alignment dynamically
      dishGroup.rotation.x += (targetDishRotX - dishGroup.rotation.x) * 0.05;

      // 6c. INTERACTIVE DISH MORPH (Signature Creations Switch)
      let targetColorRGB = new THREE.Color(0xd9a05b);
      if (state.activeDishColor) {
        targetColorRGB.set(state.activeDishColor);
      }
      
      // Interpolate material colors
      crystalMat.color.lerp(targetColorRGB, 0.05);

      // Morph central dessert geometry scales based on dynamic interactive shapes
      if (state.activeDishShape === 'torus') {
        centerMesh.scale.x += (1.4 - centerMesh.scale.x) * 0.05;
        centerMesh.scale.y += (0.45 - centerMesh.scale.y) * 0.05;
        centerMesh.scale.z += (1.4 - centerMesh.scale.z) * 0.05;
      } else if (state.activeDishShape === 'crystals') {
        centerMesh.scale.x += (0.9 - centerMesh.scale.x) * 0.05;
        centerMesh.scale.y += (1.5 - centerMesh.scale.y) * 0.05;
        centerMesh.scale.z += (0.9 - centerMesh.scale.z) * 0.05;
      } else if (state.activeDishShape === 'particles') {
        centerMesh.scale.x += (0.35 - centerMesh.scale.x) * 0.05;
        centerMesh.scale.y += (0.35 - centerMesh.scale.y) * 0.05;
        centerMesh.scale.z += (0.35 - centerMesh.scale.z) * 0.05;
      } else {
        // Standard spheriod presentation dome
        centerMesh.scale.x += (0.8 - centerMesh.scale.x) * 0.05;
        centerMesh.scale.y += (0.8 - centerMesh.scale.y) * 0.05;
        centerMesh.scale.z += (0.8 - centerMesh.scale.z) * 0.05;
      }

      particles.rotation.y = elapsedTime * 0.02;

      const lookAtTarget = new THREE.Vector3(0, Math.sin(elapsedTime * 0.6) * 0.05, 0);
      camera.lookAt(lookAtTarget);

      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.dispose();
      plateGeometry.dispose();
      plateMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      orbitRing1Geom.dispose();
      orbitRing2Geom.dispose();
      goldMetalMaterial.dispose();
      champagneMetalMaterial.dispose();
      leafGeom.dispose();
      leafMat.dispose();
      berryGeom.dispose();
      berryMat.dispose();
      caviarGeom.dispose();
      caviarMat.dispose();
      centerGeom.dispose();
      crystalMat.dispose();
      flakeGeometry.dispose();
      flakeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="3d-scene-container"
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
