// global.d.ts
declare global {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
          src: string;
          alt: string;
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "auto-rotate-delay"?: string;
          "rotation-per-second"?: string;
          ar?: boolean;
          "ar-modes"?: string;
          "ios-src"?: string;
          exposure?: string;
          "environment-image"?: string;
        };
      }
    }
  }
  export {};
  