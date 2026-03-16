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

    let renderer;

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
    cluster.position.set(3.4, 0.6, -3.5);
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
        size: 0.11,
        transparent: true,
        opacity: 0.45,
      })
    );
    cluster.add(particles);

    const mist = new THREE.Points(
      particleGeometry.clone(),
      new THREE.PointsMaterial({
        color: "#f4c9d6",
        size: 0.07,
        transparent: true,
        opacity: 0.22,
      })
    );
    mist.scale.setScalar(1.45);
    cluster.add(mist);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.35, 10),
      new THREE.MeshBasicMaterial({
        color: "#f5d3de",
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      })
    );
    cluster.add(core);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(1.8, 32, 32),
      new THREE.MeshBasicMaterial({
        color: "#efb5c8",
        transparent: true,
        opacity: 0.06,
      })
    );
    cluster.add(shell);

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

    const accentTwo = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.38, 1),
      new THREE.MeshBasicMaterial({
        color: "#e36887",
        transparent: true,
        opacity: 0.16,
      })
    );
    accentTwo.position.set(2.25, 1.8, -0.2);
    cluster.add(accentTwo);

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
      cluster.rotation.x = Math.sin(elapsed * 0.34) * 0.16;
      cluster.rotation.z = Math.sin(elapsed * 0.22) * 0.08;
      cluster.position.x = 3.4 + pointerX * 0.9 + Math.cos(elapsed * 0.42) * 0.2;
      cluster.position.y =
        0.6 - pointerY * 0.45 + Math.sin(elapsed * 0.7) * 0.45;

      particles.rotation.y = -elapsed * 0.16;
      particles.rotation.x = Math.sin(elapsed * 0.35) * 0.22;
      mist.rotation.y = elapsed * 0.1;
      mist.rotation.z = Math.sin(elapsed * 0.28) * 0.18;
      core.rotation.x = elapsed * 0.42;
      core.rotation.y = elapsed * 0.34;
      shell.scale.setScalar(1 + Math.sin(elapsed * 0.95) * 0.07);
      shell.rotation.y = -elapsed * 0.12;
      halo.scale.setScalar(1 + Math.sin(elapsed * 1.1) * 0.08);
      accent.position.y = -1.5 + Math.sin(elapsed * 1.15) * 0.26;
      accent.position.x = -2.1 + Math.cos(elapsed * 0.9) * 0.22;
      accentTwo.position.y = 1.8 + Math.sin(elapsed * 1.35) * 0.34;
      accentTwo.position.x = 2.25 + Math.cos(elapsed * 0.8) * 0.18;

      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      particleGeometry.dispose();
      mist.geometry.dispose();
      core.geometry.dispose();
      shell.geometry.dispose();
      accent.geometry.dispose();
      accentTwo.geometry.dispose();
      halo.geometry.dispose();
      (particles.material as { dispose: () => void }).dispose();
      (mist.material as { dispose: () => void }).dispose();
      (core.material as { dispose: () => void }).dispose();
      (shell.material as { dispose: () => void }).dispose();
      (accent.material as { dispose: () => void }).dispose();
      (accentTwo.material as { dispose: () => void }).dispose();
      (halo.material as { dispose: () => void }).dispose();
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
      <div className="background-aurora" />
      <div className="background-veil" />
      <div className="background-pulse" />
      <div className="background-grid" />
      <div className="background-noise" />
    </div>
  );
}
