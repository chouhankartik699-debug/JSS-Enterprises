import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  mode: 'traditional' | 'digital';
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ mode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modeRef = useRef(mode);
  modeRef.current = mode;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // Ambient and Key Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf59e0b, 2.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x38bdf8, 2.0, 15);
    rimLight.position.set(-6, -3, 3);
    scene.add(rimLight);

    const goldGlow = new THREE.PointLight(0xfbbf24, 3, 10);
    goldGlow.position.set(0, 0, 2);
    scene.add(goldGlow);

    // Root Group for interactive mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Helper: Create a dynamic canvas texture for smartphone screen
    const createPhoneScreenTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Dark premium background
        const grad = ctx.createLinearGradient(0, 0, 0, 1024);
        grad.addColorStop(0, '#0c0f14');
        grad.addColorStop(1, '#151922');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 1024);

        // Header
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('JSS QR MENU', 40, 70);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '18px sans-serif';
        ctx.fillText('Table #04 · Contactless Dining', 40, 105);

        // Search bar mockup
        ctx.fillStyle = '#1e2430';
        ctx.roundRect(40, 130, 432, 44, 12);
        ctx.fill();
        ctx.fillStyle = '#64748b';
        ctx.font = '16px sans-serif';
        ctx.fillText('Search artisan coffees, dishes...', 60, 158);

        // QR simulation card
        ctx.fillStyle = '#221e16';
        ctx.roundRect(40, 195, 432, 280, 16);
        ctx.fill();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 22px sans-serif';
        ctx.fillText('SCAN & ORDER DIRECT', 70, 240);

        ctx.fillStyle = '#e2e8f0';
        ctx.font = '16px sans-serif';
        ctx.fillText('WhatsApp Instant Order Checkout', 70, 270);
        ctx.fillStyle = '#10b981';
        ctx.fillText('● Live Kitchen Sync Active', 70, 300);

        // QR Code box
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(166, 330, 180, 120);
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 16px monospace';
        ctx.fillText('QR CODE', 215, 395);

        // Dish items
        const dishes = [
          { name: 'Truffle Mushroom Risotto', price: '$22.50', tag: 'Chef Choice' },
          { name: 'Smoked Vanilla Cold Brew', price: '$6.75', tag: 'Popular' },
          { name: 'Artisan Woodfire Pizza', price: '$19.00', tag: 'Fast' },
        ];

        dishes.forEach((d, i) => {
          const y = 510 + i * 140;
          ctx.fillStyle = '#181d27';
          ctx.roundRect(40, y, 432, 115, 14);
          ctx.fill();

          ctx.fillStyle = '#f8fafc';
          ctx.font = 'bold 20px sans-serif';
          ctx.fillText(d.name, 60, y + 42);

          ctx.fillStyle = '#fbbf24';
          ctx.font = 'bold 22px sans-serif';
          ctx.fillText(d.price, 60, y + 85);

          ctx.fillStyle = '#334155';
          ctx.roundRect(330, y + 60, 120, 36, 18);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 14px sans-serif';
          ctx.fillText('+ Add Order', 345, y + 83);
        });
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // Helper: Create Traditional Menu Texture for Paper/Chalkboard
    const createTraditionalTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 768;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Parchment / wooden paper look
        ctx.fillStyle = '#2b2219';
        ctx.fillRect(0, 0, 512, 768);

        ctx.strokeStyle = '#5a4632';
        ctx.lineWidth = 12;
        ctx.strokeRect(16, 16, 480, 736);

        ctx.fillStyle = '#d4b996';
        ctx.font = 'bold 32px serif';
        ctx.fillText('TRADITIONAL MENU', 70, 90);

        ctx.strokeStyle = '#d4b996';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(70, 110);
        ctx.lineTo(440, 110);
        ctx.stroke();

        ctx.font = 'italic 18px serif';
        ctx.fillStyle = '#a88d6e';
        ctx.fillText('(Paper print · Manual orders only)', 110, 145);

        const items = [
          'Daily Soup (Out of Stock)',
          'House Roast Beef (Price Changed)',
          'Traditional Coffee (Handwritten Note)',
          'Dessert of the Day (Ask Waiter)',
        ];

        items.forEach((item, idx) => {
          const y = 220 + idx * 100;
          ctx.fillStyle = '#f3e5d0';
          ctx.font = '20px serif';
          ctx.fillText(item, 50, y);
          ctx.font = '16px serif';
          ctx.fillStyle = '#9e7f5e';
          ctx.fillText('Pending paper reprint & updates...', 50, y + 30);
        });
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    const phoneTex = createPhoneScreenTexture();
    const tradTex = createTraditionalTexture();

    // 1. Digital Smartphone 3D Model
    const phoneGroup = new THREE.Group();
    // Phone body chassis
    const phoneBodyGeo = new THREE.BoxGeometry(2.1, 4.3, 0.16);
    const phoneBodyMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.9,
      roughness: 0.2,
    });
    const phoneBody = new THREE.Mesh(phoneBodyGeo, phoneBodyMat);
    phoneGroup.add(phoneBody);

    // Golden frame trim
    const rimGeo = new THREE.BoxGeometry(2.14, 4.34, 0.12);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.25,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    phoneGroup.add(rim);

    // Front Screen
    const screenGeo = new THREE.PlaneGeometry(1.98, 4.18);
    const screenMat = new THREE.MeshBasicMaterial({
      map: phoneTex,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.085;
    phoneGroup.add(screenMesh);

    phoneGroup.position.set(2.4, 0.2, 0.5);
    phoneGroup.rotation.set(-0.15, -0.4, 0.05);
    mainGroup.add(phoneGroup);

    // 2. Traditional Paper / Slate Board Model
    const tradGroup = new THREE.Group();
    const tradBoardGeo = new THREE.BoxGeometry(2.2, 3.2, 0.1);
    const tradBoardMat = new THREE.MeshStandardMaterial({
      color: 0x3d2b1f,
      roughness: 0.85,
    });
    const tradBoard = new THREE.Mesh(tradBoardGeo, tradBoardMat);
    tradGroup.add(tradBoard);

    const tradPaperGeo = new THREE.PlaneGeometry(2.0, 3.0);
    const tradPaperMat = new THREE.MeshBasicMaterial({
      map: tradTex,
    });
    const tradPaperMesh = new THREE.Mesh(tradPaperGeo, tradPaperMat);
    tradPaperMesh.position.z = 0.055;
    tradGroup.add(tradPaperMesh);

    tradGroup.position.set(-2.6, -0.2, -0.5);
    tradGroup.rotation.set(0.1, 0.35, -0.05);
    mainGroup.add(tradGroup);

    // 3. Floating 3D Gold Rings & Geometric Accents
    const ringGeo = new THREE.TorusGeometry(0.7, 0.03, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x78350f,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.position.set(3.4, 2.0, -1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.position.set(-3.2, -1.8, 1);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 4. Floating Ambient Particles (Gold / Stardust)
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      scales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.5;
      targetMouseY = y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      mainGroup.rotation.y = currentMouseX;
      mainGroup.rotation.x = -currentMouseY;

      // Floating oscillation
      phoneGroup.position.y = 0.2 + Math.sin(elapsed * 1.4) * 0.15;
      phoneGroup.rotation.z = 0.05 + Math.sin(elapsed * 1.1) * 0.03;

      tradGroup.position.y = -0.2 + Math.cos(elapsed * 1.2) * 0.12;
      tradGroup.rotation.z = -0.05 + Math.cos(elapsed * 0.9) * 0.04;

      ring1.rotation.z += 0.01;
      ring2.rotation.x += 0.008;

      // Mode-based highlight focus
      if (modeRef.current === 'digital') {
        phoneGroup.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.05);
        tradGroup.scale.lerp(new THREE.Vector3(0.85, 0.85, 0.85), 0.05);
        phoneGroup.position.z = 1.0;
        tradGroup.position.z = -1.2;
      } else {
        phoneGroup.scale.lerp(new THREE.Vector3(0.88, 0.88, 0.88), 0.05);
        tradGroup.scale.lerp(new THREE.Vector3(1.12, 1.12, 1.12), 0.05);
        phoneGroup.position.z = -1.0;
        tradGroup.position.z = 0.8;
      }

      // Rotate particle cloud gently
      particles.rotation.y = elapsed * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      phoneTex.dispose();
      tradTex.dispose();
      phoneBodyGeo.dispose();
      rimGeo.dispose();
      screenGeo.dispose();
      tradBoardGeo.dispose();
      tradPaperGeo.dispose();
      ringGeo.dispose();
      particleGeo.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full absolute inset-0 pointer-events-none" />;
};
