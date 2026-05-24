// // @ts-ignore
// import React, { useEffect, useRef } from "react";

// export default function GoldCanvas3D() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationId: number;
//     let width = 0;
//     let height = 0;

//     const resize = () => {
//       const rect = canvas.getBoundingClientRect();
//       width = rect.width;
//       height = rect.height;
//       canvas.width = width * window.devicePixelRatio;
//       canvas.height = height * window.devicePixelRatio;
//       ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//     };

//     resize();

//     const resizeObserver = new ResizeObserver(() => resize());
//     if (canvas.parentElement) {
//       resizeObserver.observe(canvas.parentElement);
//     }

//     // Interactive mouse state
//     const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = canvas.getBoundingClientRect();
//       mouse.targetX = (e.clientX - rect.left - width / 2) / (width / 2);
//       mouse.targetY = (e.clientY - rect.top - height / 2) / (height / 2);
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     // Initial particles
//     interface OrbitParticle {
//       angle: number;
//       orbitRadius: number;
//       speed: number;
//       yPos: number;
//       size: number;
//       colorOffset: number;
//       wobbleSpeed: number;
//       wobbleRange: number;
//     }

//     const particles: OrbitParticle[] = [];
//     const count = 75;
//     for (let i = 0; i < count; i++) {
//       particles.push({
//         angle: Math.random() * Math.PI * 2,
//         orbitRadius: 70 + Math.random() * 110,
//         speed: (0.002 + Math.random() * 0.005) * (Math.random() > 0.5 ? 1 : -1),
//         yPos: (Math.random() - 0.5) * 80,
//         size: 1 + Math.random() * 2.5,
//         colorOffset: Math.random(),
//         wobbleSpeed: 0.005 + Math.random() * 0.01,
//         wobbleRange: 5 + Math.random() * 15,
//       });
//     }

//     let globalRotation = 0;

//     const render = () => {
//       ctx.clearRect(0, 0, width, height);

//       // Smooth mouse interpolation
//       mouse.x += (mouse.targetX - mouse.x) * 0.05;
//       mouse.y += (mouse.targetY - mouse.y) * 0.05;

//       globalRotation += 0.003;

//       // Soft ambient golden blur background
//       const gradBg = ctx.createRadialGradient(
//         width / 2 + mouse.x * 30,
//         height / 2 + mouse.y * 30,
//         10,
//         width / 2,
//         height / 2,
//         Math.max(width, height) * 0.5,
//       );
//       gradBg.addColorStop(0, "rgba(212, 175, 55, 0.06)");
//       gradBg.addColorStop(0.5, "rgba(11, 12, 16, 0)");
//       gradBg.addColorStop(1, "rgba(5, 5, 5, 0)");
//       ctx.fillStyle = gradBg;
//       ctx.fillRect(0, 0, width, height);

//       // Draw elegant luxury background rings
//       const centerX = width / 2;
//       const centerY = height / 2;

//       ctx.save();
//       ctx.translate(centerX, centerY);
//       // Perspective tilting based on mouse and time
//       ctx.rotate(0.3 + mouse.y * 0.2);
//       ctx.rotate(mouse.x * 0.2);

//       // Draw elegant continuous gold orbital tracks
//       const ringRadii = [80, 130, 180];
//       ringRadii.forEach((r, idx) => {
//         ctx.beginPath();
//         ctx.ellipse(
//           0,
//           0,
//           r,
//           r * 0.35,
//           globalRotation * (0.2 + idx * 0.1),
//           0,
//           Math.PI * 2,
//         );
//         ctx.strokeStyle = `rgba(212, 175, 55, ${0.05 + 0.05 * (3 - idx)})`;
//         ctx.lineWidth = 1.2 - idx * 0.2;
//         ctx.stroke();
//       });

//       // Render gold abstract wire core (spinning jewel)
//       ctx.beginPath();
//       const points: { x: number; y: number; z: number }[] = [];
//       const steps = 24;
//       for (let i = 0; i <= steps; i++) {
//         const phi = (i / steps) * Math.PI;
//         for (let j = 0; j < steps; j += 4) {
//           const theta = (j / steps) * Math.PI * 2 + globalRotation;
//           const rx = 40 * Math.sin(phi) * Math.cos(theta);
//           const ry = 40 * Math.cos(phi);
//           const rz = 40 * Math.sin(phi) * Math.sin(theta);
//           points.push({ x: rx, y: ry, z: rz });
//         }
//       }

