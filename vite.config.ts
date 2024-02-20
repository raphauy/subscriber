import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/widget-init.tsx'), // Punto de entrada de tu librería/widget
      name: 'Subscriber', // Nombre global de tu librería cuando se use a través de un script tag
      fileName: 'widget' // Esto generará `widget.js` en la carpeta de salida
    },
    // rollupOptions: {
    //   external: ['react', 'react-dom'],
    //   output: {
    //     globals: {
    //       react: 'React',
    //       'react-dom': 'ReactDOM'
    //     },
    //     // Asegura que tu librería pueda ser importada correctamente en otros proyectos
    //     format: 'umd', // Este formato es compatible con la mayoría de los entornos
    //     // Para permitir que tu widget se use múltiples veces, considera habilitar `inlineDynamicImports`
    //     inlineDynamicImports: true,
    //   }
    // }
  },
});
