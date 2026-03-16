"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const webglContext = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
    }) as WebGLRenderingContext | null;

    const experimentalContext = canvas.getContext("experimental-webgl", {
      alpha: true,
      antialias: true,
    }) as WebGLRenderingContext | null;

    const context = webglContext ?? experimentalContext;

    if (!context) {
      return;
    }

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        context,
        antialias: true,
        alpha: true,
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 16;

    const cluster = new THREE.Group();
    cluster.position.set(4.6, 1.5, -4);
    scene.add(cluster);

    const particleCount = window.innerWidth < 768 ? 100 : 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 10;
      positions[offset + 1] = (Math.random() - 0.5) * 10;
      positions[offset + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: "#d9809c",
        size: 0.085,
        transparent: true,
        opacity: 0.38,
      })
    );
    cluster.add(particles);

    const ringGeometry = new THREE.TorusGeometry(2.9, 0.035, 24, 220);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#efb5c8",
      transparent: true,
      opacity: 0.16,
    });

    const ringOne = new THREE.Mesh(ringGeometry, ringMaterial);
    ringOne.rotation.x = 1.08;
    ringOne.rotation.y = 0.28;
    cluster.add(ringOne);

    const ringTwo = new THREE.Mesh(ringGeometry, ringMaterial.clone());
    ringTwo.material.opacity = 0.11;
    ringTwo.rotation.x = 0.28;
    ringTwo.rotation.y = -0.52;
    ringTwo.scale.setScalar(0.78);
    cluster.add(ringTwo);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.1, 8),
      new THREE.MeshBasicMaterial({
        color: "#f5d3de",
        wireframe: true,
        transparent: true,
        opacity: 0.13,
      })
    );
    cluster.add(core);

    const accent = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.48, 2),
      new THREE.MeshBasicMaterial({
        color: "#f9b3c7",
        transparent: true,
        opacity: 0.24,
      })
    );
    accent.position.set(-2.1, -1.5, 0.4);
    cluster.add(accent);

    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.65, 32, 32),
      new THREE.MeshBasicMaterial({
        color: "#f4c9d6",
        transparent: true,
        opacity: 0.045,
      })
    );
    cluster.add(halo);

    let pointerX = 0;
    let pointerY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      pointerY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    renderer.setAnimationLoop(() => {
      const elapsed = clock.getElapsedTime();

      cluster.rotation.y = elapsed * 0.1;
      cluster.rotation.x = Math.sin(elapsed * 0.26) * 0.08;
      cluster.position.x = 4.6 + pointerX * 0.38;
      cluster.position.y =
        1.5 - pointerY * 0.22 + Math.sin(elapsed * 0.5) * 0.24;

      particles.rotation.y = -elapsed * 0.04;
      ringOne.rotation.z = elapsed * 0.15;
      ringTwo.rotation.z = -elapsed * 0.11;
      core.rotation.x = elapsed * 0.16;
      core.rotation.y = elapsed * 0.15;
      halo.scale.setScalar(1 + Math.sin(elapsed * 0.85) * 0.04);
      accent.position.y = -1.5 + Math.sin(elapsed * 1.15) * 0.26;

      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      particleGeometry.dispose();
      ringGeometry.dispose();
      core.geometry.dispose();
      accent.geometry.dispose();
      halo.geometry.dispose();
      (particles.material as THREE.Material).dispose();
      ringMaterial.dispose();
      ringTwo.material.dispose();
      (core.material as THREE.Material).dispose();
      (accent.material as THREE.Material).dispose();
      (halo.material as THREE.Material).dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="background-canvas h-full w-full" />
      <div className="background-orb background-orb-primary" />
      <div className="background-orb background-orb-secondary" />
      <div className="background-orb background-orb-tertiary" />
      <div className="background-ring" />
      <div className="background-ring background-ring-secondary" />
      <div className="background-aurora" />
      <div className="background-grid" />
      <div className="background-noise" />
    </div>
  );
}