//       // Draw connections
//       ctx.strokeStyle = "rgba(212, 175, 55, 0.09)";
//       ctx.lineWidth = 0.5;
//       for (let i = 0; i < points.length; i += 3) {
//         if (i + 1 < points.length) {
//           ctx.beginPath();
//           // Simple orthographic 3D projection with lean
//           const p1 = points[i];
//           const p2 = points[i + 1];
//           const x1 = p1.x + p1.z * mouse.x * 0.1;
//           const y1 = p1.y + p1.z * mouse.y * 0.1;
//           const x2 = p2.x + p2.z * mouse.x * 0.1;
//           const y2 = p2.y + p2.z * mouse.y * 0.1;
//           ctx.moveTo(x1, y1);
//           ctx.lineTo(x2, y2);
//           ctx.stroke();
//         }
//       }

//       // Draw particles orbiting with 3D projection
//       particles.forEach((p) => {
//         p.angle += p.speed;
//         const wobble =
//           Math.sin(globalRotation * 2 + p.angle * 3) * p.wobbleRange;
//         const currentRadius =
//           p.orbitRadius + Math.sin(globalRotation * p.wobbleSpeed) * 10;

//         // Compute 3D coordinate around tilted flat disk
//         const px = Math.cos(p.angle) * currentRadius;
//         const pz = Math.sin(p.angle) * currentRadius;
//         const py = p.yPos + wobble;

//         // Project with mouse rotation factors
//         // Y-axis tilt
//         const rotY_cos = Math.cos(0.25 + mouse.y * 0.15);
//         const rotY_sin = Math.sin(0.25 + mouse.y * 0.15);

//         // Projected 2D canvas coords
//         const finalX = px;
//         const finalY = py * rotY_cos - pz * rotY_sin;
//         const finalZ = py * rotY_sin + pz * rotY_cos; // Depth factor

//         // Scale and opacity according to depth
//         const depthFactor = (finalZ + 300) / 600; // 0.2 to 1.2
//         const alpha = Math.max(0.08, Math.min(1.0, 0.15 + depthFactor * 0.8));
//         const renderSize = Math.max(0.5, p.size * (0.6 + depthFactor * 0.6));

//         // Golden metallic shimmer gradient
//         const particleGrad = ctx.createRadialGradient(
//           finalX,
//           finalY,
//           0,
//           finalX,
//           finalY,
//           renderSize,
//         );
//         particleGrad.addColorStop(0, "#FFFFFF");
//         particleGrad.addColorStop(0.3, "#E6C653");
//         particleGrad.addColorStop(0.7, "#D4AF37");
//         particleGrad.addColorStop(1, "rgba(142, 114, 30, 0)");

//         ctx.beginPath();
//         ctx.arc(finalX, finalY, renderSize, 0, Math.PI * 2);
//         ctx.fillStyle = particleGrad;
//         ctx.shadowColor = "#D4AF37";
//         ctx.shadowBlur = depthFactor > 0.7 ? 4 : 0;
//         ctx.fill();
//         ctx.shadowBlur = 0; // reset
//       });

//       ctx.restore();

//       animationId = requestAnimationFrame(render);
//     };

//     render();

//     return () => {
//       cancelAnimationFrame(animationId);
//       resizeObserver.disconnect();
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div
//       id="canvas-container"
//       className="absolute inset-0 block w-full h-full select-none pointer-events-none z-0 overflow-hidden"
//     >
//       <canvas ref={canvasRef} className="block w-full h-full opacity-50" />
//     </div>
//   );
// }

// @ts-ignore
import React, { useEffect, useRef } from "react";

