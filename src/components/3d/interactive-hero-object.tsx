"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function InteractiveHeroObject() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Geometry and Material
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshStandardMaterial({
      color: '#E6E6FA',
      emissive: '#301934',
      roughness: 0.3,
      metalness: 0.8,
      wireframe: true,
    });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);
    
    const wireframeMaterial = new THREE.MeshBasicMaterial({ color: '#E6E6FA', wireframe: true, transparent: true, opacity: 0.1 });
    const wireframeSphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), wireframeMaterial);
    scene.add(wireframeSphere);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xE6E6FA, 2, 100);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      icosahedron.rotation.x += 0.001;
      icosahedron.rotation.y += 0.001;
      
      wireframeSphere.rotation.x -= 0.0005;
      wireframeSphere.rotation.y -= 0.0005;

      // Interaction
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);


      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onResize = () => {
      if(currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', onResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 h-full w-full opacity-50" />;
}