export default function SilverCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationId: number;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();

    const resizeObserver = new ResizeObserver(() => resize());

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Mouse interaction
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouse.targetX = (e.clientX - rect.left - width / 2) / (width / 2);

      mouse.targetY = (e.clientY - rect.top - height / 2) / (height / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    interface OrbitParticle {
      angle: number;
      orbitRadius: number;
      speed: number;
      yPos: number;
      size: number;
      wobbleSpeed: number;
      wobbleRange: number;
    }

    const particles: OrbitParticle[] = [];

    const count = 75;

    for (let i = 0; i < count; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        orbitRadius: 70 + Math.random() * 110,
        speed: (0.002 + Math.random() * 0.005) * (Math.random() > 0.5 ? 1 : -1),
        yPos: (Math.random() - 0.5) * 80,
        size: 1 + Math.random() * 2.5,
        wobbleSpeed: 0.005 + Math.random() * 0.01,
        wobbleRange: 5 + Math.random() * 15,
      });
    }

    let globalRotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      globalRotation += 0.003;

      // Silver ambient glow
      const gradBg = ctx.createRadialGradient(
        width / 2 + mouse.x * 30,
        height / 2 + mouse.y * 30,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.5,
      );

      gradBg.addColorStop(0, "rgba(192, 192, 192, 0.035)");
      gradBg.addColorStop(0.5, "rgba(120, 120, 120, 0.015)");
      gradBg.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradBg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      ctx.save();

      ctx.translate(centerX, centerY);

      // Mouse tilt
      ctx.rotate(0.3 + mouse.y * 0.2);
      ctx.rotate(mouse.x * 0.2);

      // Orbit rings
      const ringRadii = [80, 130, 180];

      ringRadii.forEach((r, idx) => {
        ctx.beginPath();

        ctx.ellipse(
          0,
          0,
          r,
          r * 0.35,
          globalRotation * (0.2 + idx * 0.1),
          0,
          Math.PI * 2,
        );

        ctx.strokeStyle = `rgba(192, 192, 192, ${0.018 + 0.02 * (3 - idx)})`;

        ctx.lineWidth = 1.2 - idx * 0.2;

        ctx.stroke();
      });

      // Wireframe core
      const points: {
        x: number;
        y: number;
        z: number;
      }[] = [];

      const steps = 24;

      for (let i = 0; i <= steps; i++) {
        const phi = (i / steps) * Math.PI;

        for (let j = 0; j < steps; j += 4) {
          const theta = (j / steps) * Math.PI * 2 + globalRotation;

          const rx = 40 * Math.sin(phi) * Math.cos(theta);

          const ry = 40 * Math.cos(phi);

          const rz = 40 * Math.sin(phi) * Math.sin(theta);

          points.push({
            x: rx,
            y: ry,
            z: rz,
          });
        }
      }

      ctx.strokeStyle = "rgba(210, 210, 210, 0.045)";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < points.length; i += 3) {
        if (i + 1 < points.length) {
          ctx.beginPath();

          const p1 = points[i];
          const p2 = points[i + 1];

          const x1 = p1.x + p1.z * mouse.x * 0.1;

          const y1 = p1.y + p1.z * mouse.y * 0.1;

          const x2 = p2.x + p2.z * mouse.x * 0.1;

          const y2 = p2.y + p2.z * mouse.y * 0.1;

          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);

          ctx.stroke();
        }
      }

      // Particles
      particles.forEach((p) => {
        p.angle += p.speed;

        const wobble =
          Math.sin(globalRotation * 2 + p.angle * 3) * p.wobbleRange;

        const currentRadius =
          p.orbitRadius + Math.sin(globalRotation * p.wobbleSpeed) * 10;

        const px = Math.cos(p.angle) * currentRadius;

        const pz = Math.sin(p.angle) * currentRadius;

        const py = p.yPos + wobble;

        const rotY_cos = Math.cos(0.25 + mouse.y * 0.15);

        const rotY_sin = Math.sin(0.25 + mouse.y * 0.15);

        const finalX = px;

        const finalY = py * rotY_cos - pz * rotY_sin;

        const finalZ = py * rotY_sin + pz * rotY_cos;

        const depthFactor = (finalZ + 300) / 600;

        const renderSize = Math.max(0.5, p.size * (0.6 + depthFactor * 0.6));

        // Silver metallic particles
        const particleGrad = ctx.createRadialGradient(
          finalX,
          finalY,
          0,
          finalX,
          finalY,
          renderSize,
        );

        particleGrad.addColorStop(0, "#FFFFFF");
        particleGrad.addColorStop(0.25, "#D9D9D9");
        particleGrad.addColorStop(0.65, "#9E9E9E");
        particleGrad.addColorStop(1, "rgba(40, 40, 40, 0)");

        ctx.beginPath();

        ctx.arc(finalX, finalY, renderSize, 0, Math.PI * 2);

        ctx.fillStyle = particleGrad;

        // Soft silver glow
        ctx.shadowColor = "rgba(220,220,220,0.18)";

        ctx.shadowBlur = depthFactor > 0.7 ? 2 : 0;

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      ctx.restore();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);

      resizeObserver.disconnect();

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="canvas-container"
      className="absolute inset-0 block w-full h-full select-none pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-30" />
    </div>
  );
}
